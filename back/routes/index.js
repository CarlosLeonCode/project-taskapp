const express = require('express');
const tasksRouter = require('./tasks.router');
const tagsRouter = require('./tags.router');

function routerApi(app){
  const router = express.Router();
  // namespace
  app.use('/api/v1', router);

  router.use('/tasks', tasksRouter)
  router.use('/tags', tagsRouter)
}

module.exports = routerApi;
