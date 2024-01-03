const { Client } = require('pg');
const env = require('./env');
const logger = require('./logger.service');

const dbConfig = {
  host: env.DB_HOST,
  port: env.DB_PORT,
  database: env.DB_NAME,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
};

const client = new Client(dbConfig);

const openConnection = async () => {
  logger.trace(`db.service - pg connecting to DB: ${JSON.stringify(dbConfig)}`);

  await client.connect();
};

const closeConnection = async () => {
  logger.debug('db.service - pg closing DB connection');

  await client.end();
};

const executeSQL = async (query) => {
  logger.debug('db.service - start pg query');

  logger.trace(`db.service - pg executing SQL to DB: ${query}`);

  const res = await client.query(query);

  logger.trace(`db.service - pg rows affected: ${res.rowCount}`);

  logger.debug('db.service - finish pg query');
  return res;
};

module.exports = {
  openConnection,
  closeConnection,
  executeSQL,
};
