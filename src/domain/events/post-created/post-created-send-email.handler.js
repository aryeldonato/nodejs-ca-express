const { eventEmitter } = require('./post-created.event');
const logger = require('../../infrastructure/logger.service');
const { POST_CREATED_EVENT } = require('./post-created.event');

setTimeout(() => { }, 5000);

const snooze = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const sendEmail = async () => {
  logger.debug('post-created-send-email.handler- start sendEmail');
  await snooze(3000);
  logger.debug('post-created-send-email.handler- finish sendEmail');
};

eventEmitter.on(POST_CREATED_EVENT, (bag) => {
  sendEmail();
  logger.info(`Sending email to ${JSON.stringify(bag)}`);
});
