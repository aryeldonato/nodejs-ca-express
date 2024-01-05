const { eventEmitter } = require('./post-created.event');
const logger = require('../../infrastructure/logger.service');
const { POST_CREATED_EVENT } = require('./post-created.event');

const notifyRolowers = async () => {
  logger.debug('post-created-notify-followers.handler- start notifyRolowers');

  logger.debug('post-created-notify-followers.handler- finish notifyRolowers');
};

eventEmitter.on(POST_CREATED_EVENT, (bag) => {
  notifyRolowers();
  logger.info(`Notifying followers ${JSON.stringify(bag)}`);
});
