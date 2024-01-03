const { postCreatedEvent } = require('../../../events/post-created');
const { LoggerService } = require('../../../infrastructure/domain-logger.service');
const { errorResult } = require('../error.result');
const { createPostSchema } = require('./create-post.schema');
const todosGatewayService = require('../../../gateways/services/posts/posts.service');
const { createPostCommandResult } = require('./create-post.command.result');
const usersRepository = require('../../../gateways/repositories/user/user.repository');

const CREATE_POST_INVALID_REQUEST = 'CREATE_POST_INVALID_REQUEST';
const CREATE_POST_INVALID_USER = 'CREATE_POST_INVALID_USER';

const createPost = async (createPostCommand) => {
  const logger = new LoggerService();

  logger.info('create-post.service - start createPost');

  logger.trace(`create-post.service - createPostCommand object ${JSON.stringify(createPostCommand)}`);

  const schemaValidation = createPostSchema.validate(createPostCommand);

  if (schemaValidation.error) {
    logger.info(`create-post.service - createPostCommand object is invalid returning error, error: ${schemaValidation.error.message}`);

    return errorResult(CREATE_POST_INVALID_REQUEST, schemaValidation.error.message);
  }

  logger.debug('create-post.service - createPostCommand object is valid!');

  logger.debug('create-post.service - checking if userId is valid');

  const userModel = await usersRepository.getUserById(createPostCommand.userId);

  if (!userModel) {
    logger.debug(`create-post.service - userId ${createPostCommand.userId} is invalid`);

    return errorResult(CREATE_POST_INVALID_USER, `userId ${createPostCommand.userId} is invalid`);
  }

  logger.debug('create-post.service - userId is valid!');

  logger.debug('create-post.service - creating the post for user');

  const createPostDTO = await todosGatewayService.createPost(createPostCommand);

  postCreatedEvent.emmitPostCreated(createPostDTO);

  logger.debug('create-post.service - post created!');

  logger.trace(`create-post.service - createPostCommandResult is: ${JSON.stringify(createPostDTO)}`);

  logger.info('create-post.service - finish createPost');

  return createPostCommandResult(createPostDTO);
};

module.exports = {
  createPost,
};
