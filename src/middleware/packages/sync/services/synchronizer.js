const { defaultToArray } = require('@semapps/ldp');
const { ACTIVITY_TYPES, OBJECT_TYPES, ActivitiesHandlerMixin } = require('@semapps/activitypub');

const SynchronizerService = {
  name: 'synchronizer',
  mixins: [ActivitiesHandlerMixin],
  settings: {
    podProvider: false,
    mirrorGraph: true,
    synchronizeContainers: true,
    attachToLocalContainers: false
  },
  async started() {
    if (!this.settings.podProvider) {
      await this.broker.waitForServices('activitypub.relay');
      this.relayActor = await this.broker.call('activitypub.relay.getActor');
    }
  },
  methods: {
    async isValid(activity, recipientUri) {
      if (this.settings.podProvider) {
        const podExist = await this.broker.call('pod.exist', { webId: recipientUri });
        if (!podExist) {
          this.logger.warn(`No local Pod found for webId ${recipientUri}`);
          return false;
        } else {
          // TODO Check that emitter is in contacts ?
          return true;
        }
      } else {
        // Check that the recipient is the relay actor
        if (recipientUri !== this.relayActor.id) return false;

        // Check that the activity emitter is being followed by the relay actor
        return await this.broker.call('activitypub.follow.isFollowing', {
          follower: recipientUri,
          following: activity.actor
        });
      }
    }
  },
  activities: {
    create: {
      match: {
        type: ACTIVITY_TYPES.CREATE
      },
      async onReceive(ctx, activity, recipientUri) {
        if (await this.isValid(activity, recipientUri)) {
          for (const resourceUri of defaultToArray(activity.object)) {
            const object = await ctx.call('ldp.remote.store', {
              resourceUri,
              mirrorGraph: this.settings.mirrorGraph,
              webId: recipientUri
            });

            if (activity.target && this.settings.synchronizeContainers) {
              for (const containerUri of defaultToArray(activity.target)) {
                await ctx.call('ldp.container.attach', {
                  containerUri,
                  resourceUri,
                  webId: recipientUri
                });
              }
            }

            if (this.settings.attachToLocalContainers) {
              const resourceUri = object['@id'] || object.id;
              const type = object['@type'] || object.type;
              const container = await ctx.call('ldp.registry.getByType', { type });
              if (container) {
                try {
                  const containerUri = await ctx.call('ldp.registry.getUri', {
                    path: container.path,
                    webId: recipientUri
                  });
                  await ctx.call('ldp.container.attach', { containerUri, resourceUri, webId: recipientUri });
                } catch (e) {
                  this.logger.warn(
                    `Error when attaching remote resource ${resourceUri} to local container: ${e.message}`
                  );
                }
              } else {
                this.logger.warn(
                  `Cannot attach resource ${resourceUri} of type "${type}", no matching local containers were found`
                );
              }
            }
          }
        }
      }
    },
    update: {
      match: {
        type: ACTIVITY_TYPES.UPDATE
      },
      async onReceive(ctx, activity, recipientUri) {
        if (await this.isValid(activity, recipientUri)) {
          for (const resourceUri of defaultToArray(activity.object)) {
            await ctx.call('ldp.remote.store', {
              resourceUri,
              mirrorGraph: this.settings.mirrorGraph,
              webId: recipientUri
            });
          }
        }
      }
    },
    delete: {
      match: {
        type: ACTIVITY_TYPES.DELETE
      },
      async onReceive(ctx, activity, recipientUri) {
        if (await this.isValid(activity, recipientUri)) {
          for (const resourceUri of defaultToArray(activity.object)) {
            // If the remote resource is attached to a local container, it will be automatically detached
            await ctx.call('ldp.remote.delete', {
              resourceUri,
              webId: recipientUri
            });

            if (activity.target && this.settings.synchronizeContainers) {
              for (const containerUri of defaultToArray(activity.target)) {
                await ctx.call('ldp.container.detach', {
                  containerUri,
                  resourceUri,
                  webId: recipientUri
                });
              }
            }
          }
        }
      }
    },
    announceAddToContainer: {
      match: {
        type: ACTIVITY_TYPES.ADD,
        object: {
          type: OBJECT_TYPES.RELATIONSHIP
        }
      },
      async onReceive(ctx, activity, recipientUri) {
        if (this.settings.synchronizeContainers) {
          if (await this.isValid(activity, recipientUri)) {
            const predicate = await ctx.call('jsonld.parser.expandPredicate', {
              predicate: activity.object.relationship,
              context: activity['@context']
            });
            if (predicate === 'http://www.w3.org/ns/ldp#contains') {
              await ctx.call('ldp.container.attach', {
                containerUri: activity.object.subject,
                resourceUri: activity.object.object,
                webId: recipientUri
              });
            }
          }
        }
      }
    },
    announceRemoveFromContainer: {
      match: {
        type: ACTIVITY_TYPES.REMOVE,
        object: {
          type: OBJECT_TYPES.RELATIONSHIP
        }
      },
      async onReceive(ctx, activity, recipientUri) {
        if (this.settings.synchronizeContainers) {
          if (await this.isValid(activity, recipientUri)) {
            const predicate = await ctx.call('jsonld.parser.expandPredicate', {
              predicate: activity.object.relationship,
              context: activity['@context']
            });
            if (predicate === 'http://www.w3.org/ns/ldp#contains') {
              await ctx.call('ldp.container.detach', {
                containerUri: activity.object.subject,
                resourceUri: activity.object.object,
                webId: recipientUri
              });
            }
          }
        }
      }
    }
  }
};

module.exports = SynchronizerService;
