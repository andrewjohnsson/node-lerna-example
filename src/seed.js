const { getClient } = require('./mongo');

const seed = () => {
  const client = getClient();
  
  return client
    .collection('greetings')
    .insertOne({
      hello: 'world',
    });
};

module.exports = {
  seed
};
