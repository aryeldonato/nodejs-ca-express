const request = require('supertest');
const server = require('../../server');
const postService = require('../../../domain/use-cases/create-post/create-post.service');

jest.mock('../../../domain/use-cases/create-post/create-post.service');

beforeAll(() => jest.clearAllMocks());
afterAll(() => jest.clearAllMocks());

test('it should receive HTTP 400', async () => {
  const createPostMock = {
    errorResult: {
      error_code: 'CREATE_POST_INVALID_REQUEST',
      error_message: 'message',
    },
  };

  const requestBody = {
    userId: 1,
    title: 'test is cool',
  };

  postService.createPost.mockResolvedValue(createPostMock);

  const res = await request(server)
    .post('/posts')
    .send(requestBody);

  const parsedJson = JSON.parse(res.text);

  expect(res.statusCode).toBe(400);
  expect(parsedJson.errorResult.error_code).toBe('CREATE_POST_INVALID_REQUEST');
});

test('it should receive HTTP 200', async () => {
  const requestBody = {
    userId: 1,
    tittle: 'test is cool',
    body: 'body body body',
  };

  const createPostMock = {

  };

  postService.createPost.mockResolvedValue(createPostMock);

  const res = await request(server)
    .post('/posts')
    .send(requestBody);

  expect(res.statusCode).toBe(200);
});
