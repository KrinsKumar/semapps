const { Errors: E } = require('moleculer-web');
const getRoute = require('./getRoute');

const SparqlEndpointService = {
  name: 'sparqlEndpoint',
  settings: {
    defaultAccept: 'text/turtle',
    ignoreAcl: false,
    podProvider: false
  },
  dependencies: ['triplestore', 'api'],
  async started() {
    if (this.settings.podProvider) {
      await this.broker.call('api.addRoute', { route: getRoute('/:username/sparql'), toBottom: false });
    } else {
      await this.broker.call('api.addRoute', { route: getRoute('/sparql'), toBottom: false });
    }
  },
  actions: {
    async query(ctx) {
      const query = ctx.params.query || ctx.params.body;
      const accept = ctx.meta.headers.accept || this.settings.defaultAccept;

      // Only user can query his own pod
      if (this.settings.podProvider) {
        const account = await ctx.call('auth.account.findByWebId', { webId: ctx.meta.webId });
        if (account.username !== ctx.params.username) throw new E.ForbiddenError();
      }

      const response = await ctx.call('triplestore.query', {
        query,
        accept,
        dataset: ctx.params.username,
        // In POD provider config, query as system as we are searching our own data
        webId: this.settings.ignoreAcl || this.settings.podProvider ? 'system' : ctx.meta.webId
      });

      if (ctx.meta.$responseType === undefined) {
        ctx.meta.$responseType = ctx.meta.responseType || accept;
      }

      return response;
    }
  }
  // TODO restore this when https://github.com/assemblee-virtuelle/semapps/issues/893 will be fixed
  // events: {
  //   async 'auth.registered'(ctx) {
  //     const { webId } = ctx.params;
  //
  //     if( this.settings.podProvider ) {
  //       await ctx.call('ldp.resource.patch', {
  //         resource: {
  //           '@id': webId,
  //           endpoints: {
  //             'void:sparqlEndpoint': urlJoin(webId, 'sparql'),
  //           }
  //         },
  //         contentType: MIME_TYPES.JSON,
  //         webId: 'system'
  //       });
  //     }
  //   }
  // }
};

module.exports = SparqlEndpointService;
