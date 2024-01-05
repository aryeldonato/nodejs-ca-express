const server = require('./server');
const env = require('../domain/infrastructure/env');
const logger = require('../domain/infrastructure/logger.service');
const db = require('../domain/infrastructure/db.service');

const port = env.PORT;

server.listen(port, async () => {
  logger.debug('opening db connection');

  await db.openConnection();

  logger.info(`Running on port: ${port}`);
});

function shutdown() {
  logger.info('graceful shutdown express');

  logger.debug('closing db connection');

  db.closeConnection();

  process.exit(0);
}

process.on('SIGINT', shutdown);
