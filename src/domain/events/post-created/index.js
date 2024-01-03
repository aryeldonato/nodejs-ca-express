const postCreatedEvent = require('./post-created.event');
const postCreatedSendEmailHandler = require('./post-created-send-email.handler');

module.exports = {
  postCreatedEvent,
  postCreatedSendEmailHandler,
};
