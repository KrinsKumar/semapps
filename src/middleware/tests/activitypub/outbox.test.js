const { ACTIVITY_TYPES, OBJECT_TYPES, PUBLIC_URI } = require('@semapps/activitypub');
const waitForExpect = require('wait-for-expect');
const initialize = require('./initialize');

jest.setTimeout(50000);

let broker;
let broker2;

beforeAll(async () => {
  broker = await initialize(3000, 'testData', 'settings');
  broker2 = broker;
});
afterAll(async () => {
  if (broker) await broker.stop();
});

describe('Permissions are correctly set on outbox', () => {
  let simon;
  let sebastien;

  test('Create actor', async () => {
    const { webId: sebastienUri } = await broker.call('auth.signup', {
      username: 'srosset81',
      email: 'sebastien@test.com',
      password: 'test',
      name: 'Sébastien'
    });

    sebastien = await broker.call('activitypub.actor.awaitCreateComplete', { actorUri: sebastienUri });

    const { webId: simonUri } = await broker2.call('auth.signup', {
      username: 'simonlouvet',
      email: 'simon@test.com',
      password: 'test',
      name: 'Simon'
    });

    simon = await broker2.call('activitypub.actor.awaitCreateComplete', { actorUri: simonUri });

    expect(sebastien).toMatchObject({
      id: sebastienUri,
      type: ['Person', 'foaf:Person'],
      preferredUsername: 'srosset81',
      'foaf:nick': 'srosset81',
      inbox: `${sebastienUri}/inbox`,
      outbox: `${sebastienUri}/outbox`,
      followers: `${sebastienUri}/followers`,
      following: `${sebastienUri}/following`
    });
  });

  test('Post private message to self', async () => {
    await broker.call('activitypub.outbox.post', {
      collectionUri: sebastien.outbox,
      '@context': 'https://www.w3.org/ns/activitystreams',
      type: OBJECT_TYPES.NOTE,
      name: 'Private message to self'
    });

    // Get outbox as self
    await waitForExpect(async () => {
      const outbox = await broker.call('activitypub.collection.get', {
        collectionUri: sebastien.outbox,
        page: 1,
        webId: sebastien.id
      });
      expect(outbox.orderedItems).toHaveLength(1);
      expect(outbox.orderedItems[0]).toMatchObject({
        actor: sebastien.id,
        type: ACTIVITY_TYPES.CREATE,
        object: {
          type: OBJECT_TYPES.NOTE,
          name: 'Private message to self'
        }
      });
    });

    // Get outbox as anonymous
    await waitForExpect(async () => {
      const outbox = await broker.call('activitypub.collection.get', {
        collectionUri: sebastien.outbox,
        page: 1,
        webId: 'anon'
      });
      expect(outbox.orderedItems).toHaveLength(0);
    });
  });

  test('Post private message to friend', async () => {
    await broker.call('activitypub.outbox.post', {
      collectionUri: sebastien.outbox,
      '@context': 'https://www.w3.org/ns/activitystreams',
      type: OBJECT_TYPES.NOTE,
      name: 'Private message to friend',
      to: simon.id
    });

    // Get outbox as friend
    await waitForExpect(async () => {
      const outbox = await broker.call('activitypub.collection.get', {
        collectionUri: sebastien.outbox,
        page: 1,
        webId: simon.id
      });
      expect(outbox.orderedItems).toHaveLength(1);
      expect(outbox.orderedItems[0]).toMatchObject({
        actor: sebastien.id,
        type: ACTIVITY_TYPES.CREATE,
        object: {
          type: OBJECT_TYPES.NOTE,
          name: 'Private message to friend'
        }
      });
    });

    // Get outbox as anonymous
    await waitForExpect(async () => {
      const outbox = await broker.call('activitypub.collection.get', {
        collectionUri: sebastien.outbox,
        page: 1,
        webId: 'anon'
      });
      expect(outbox.orderedItems).toHaveLength(0);
    });
  });

  test('Post public message', async () => {
    await broker.call('activitypub.outbox.post', {
      collectionUri: sebastien.outbox,
      '@context': 'https://www.w3.org/ns/activitystreams',
      type: OBJECT_TYPES.NOTE,
      name: 'Public message',
      to: PUBLIC_URI
    });

    // Get outbox as friend
    await waitForExpect(async () => {
      const outbox = await broker.call('activitypub.collection.get', {
        collectionUri: sebastien.outbox,
        page: 1,
        webId: simon.id
      });
      expect(outbox.orderedItems).toHaveLength(2);
      expect(outbox.orderedItems[0]).toMatchObject({
        actor: sebastien.id,
        type: ACTIVITY_TYPES.CREATE,
        object: {
          type: OBJECT_TYPES.NOTE,
          name: 'Public message'
        }
      });
    });

    // Get outbox as anonymous
    await waitForExpect(async () => {
      const outbox = await broker.call('activitypub.collection.get', {
        collectionUri: sebastien.outbox,
        page: 1,
        webId: 'anon'
      });
      expect(outbox.orderedItems).toHaveLength(1);
      expect(outbox.orderedItems[0]).toMatchObject({
        actor: sebastien.id,
        type: ACTIVITY_TYPES.CREATE,
        object: {
          type: OBJECT_TYPES.NOTE,
          name: 'Public message'
        }
      });
    });
  });
});
