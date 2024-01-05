const winston = require('winston');
const env = require('./env');

const returnLogLevel = () => {
  const logLevel = [
    { externalLevel: 'TRACE', internalLevel: 'silly' },
    { externalLevel: 'DEBUG', internalLevel: 'debug' },
    { externalLevel: 'INFO', internalLevel: 'info' },
    { externalLevel: 'WARN', internalLevel: 'warn' },
    { externalLevel: 'ERROR', internalLevel: 'error' },
    { externalLevel: 'OFF', internalLevel: 'OFF' },
  ];

  const level = logLevel
    .filter((l) => l.externalLevel === env.LOG_LEVEL)
    .map((m) => m.internalLevel)
    .reduce((n) => n);

  return level;
};

const logger = winston.createLogger({
  level: returnLogLevel(),
  silent: returnLogLevel() === 'OFF',
  defaultMeta: {
    service: 'nodejs-ca-express',
  },
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({ filename: './log/app.log' }),
  ],
});

const trace = (message) => {
  logger.silly(message);
};

const debug = (message) => {
  logger.debug(message);
};

const info = (message) => {
  logger.info(message);
};

const warn = (message) => {
  logger.warn(message);
};

const error = (message) => {
  logger.error(message);
};

module.exports = {
  trace,
  debug,
  info,
  warn,
  error,
};
