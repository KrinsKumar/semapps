const fse = require('fs-extra');
const path = require('path');
const { TripleStoreService } = require('@semapps/triplestore');
const { LdpService, getPrefixJSON } = require('@semapps/ldp');
const { ActivityPubService } = require('@semapps/activitypub');
const { SignatureService } = require('@semapps/signature');
const { WebfingerService } = require('@semapps/webfinger');
const CONFIG = require('../config');
const ontologies = require('../ontologies');

const initialize = broker => async () => {
  // Remove all actors keys
  await fse.emptyDir(path.resolve(__dirname, './actors'));

  broker.createService(TripleStoreService, {
    settings: {
      sparqlEndpoint: CONFIG.SPARQL_ENDPOINT,
      mainDataset: CONFIG.MAIN_DATASET,
      jenaUser: CONFIG.JENA_USER,
      jenaPassword: CONFIG.JENA_PASSWORD
    }
  });
  broker.createService(LdpService, {
    settings: {
      baseUrl: CONFIG.HOME_URL + 'ldp/',
      ontologies
    }
  });
  broker.createService(ActivityPubService, {
    settings: {
      baseUri: CONFIG.HOME_URL,
      additionalContext: getPrefixJSON(ontologies)
    }
  });
  broker.createService(SignatureService, {
    settings: {
      actorsKeyPairsDir: path.resolve(__dirname, './actors')
    }
  });

  await broker.start();
  await broker.call('triplestore.dropAll');

  // Restart broker after dropAll, so that the default container is recreated
  await broker.start();
};

module.exports = initialize;
