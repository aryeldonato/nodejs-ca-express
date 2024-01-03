const request = require('supertest');
const server = require('../../server');

beforeAll(() => jest.clearAllMocks());
afterAll(() => jest.clearAllMocks());

test('it should receive HTTP 200', async () => {
  const res = await request(server).get('/health');
  expect(res.statusCode).toBe(200);
});
