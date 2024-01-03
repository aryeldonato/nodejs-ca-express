const axios = require('axios').default;
const logger = require('./logger.service');

const get = async (url) => {
  logger.debug('http.service - start axios get');

  logger.trace(`http.service - axios executing get, url: ${url}`);

  const { headers, data } = await axios.get(url);

  logger.trace(`http.service - response headers: ${JSON.stringify(headers)} response body is: ${JSON.stringify(data)}`);

  logger.debug('http.service - finish axios get');

  return data;
};

const post = async (url, body) => {
  logger.debug('http.service - start axios get');

  logger.trace(`http.service - axios executing post, url: ${url}`);

  const { headers, data } = await axios.post(url, body);

  logger.trace(`http.service - response headers: ${JSON.stringify(headers)} response body is: ${JSON.stringify(data)}`);

  logger.debug('http.service - finish axios post');

  return data;
};

module.exports = {
  get,
  post,
};
