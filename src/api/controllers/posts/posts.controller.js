const express = require('express');
const createPostUseCase = require('../../../domain/use-cases/create-post/create-post.use-case');
// const logger = require('../../../domain/infrastructure/logger.service');
const { CreatePostCommand } = require('../../../domain/use-cases/create-post/create-post.command');

const router = express.Router();

router.post('/posts', async (req, res) => {
  const correlationId = req.headers['x-correlation-id'];

  const createPostCmd = new CreatePostCommand(
    correlationId,
    req.body.userId,
    req.body.tittle,
    req.body.body,
  );

  const ret = await createPostUseCase.execute(createPostCmd);

  if (ret.errorResult) {
    res
      .status(400)
      // .header('x-request-id', logger.getBagRequestId())
      .json(ret);
  } else {
    res
      .status(200)
      // .header('x-request-id', logger.getBagRequestId())
      .json(ret);
  }
});

module.exports = [
  router,
];
