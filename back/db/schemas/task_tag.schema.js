const Joi = require('joi');

// Define general attrs to validate
const tagId = Joi.number();
const taskId = Joi.number();

const baseTaskTagSchema = Joi.object({
  tagId: tagId.required(),
  taskId: taskId.required(),
})

module.exports = { baseTaskTagSchema };
