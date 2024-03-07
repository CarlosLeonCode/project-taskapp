const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class TaskService {
  /**
   * Return all Tasks
   * @returns {Array} Database records
   */
  async all() {
    const data = await models.Task.findAll();
    return data;
  }

  /**
   * Return just one specific task
   * @param {string} id 
   * @returns {object}
   */
  async show(id) {
    const data = await models.Task.findByPk(id);
    if(!data){
      throw boom.notFound()
    }
    return data;
  }

  /**
   * Returns task created
   * @param {object} data 
   * @returns {object}
   */
  async create(data){
    const response = await models.Task.create(data)
    return response;
  }

  /**
   * Returns task updated
   * @param {*} id 
   * @param {*} changes 
   * @returns {object}
   */
  async update(id, changes) {
    const record = await models.Task.findByPk(id)
    console.log(record)
    if(!record){
      throw boom.notFound()
    }
    const response = await record.update(changes)
    return response
  }

  /**
   *
   * @param {*} id 
   * @returns {object}
   */
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
