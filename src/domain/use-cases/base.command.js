class BaseCommand {
  constructor(correlationId) {
    this.correlationId = correlationId;
  }
}

module.exports = {
  BaseCommand,
};
