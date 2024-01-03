const http = require('../../../infrastructure/http.service');
const logger = require('../../../infrastructure/logger.service');
const env = require('../../../infrastructure/env');
const { createPostDTO } = require('./create-post.dto');

const getPosts = async () => {
  logger.debug('posts.service - start getPosts');

  const ret = await http.get(env.URI_POSTS_SERVICE);

  logger.debug('posts.service - finish getPosts');

  return ret;
};

const getPostsByUserId = async (userId) => {
  logger.debug('posts.service - start getPostsByUserId');

  const ret = await http.get(`${env.URI_POSTS_SERVICE}${userId}`);

  ret.filter(() => ret.userId === userId);

  logger.debug('posts.service - finish getPostsByUserId');

  return ret;
};

const createPost = async (createPostDto) => {
  logger.debug('posts.service - start createPost');

  const ret = await http.post(env.URI_POSTS_SERVICE, createPostDto);

  logger.debug('posts.service - finish createPost');

  return createPostDTO(ret);
};

module.exports = {
  getPosts,
  getPostsByUserId,
  createPost,
};
