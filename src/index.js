const config = require('@andrewjohnsson/config');

const { connect, disconnect } = require('./mongo');
const { seed } = require('./seed');

const http = require('http');
const app = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
});

connect()
  .then(() => console.log('DB connection established successfuly'))
  .then(() => seed())
  .then(() => console.log('Greeting was saved!'))
  .then(() => disconnect())
  .then(() => console.log('DB connection terminated'))
  .catch(e => console.log(`DB error: ${e.message}`));

const server = app.listen(config.port, () => console.log(`Server is listening on port ${config.port}`));

module.exports = server;
