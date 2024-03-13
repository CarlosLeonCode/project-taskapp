const Joi = require('joi');

// Define general attrs to validate
const id = Joi.number();
const name = Joi.string().min(3).max(150);
const color = Joi.string().min(3).max(30);
const description = Joi.string().min(3).max(150);

// Works to validate create and edit
const baseTagSchema = Joi.object({
  name: name.required(),
  color: color.required(),
  description: description.required(),
})

// Works to validate ids
const pkTagSchema = Joi.object({
  id: id.required(),
})

module.exports = { baseTagSchema, pkTagSchema }
