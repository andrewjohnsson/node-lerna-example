const nconf = require('./config');

module.exports = {
  port: nconf.get('APP_PORT') || 3000,
  db: {
    name: 'example-db',
    host: nconf.get('MONGO_HOST') || 'localhost',
    port: nconf.get('MONGO_PORT') || 27017,
  }
};