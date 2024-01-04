const axios = require('axios').default;

const { CreatePostCommand } = require('./create-post.command');
const createPostService = require('./create-post.service');

jest.mock('axios');

jest.mock('pg', () => {
  const mClient = {
    connect: jest.fn(),
    query: jest.fn(() => ({
      rowCount: 1,
      rows: ['dummy'],
    })),
    end: jest.fn(),
  };
  return { Client: jest.fn(() => mClient) };
});

beforeAll(() => jest.clearAllMocks());
afterAll(() => jest.clearAllMocks());

test('it should receive the the domain error CREATE_POST_INVALID_REQUEST', async () => {
  const cmd = new CreatePostCommand(null, 'tittle', 'body');
  const ret = await createPostService.createPost(cmd);

  expect(ret.errorResult.error_code).toBe('CREATE_POST_INVALID_REQUEST');
});

test('it should create a post', async () => {
  const axiosMock = {
    headers: [],
    data: {
      id: 'data.id',
      userId: 'data.userId',
      tittle: 'data.tittle',
      body: 'data.body',
    },
  };

  axios.post.mockResolvedValue(axiosMock);

  const cmd = new CreatePostCommand(1, 'tittle', 'body');
  const ret = await createPostService.createPost(cmd);

  expect(ret.createPostCommandResult.id).toBe('data.id');
});
