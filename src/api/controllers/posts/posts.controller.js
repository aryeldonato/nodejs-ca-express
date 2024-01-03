const express = require('express');
const postService = require('../../../domain/use-cases/posts/create-post/create-post.service');
// const logger = require('../../../domain/infrastructure/logger.service');
const { CreatePostCommand } = require('../../../domain/use-cases/posts/create-post/create-post.command');

const router = express.Router();

router.post('/posts', async (req, res) => {
  const createPostCmd = new CreatePostCommand(req.body.userId, req.body.tittle, req.body.body);
  const ret = await postService.createPost(createPostCmd);

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
