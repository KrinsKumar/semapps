const { MIME_TYPES } = require('@semapps/mime-types');
const matchActivity = require('../../../utils/matchActivity');

/**
 * Allow any service to process activities just after they are posted to the inbox or outbox.
 * It uses a jobs queue so that it is easy to watch and debug results
 * We recommend to use the ActivitiesHandlerMixin to make it easier to use this service.
 */
module.exports = {
  name: 'activitypub.side-effects',
  settings: {
    podProvider: false
  },
  async started() {
    this.processors = [];
  },
  actions: {
    /**
     * Add a new processor to handle activities
     */
    async addProcessor(ctx) {
      const { matcher, actionName, boxTypes, key, priority = 10 } = ctx.params;

      this.processors.push({ matcher, actionName, boxTypes, key, priority });

      // Sort processors by priority
      this.processors.sort((a, b) => a.priority - b.priority);
    },
    /**
     * Called by activitypub.outbox.post when an activity is posted
     */
    async processOutbox(ctx) {
      const { activity } = ctx.params;

      const job = await this.createJob(
        'processOutbox',
        activity.id,
        { activity },
        { removeOnComplete: { age: 2629800 } } // Keep completed jobs during one month
      );

      await job.finished();
    },
    /**
     * Called by activitypub.inbox.post when an activity is received
     * and by activitypub.outbox.post when an activity is sent to a local actor
     */
    async processInbox(ctx) {
      const { activity, recipients } = ctx.params;

      const job = await this.createJob(
        'processInbox',
        activity.id,
        { activity, recipients },
        { removeOnComplete: { age: 2629800 } } // Keep completed jobs during one month
      );

      await job.finished();
    },
    getProcessors() {
      return this.processors;
    }
  },
  methods: {
    matchActivity(pattern, activity, fetcher) {
      return matchActivity(pattern, activity, fetcher);
    },
    async fetch(resourceUri, webId, dataset) {
      try {
        // We must not return immediately, or errors will not be caught below
        const resource = await this.broker.call(
          'ldp.resource.get',
          {
            resourceUri,
            accept: MIME_TYPES.JSON,
            webId
          },
          { meta: { dataset } }
        );
        return resource;
      } catch (e) {
        this.logger.warn(
          `Could not fetch ${resourceUri} with webId ${webId} and dataset ${dataset}. Error: ${e.message}`
        );
        return false;
      }
    }
  },
  queues: {
    processInbox: {
      name: '*',
      // We must allow multiple jobs to be run at the same time, otherwise if
      // the activitypub.outbox.post action is called by a processor, the jobs queue will halt
      // (the first job will stay in active state, the other one in pending state)
      concurrency: 5,
      async process(job) {
        const { activity, recipients } = job.data;
        const startTime = performance.now();
        let errors = [],
          match,
          dereferencedActivity = activity;

        for (const recipientUri of recipients) {
          job.log(`Processing activity ${activity.id} received in the inbox of ${recipientUri}...`);

          const dataset = this.settings.podProvider
            ? await this.broker.call('auth.account.findDatasetByWebId', { webId: recipientUri })
            : undefined;
          const fetcher = resourceUri => this.fetch(resourceUri, recipientUri, dataset);

          for (const processor of this.processors) {
            if (processor.boxTypes.includes('inbox')) {
              // Even if there is no match, we keep in memory the dereferenced activity so that we don't need to dereference it again
              ({ match, dereferencedActivity } = await this.matchActivity(
                processor.matcher,
                dereferencedActivity,
                fetcher
              ));

              if (match) {
                try {
                  const result = await this.broker.call(
                    processor.actionName,
                    {
                      key: processor.key,
                      boxType: 'inbox',
                      dereferencedActivity,
                      actorUri: recipientUri
                    },
                    {
                      meta: { webId: recipientUri, dataset }
                    }
                  );
                  job.log(
                    `SUCCESS ${processor.key} (${processor.actionName}): ${
                      typeof result === 'object' ? JSON.stringify(result) : result
                    }`
                  );
                } catch (e) {
                  job.log(`ERROR ${processor.key} (${processor.actionName}): ${e.message}`);
                  errors.push(processor.key);
                }
              } else {
                job.log(`SKIP ${processor.key} (${processor.actionName})`);
              }
            }
          }
        }

        if (errors.length > 0) {
          throw new Error(
            `Could not fully process activity ${activity.id}. Error with the processor(s) ${errors.join(', ')}`
          );
        } else {
          return {
            dereferencedActivity,
            executionTime: `${Math.ceil(performance.now() - startTime) / 1000}s`
          };
        }
      }
    },
    processOutbox: {
      name: '*',
      // We must allow multiple jobs to be run at the same time, otherwise if
      // the activitypub.outbox.post action is called by a processor, the jobs queue will halt
      // (the first job will stay in active state, the other one in pending state)
      concurrency: 5,
      async process(job) {
        const { activity } = job.data;
        const emitterUri = activity.actor;
        const startTime = performance.now();
        let errors = [],
          match,
          dereferencedActivity = activity;

        job.log(`Processing activity ${activity.id} emitted to the outbox of ${emitterUri}...`);

        const dataset = this.settings.podProvider
          ? await this.broker.call('auth.account.findDatasetByWebId', { webId: emitterUri })
          : undefined;
        const fetcher = resourceUri => this.fetch(resourceUri, emitterUri, dataset);

        for (const processor of this.processors) {
          if (processor.boxTypes.includes('outbox')) {
            // Even if there is no match, we keep in memory the dereferenced activity so that we don't need to dereference it again
            ({ match, dereferencedActivity } = await this.matchActivity(
              processor.matcher,
              dereferencedActivity,
              fetcher
            ));

            if (match) {
              try {
                const result = await this.broker.call(
                  processor.actionName,
                  {
                    key: processor.key,
                    boxType: 'outbox',
                    dereferencedActivity,
                    actorUri: emitterUri
                  },
                  {
                    meta: { webId: emitterUri, dataset }
                  }
                );
                job.log(
                  `SUCCESS ${processor.key} (${processor.actionName}): ${
                    typeof result === 'object' ? JSON.stringify(result) : result
                  }`
                );
              } catch (e) {
                job.log(`ERROR ${processor.key} (${processor.actionName}): ${e.message}`);
                errors.push(processor.key);
              }
            } else {
              job.log(`SKIP ${processor.key} (${processor.actionName})`);
            }
          }
        }

        if (errors.length > 0) {
          throw new Error(
            `Could not fully process activity ${activity.id}. Error with the processor(s) ${errors.join(', ')}`
          );
        } else {
          return {
            dereferencedActivity,
            executionTime: `${Math.ceil(performance.now() - startTime) / 1000}s`
          };
        }
      }
    }
  }
};