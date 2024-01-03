const express = require('express');
const logger = require('../../domain/infrastructure/logger.service');
// const { logger } = require('../../domain/infrastructure/new-logger.service');

const router = express.Router();

router.use((req, res, next) => {
  logger.debug(`Starting request for correlationId: ${req.headers['x-correlation-id']}`);

  next();
});

module.exports = [
  router,
];
