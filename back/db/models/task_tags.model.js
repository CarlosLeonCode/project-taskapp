const { Model, DataTypes } = require('sequelize');
const { TABLE_NAME: TAG_TABLE_NAME } = require('./tag.model')
const { TABLE_NAME: TASK_TABLE_NAME } = require('./task.model')
const TABLE_NAME = 'task_tags'

const TaskTagsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  tagId: {
    field: 'tag_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TAG_TABLE_NAME,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  taskId: {
    field: 'task_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TASK_TABLE_NAME,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class TaskTag extends Model {
  static config(sequelize){
    return{
      sequelize,
      tableName: TABLE_NAME,
      modelName: 'TaskTag',
      timestamps: false
    }
  }
}

module.exports = { TABLE_NAME, TaskTagsSchema, TaskTag }
