const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class TaskService {
  async all() {
    const data = await models.Task.findAll();
    return data;
  }

  async show(id) {
    const data = await models.Task.findByPk(id);
    if(!data){
      throw boom.notFound()
    }
    return data;
  }

  async create(data){
    const response = await models.Task.create(data)
    return response;
  }

  async update(id, changes) {
    const record = await models.Task.findByPk(id)
    console.log(record)
    if(!record){
      throw boom.notFound()
    }
    const response = await record.update(changes)
    return response
  }

  async delete(id){
    const record = await models.Task.findByPk(id)
    if(!record){
      throw boom.notFound()
    }
    await record.destroy();
    return { message: 'record delete it!', id: id }
  }
}

module.exports = TaskService;
