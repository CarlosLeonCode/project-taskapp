const { models } = require('../libs/sequelize');

class TaskTagService {
  async addTag(body){
    await models.TaskTag.create(body);
    return { message: 'Tag added'};
  }
}

module.exports = TaskTagService;
