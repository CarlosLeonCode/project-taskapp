const express = require('express');
const router = express.Router();
const TaskService = require('../services/task.service');
const Task = new TaskService();
const schemasHandler = require('../middlewares/schemas.handler');

// schemas
const { baseTaskSchema, pkTaskSchema } = require('../db/schemas/task.schema')

router.get('/', async(req, res, next) => {
  try{
    const tasks = await Task.all();
    res.json(tasks);
  }catch(err){
    next(err);
  }
})

router.get('/:id',
  schemasHandler(pkTaskSchema, 'params'),
  async(req, res, next) => {
    try{
      const { id } = req.params;
      const data = await Task.show(id)
      res.json(data);
    }catch(err){
      next(err)
    }
  }
)

router.post('/', 
  schemasHandler(baseTaskSchema, 'body'),
  async(req, res) => {
    try{
      const { body } = req;
      const response = await Task.create(body);
      res.status(201).json(response);
    }catch(err){
      next(err)
    }
  }
)

router.patch('/:id',
  schemasHandler(pkTaskSchema, 'params'),
  schemasHandler(baseTaskSchema, 'body'),
  async(req, res, next) => {
    try{
      const { id } = req.params;
      const { body } = req;
      const response = await Task.update(id, body);
      res.json(response)
    } catch (err){
      next(err)
    }
  }
)

router.delete('/:id', 
  schemasHandler(pkTaskSchema, 'params'),
  async(req, res, next) => {
    try{
      const { id } = req.params;
      const response = await Task.delete(id)
      res.json(response)
    }catch(err){
      next(err)
    }
  }
)

module.exports = router;
