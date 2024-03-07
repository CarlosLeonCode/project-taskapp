const { Model, DataTypes } = require('sequelize');
const TABLE_NAME = 'tasks';

const TaskSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  }
}

class Task extends Model {
  
  static config(sequelize){
    return{
      sequelize,
      tableName: TABLE_NAME,
      modelName: 'Task',
      timestamps: false
    }
  }
}

module.exports = { TABLE_NAME, TaskSchema, Task }
