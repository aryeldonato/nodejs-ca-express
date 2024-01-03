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
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf((info) => `[${info.timestamp}][${info.level}][${info[0]}][${info.message}]`),
  ),
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({ filename: './log/app.log' }),
  ],
});

const trace = (message) => {
  logger.silly(message, ['general-logger']);
};

const debug = (message) => {
  logger.debug(message, ['general-logger']);
};

const info = (message) => {
  logger.info(message, ['general-logger']);
};

const warn = (message) => {
  logger.warn(message, ['general-logger']);
};

const error = (message) => {
  logger.error(message, ['general-logger']);
};

module.exports = {
  trace,
  debug,
  info,
  warn,
  error,
};
