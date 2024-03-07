const express = require('express');
const router = express.Router();
const TaskService = require('../services/task.service')
const Task = new TaskService();

router.get('/', async(req, res, next) => {
  try{
    const tasks = await Task.all();
    res.json(tasks);
  }catch(err){
    next(err);
  }
})

router.get('/:id', async(req, res, next) => {
  try{
    const { id } = req.params;
    const data = await Task.show(id)
    res.json(data);
  }catch(err){
    next(err)
  }
})

router.post('/', async(req, res) => {
  try{
    const { body } = req;
    const response = await Task.create(body);
    res.status(201).json(response);
  }catch(err){
    next(err)
  }
})

router.patch('/:id', async(req, res, next) => {
  try{
    const { id } = req.params;
    const { body } = req;
    const response = await Task.update(id, body);
    res.json(response)
  } catch (err){
    next(err)
  }
})

router.delete('/:id', async(req, res, next) => {
  try{
    const { id } = req.params;
    const response = await Task.delete(id)
    res.json(response)
  }catch(err){
    next(err)
  }
})

module.exports = router;
