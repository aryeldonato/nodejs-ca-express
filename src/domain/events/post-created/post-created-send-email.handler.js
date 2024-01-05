const { eventEmitter } = require('./post-created.event');
const logger = require('../../infrastructure/logger.service');
const { POST_CREATED_EVENT } = require('./post-created.event');

const sendEmail = async () => {
  logger.debug('post-created-send-email.handler- start sendEmail');

  logger.debug('post-created-send-email.handler- finish sendEmail');
};

eventEmitter.on(POST_CREATED_EVENT, (bag) => {
  sendEmail();
  logger.info(`Sending email to ${JSON.stringify(bag)}`);
});
