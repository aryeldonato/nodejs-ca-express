const express = require('express');

const healthcheck = require('./controllers/health/health.controller');
const posts = require('./controllers/posts/posts.controller');
const root = require('./controllers/root.controller');

const server = express();

server.use(express.json());

// Routes
server.use(root);
server.use(healthcheck);
server.use(posts);

module.exports = server;
