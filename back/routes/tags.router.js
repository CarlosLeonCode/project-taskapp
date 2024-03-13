const express = require('express');
const router = express.Router();
const TagService = require('../services/tag.service');
// schemas
const { baseTagSchema, pkTagSchema } = require('../db/schemas/tag.schema');
const schemasHandler = require('../middlewares/schemas.handler');

// instances
const Tag = new TagService();

router.get('/', async(_req, res, next) => {
  try{
    const response = await Tag.all();
    res.json(response);
  }catch(err){
    next(err)
  }
})

router.get('/:id',
  schemasHandler(pkTagSchema, 'params'),
  async(req, res, next) => {
    try{
      const { id } = req.params;
      const response = await Tag.show(id);
      res.json(response)
    }catch(err){
      next(err);
    }
  }
)

router.post('/',
  schemasHandler(baseTagSchema, 'body'),
  async(req, res, next) => {
    try {
      const { body } = req;
      const response = await Tag.create(body);
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
)

router.patch('/:id', 
  schemasHandler(pkTagSchema, 'params'),
  schemasHandler(baseTagSchema, 'body'),
  async(req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const response = await Tag.update(id, body);
      res.json(response);
    } catch (err) {
      next(err);
    }
  }
)

router.delete('/:id',
  schemasHandler(pkTagSchema, 'params'),
  async(req, res, next) => {
    try {
      const { id } = req.params;
      const response = await Tag.delete(id);
      res.json(response);
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router;
