const express = require('express');

const router = express.Router();
const logger = require('../../../domain/infrastructure/logger.service');

router.get('/health', (req, res) => {
  logger.info('health.controller.js hitted');

  res
    .status(200)
    .json({ message: 'OK' });
});

module.exports = [
  router,
];
