const { Task, TaskSchema } = require('./task.model');
const { Tag, TagSchema } = require('./tag.model')
const { TaskTag, TaskTagsSchema } = require('./task_tags.model')

function setupModels(sequelize){
  Task.init(TaskSchema, Task.config(sequelize));
  Tag.init(TagSchema, Tag.config(sequelize));
  TaskTag.init(TaskTagsSchema, TaskTag.config(sequelize));


  Tag.associate(sequelize.models);
  TaskTag.associate(sequelize.models)
}

module.exports = setupModels;
