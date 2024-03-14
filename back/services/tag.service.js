const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class TagService {
  /**
   * Return all Tasks
   * @returns {Array} Database records
   */
  async all(){
    const data = await models.Tag.findAll();
    return data;
  }

  /**
   * 
   * @param {Integer} id 
   * @returns 
   */
  async show(id){
    const data = await models.Tag.findByPk(id);
    if(!data){
      throw boom.notFound();
    }
    return data;
  }

  /**
   * 
   * @param {Object} body 
   * @returns 
   */
  async create(body){
    const response = await models.Tag.create(body);
    return response;
  }

  /**
   * 
   * @param {Integer} id 
   * @param {Object} changes 
   * @returns 
   */
  async update(id, changes){
    const tag = await models.Tag.findByPk(id);
    if(!tag){
      throw boom.notFound();
    }
    const response = await tag.update(changes);
    return response;
  }

  /**
   * 
   * @param {Integer} id 
   * @returns 
   */
  async delete(id){
    const tag = await models.Tag.findByPk(id);
    if(!tag){
      throw boom.notFound();
    }
    await tag.destroy();
    return { message: 'record delete it!', id: id };
  }
}

module.exports = TagService;
