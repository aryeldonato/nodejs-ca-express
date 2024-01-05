const { userEntity, userEntityList } = require('./user.entity');
const logger = require('../../../infrastructure/logger.service');
const db = require('../../../infrastructure/db.service');

const getUsers = async () => {
  logger.debug('user.repository - start getUsers');

  const ret = await db.executeCommand('SELECT * FROM tbl_users');

  logger.debug('user.repository - finish getUsers');

  return userEntityList(ret.rows);
};

const getUserById = async (createPostCommand) => {
  logger.debug('user.repository - start getUserById');

  const ret = await db.executeSQL(`SELECT * FROM tbl_users WHERE id = ${createPostCommand.userId}`);

  logger.debug('user.repository - finish getUserById');

  return userEntity(ret.rows[0]);
};

const createUser = async (userName) => {
  logger.debug('user.repository - start createUser');

  const ret = await db.executeSQL(`INSERT INTO tbl_users (name) VALUES (${userName})'`);

  logger.debug('user.repository - finish createUser');

  return ret;
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
};
