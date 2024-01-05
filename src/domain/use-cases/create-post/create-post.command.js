const { BaseCommand } = require('../base.command');

class CreatePostCommand extends BaseCommand {
  constructor(correlationId, userId, tittle, body) {
    super(correlationId);
    this.userId = userId;
    this.tittle = tittle;
    this.body = body;
  }
}

module.exports = {
  CreatePostCommand,
};
