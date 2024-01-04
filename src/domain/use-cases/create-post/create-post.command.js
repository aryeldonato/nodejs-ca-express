class CreatePostCommand {
  constructor(userId, tittle, body) {
    this.userId = userId;
    this.tittle = tittle;
    this.body = body;
  }
}

module.exports = {
  CreatePostCommand,
};
