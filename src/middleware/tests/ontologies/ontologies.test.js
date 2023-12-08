const fetch = require('node-fetch');
const urlJoin = require('url-join');
const initialize = require('./initialize');
const CONFIG = require('../config');

jest.setTimeout(10000);
let broker;

beforeAll(async () => {
  broker = await initialize();
});
afterAll(async () => {
  if (broker) await broker.stop();
});

const ont1 = {
  prefix: 'ont1',
  url: 'https://www.w3.org/ns/ontology1#',
  jsonldContext: 'https://www.w3.org/ns/ontology1.jsonld',
  preserveContextUri: true
};

const ont2 = {
  prefix: 'ont2',
  url: 'https://www.w3.org/ns/ontology2#',
  jsonldContext: 'https://www.w3.org/ns/ontology2.jsonld'
};

const ont3 = {
  prefix: 'ont3',
  url: 'https://www.w3.org/ns/ontology3#',
  jsonldContext: {
    ont3: 'https://www.w3.org/ns/ontology3#',
    friend: {
      '@id': 'ont3:friend',
      '@type': '@id',
      '@protected': true
    }
  }
};

const ont4 = {
  prefix: 'ont4',
  url: 'https://www.w3.org/ns/ontology4#',
  jsonldContext: {
    ont4: 'https://www.w3.org/ns/ontology4#',
    friend: {
      '@id': 'ont4:friend',
      '@type': '@id'
    }
  }
};

const localContextUri = urlJoin(CONFIG.HOME_URL, 'context.json');

describe('Ontologies registration', () => {
  test('Register a new ontology', async () => {
    await broker.call('ldp.ontologies.register', { ...ont1 });

    await expect(broker.call('ldp.ontologies.getByPrefix', { prefix: 'ont1' })).resolves.toMatchObject(ont1);

    await expect(broker.call('ldp.ontologies.list')).resolves.toEqual(
      expect.arrayContaining([expect.objectContaining(ont1)])
    );
  });

  test('Register the same ontology with overwrite = false', async () => {
    await expect(broker.call('ldp.ontologies.register', { ...ont1, overwrite: false })).rejects.toThrow();
  });

  test('Register the same ontology with overwrite = true', async () => {
    await broker.call('ldp.ontologies.register', {
      ...ont1,
      owl: 'https://www.w3.org/ns/ontology1.ttl',
      overwrite: true
    });

    await expect(broker.call('ldp.ontologies.getByPrefix', { prefix: 'ont1' })).resolves.toMatchObject({
      ...ont1,
      owl: 'https://www.w3.org/ns/ontology1.ttl'
    });

    await expect(broker.call('ldp.ontologies.list')).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ...ont1,
          owl: 'https://www.w3.org/ns/ontology1.ttl'
        })
      ])
    );
  });

  test('Register a 2nd ontology', async () => {
    await broker.call('ldp.ontologies.register', { ...ont2 });

    await expect(broker.call('ldp.ontologies.getByPrefix', { prefix: 'ont2' })).resolves.toMatchObject(ont2);

    await expect(broker.call('ldp.ontologies.list')).resolves.toEqual(
      expect.arrayContaining([expect.objectContaining(ont1), expect.objectContaining(ont2)])
    );
  });

  test('Register a 3nd ontology', async () => {
    await broker.call('ldp.ontologies.register', { ...ont3 });

    await expect(broker.call('ldp.ontologies.getByPrefix', { prefix: 'ont3' })).resolves.toMatchObject(ont3);

    await expect(broker.call('ldp.ontologies.list')).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining(ont1),
        expect.objectContaining(ont2),
        expect.objectContaining(ont3)
      ])
    );
  });

  test('Register a 4th ontology with JSON-LD conflicts', async () => {
    await expect(broker.call('ldp.ontologies.register', { ...ont4 })).rejects.toThrow();
  });

  test('Find prefixes with prefix.cc', async () => {
    let result = await broker.call('ldp.ontologies.findPrefix', { url: 'http://xmlns.com/foaf/0.1/name' });
    expect(result).toBe('foaf');

    result = await broker.call('ldp.ontologies.findPrefix', { url: 'http://xmlns.com/foaf/0.1/' });
    expect(result).toBe('foaf');

    result = await broker.call('ldp.ontologies.findPrefix', { url: 'http://xmlns.com/foaf' });
    expect(result).toBeNull();
  });

  test('Get JSON-LD context', async () => {
    const context = await broker.call('jsonld.context.get');

    expect(context).toEqual(expect.arrayContaining([ont1.jsonldContext, localContextUri]));

    // Note: Other tests for JSON-LD contexts are made on jsonld.test.js
  });

  test('Get local JSON-LD context', async () => {
    const res = await fetch(localContextUri);

    expect(res.ok).toBeTruthy();

    const context = await res.json();

    // Only the ontologies 2 and 3 should be included
    expect(context).toEqual({
      '@context': {
        ont2: 'https://www.w3.org/ns/ontology2#',
        ont3: 'https://www.w3.org/ns/ontology3#',
        friend: {
          '@id': 'https://www.w3.org/ns/ontology3#friend',
          '@type': '@id',
          '@protected': true
        }
      }
    });
  });

  test('Get RDF prefixes', async () => {
    const rdfPrefixes = await broker.call('ldp.ontologies.getRdfPrefixes');

    expect(rdfPrefixes).toBe(
      'PREFIX ont1: <https://www.w3.org/ns/ontology1#>\nPREFIX ont2: <https://www.w3.org/ns/ontology2#>\nPREFIX ont3: <https://www.w3.org/ns/ontology3#>'
    );
  });
});
