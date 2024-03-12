const express = require('express');
const router = express.Router();
const TagService = require('../services/tag.service');
const Tag = new TagService();

router.get('/', async(_req, res, next) => {
  try{
    const response = await Tag.all();
    res.json(response);
  }catch(err){
    next(err)
  }
})

router.get('/:id', async(req, res, next) => {
  try{
    const { id } = req.params;
    const response = await Tag.show(id);
    res.json(response)
  }catch(err){
    next(err);
  }
})

router.post('/', async(req, res, next) => {
  try {
    
  } catch (err) {
    
  }
})

router.patch('/:id', async(req, res, next) => {

})

router.delete('/:id', async(req, res, next) => {

})

module.exports = router;
