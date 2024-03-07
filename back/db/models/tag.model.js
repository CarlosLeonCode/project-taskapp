const { Model, DataTypes } = require('sequelize');
const TABLE_NAME = 'tags';

const TagSchema = {
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
  color: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  }
}

class Tag extends Model {

  static associate(models){
    this.hasMany(models.TaskTag, {
      as: 'task_tags',
      foreignKey: 'tag_id'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: TABLE_NAME,
      modelName: 'Tag',
      timestamps: true
    }
  }
}

module.exports = { TABLE_NAME, TagSchema, Tag }
