const Joi = require('joi');

// Define general attrs to validate
const id = Joi.number();
const name = Joi.string().min(3).max(30);
const description = Joi.string().min(3).max(150)

// Works to validate create and edit
const baseTaskSchema = Joi.object({
  name: name.required(),
  description: description.required(),
})

const pkTaskSchema = Joi.object({
  id: id.required(),
})

module.exports = { baseTaskSchema, pkTaskSchema }
