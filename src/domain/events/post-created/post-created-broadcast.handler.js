const { eventEmitter } = require('./post-created.event');
const logger = require('../../infrastructure/logger.service');
const { POST_CREATED_EVENT } = require('./post-created.event');

const broadcast = async () => {
  logger.debug('post-created-broadcast.handler- start broadcast');

  // Inserindo a mensagem na fila

  logger.debug('post-created-broadcast.handler- finish broadcast');
};

eventEmitter.on(POST_CREATED_EVENT, (bag) => {
  broadcast();
  logger.info(`Notifying followers ${JSON.stringify(bag)}`);
});
