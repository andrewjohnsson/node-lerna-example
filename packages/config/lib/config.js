const nconf = require('nconf');

nconf
  .use('memory')
  .argv()
  .env();

module.exports = nconf;
