const config = require('../packages/config/lib');
const { MongoClient } = require('mongodb');

let resolved = {
  client: null,
  db: null
};

const connect = () => MongoClient
  .connect(`mongodb://${config.db.host}:${config.db.port}`, {
    useNewUrlParser: true,
  })
  .then((client) => {
    resolved.client = client;
    resolved.db = client.db(config.db.name);
  });

const disconnect = () => resolved.client.close();

const getClient = () => resolved.db;

module.exports = {
  connect,
  disconnect,
  getClient,
};
