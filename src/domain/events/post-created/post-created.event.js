const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();
const POST_CREATED_EVENT = 'POST_CREATED_EVENT';

const emmitPostCreated = (bag) => {
  eventEmitter.emit(POST_CREATED_EVENT, bag);
};

module.exports = {
  eventEmitter,
  emmitPostCreated,
  POST_CREATED_EVENT,
};
