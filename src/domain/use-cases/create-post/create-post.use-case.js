const { postCreatedEvent } = require('../../events/post-created');
const logger = require('../../infrastructure/logger.service');
const { errorResult } = require('../error.result');
const { createPostSchema } = require('./create-post.schema');
const todosGatewayService = require('../../gateways/services/posts/posts.service');
const { createPostResult } = require('./create-post.result');
const usersRepository = require('../../gateways/repositories/user/user.repository');

const CREATE_POST_INVALID_REQUEST = 'CREATE_POST_INVALID_REQUEST';
const CREATE_POST_INVALID_USER = 'CREATE_POST_INVALID_USER';

const execute = async (createPostCommand) => {
  logger.info('create-post.use-case - start createPost');

  logger.trace(`create-post.use-case - createPostCommand object ${JSON.stringify(createPostCommand)}`);

  const schemaValidation = createPostSchema.validate(createPostCommand);

  if (schemaValidation.error) {
    logger.warn(`create-post.use-case - createPostCommand object is invalid returning error: ${schemaValidation.error.message}`);

    return errorResult(CREATE_POST_INVALID_REQUEST, schemaValidation.error.message);
  }

  logger.debug('create-post.use-case - checking if userId is valid');

  const userEntity = await usersRepository.getUserById(createPostCommand);

  if (!userEntity) {
    logger.warn(`create-post.use-case - userId ${createPostCommand.userId} is invalid`);

    return errorResult(CREATE_POST_INVALID_USER, `userId ${createPostCommand.userId} is invalid`);
  }

  logger.debug('create-post.use-case - creating the post for user');

  const createPostDTO = await todosGatewayService.createPost(createPostCommand);

  postCreatedEvent.emmitPostCreated(createPostDTO);

  logger.debug('create-post.use-case - post created!');

  logger.trace(`create-post.use-case - createPostResult is: ${JSON.stringify(createPostDTO)}`);

  logger.info('create-post.use-case - finish createPost');

  return createPostResult(createPostDTO);
};

module.exports = {
  execute,
};
