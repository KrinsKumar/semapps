const jsonld = require('jsonld');
const { MIME_TYPES } = require('@semapps/mime-types');

const TripleStoreCollectionService = {
  name: 'activitypub.collection',
  dependencies: ['triplestore'],
  actions: {
    /*
     * Create a persisted collection
     * @param collectionUri The full URI of the collection
     * @param summary An optional description of the collection
     */
    async create(ctx) {
      const collection = {
        '@context': 'https://www.w3.org/ns/activitystreams',
        id: ctx.params.collectionUri,
        type: ctx.params.ordered ? ['Collection', 'OrderedCollection'] : 'Collection',
        summary: ctx.params.summary
      };

      return await ctx.call('triplestore.insert', {
        resource: collection,
        accept: MIME_TYPES.JSON,
        contentType: MIME_TYPES.JSON
      });
    },
    /*
     * Checks if the collection exists
     * @param collectionUri The full URI of the collection
     * @return true if the collection exists
     */
    async exist(ctx) {
      return await ctx.call('triplestore.query', {
        query: `
          PREFIX as: <https://www.w3.org/ns/activitystreams#>
          ASK
          WHERE {
            <${ctx.params.collectionUri}> a as:Collection .
          }
        `,
        accept: MIME_TYPES.JSON
      });
    },
    /*
     * Attach an object to a collection
     * @param collectionUri The full URI of the collection
     * @param item The resource to add to the collection
     */
    async attach(ctx) {
      const collectionExist = ctx.call('activitypub.collection.exist', {
        collectionUri: ctx.params.collectionUri
      });
      if (!collectionExist) throw new Error('Cannot attach to a non-existing collection !');

      const collection = {
        '@context': 'https://www.w3.org/ns/activitystreams',
        id: ctx.params.collectionUri,
        items: typeof ctx.params.item === 'object' ? ctx.params.item.id || ctx.params.item['@id'] : ctx.params.item
      };

      return await ctx.call('triplestore.insert', {
        resource: collection,
        accept: MIME_TYPES.JSON,
        contentType: MIME_TYPES.JSON
      });
    },
    /*
     * Returns a JSON-LD formatted collection stored in the triple store
     * @param id The full URI of the collection
     */
    async get(ctx) {
      let result = await ctx.call('triplestore.query', {
        query: `
          PREFIX as: <https://www.w3.org/ns/activitystreams#>
          CONSTRUCT {
            <${ctx.params.id}> 
              a ?type ;
              as:items ?item .
              ?item ?iP ?iO .
              ?iO ?siP ?siO .
          }
          WHERE {
            <${ctx.params.id}> a ?type .
            OPTIONAL { 
              <${ctx.params.id}> as:items ?item .
              ?item ?iP ?iO .
              ?iO ?siP ?siO .
            }
          }
        `,
        accept: MIME_TYPES.JSON
      });

      result = await jsonld.frame(result, {
        '@context': 'https://www.w3.org/ns/activitystreams',
        '@id': ctx.params.id
      });

      let { items, ...collection } = result['@graph'][0];
      items = !items ? [] : Array.isArray(items) ? items : [items];

      const itemsProp = this.isOrderedCollection(collection) ? 'orderedItems' : 'items';

      collection = {
        '@context': result['@context'],
        ...collection,
        [itemsProp]: items,
        totalItems: items.length
      };

      return collection;
    },
    clear(ctx) {
      // Do nothing. This is just to ensure tests don't break.
    }
  },
  methods: {
    isOrderedCollection(collection) {
      return (
        collection.type === 'OrderedCollection' ||
        (Array.isArray(collection.type) && collection.type.includes('OrderedCollection'))
      );
    }
  }
};

module.exports = TripleStoreCollectionService;
