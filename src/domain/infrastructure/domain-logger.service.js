const crypto = require('node:crypto');
const winston = require('winston');
const env = require('./env');

class LoggerService {
  constructor(correlationId) {
    this.correlationId = correlationId || crypto.randomUUID();
    this.logLevel = this.returnLogLevel();
    this.logger = this.createLogger();
  }

  returnLogLevel() {
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

    this.logLevel = level;
  }

  createLogger() {
    return winston.createLogger({
      level: this.returnLogLevel(),
      silent: this.returnLogLevel() === 'OFF',
      defaultMeta: {
        service: 'nodejs-ca-express',
      },
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf((info) => `[${info.timestamp}][${info.level}][${this.correlationId}][${info.message}]`),
      ),
      transports: [
        new winston.transports.Console(),
      // new winston.transports.File({ filename: './log/app.log' }),
      ],
    });
  }

  trace(message) {
    this.logger.silly(message);
  }

  debug(message) {
    this.logger.debug(message);
  }

  info(message) {
    this.logger.info(message);
  }

  warn(message) {
    this.logger.warn(message);
  }

  error(message) {
    this.logger.error(message);
  }
}

module.exports = { LoggerService };
