# Node HTTP server + Mongo

Here's an example of Node HTTP server and MongoDB, dockerized.
Uses Lerna to store common code aside, for better re-use

Prerequisites:
- [Node 8+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install)

Supported env variables:
- APP_PORT (3000 by default)
- MONGO_HOST (localhost by default)
- MONGO_PORT (27017 by default)

Links:
1. [Install Docker](https://docs.docker.com/install/)
2. [Dockerfile doc](https://docs.docker.com/engine/reference/builder/)
3. [Compose File doc](https://docs.docker.com/compose/compose-file/)
