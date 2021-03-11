const {Blog, validate} = require('../models/blog'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const blogs = await Blog.find();
  res.send(blogs);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  console.log(error); 
  if (error) return res.status(400).send(error.details[0].message);

  let blog = new Blog({ 
    title: req.body.title,
    body: req.body.body,
  });
  blog = await blog.save();
  
  res.send(blog);
});


router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const blog = await Blog.findByIdAndUpdate(req.params.id,
    { 
      title: req.body.title,
      body: req.body.body,
    }, 
    { new: true });

  if (!blog) return res.status(404).send('The blog with the given ID was not found.');
  
  res.send(blog);
});

router.delete('/:id', async (req, res) => {
  const blog = await Blog.findByIdAndRemove(req.params.id);

  if (!blog) return res.status(404).send('The blog with the given ID was not found.');

  res.send(blog);
});

router.get('/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) return res.status(404).send('The blog with the given ID was not found.');

  res.send(blog);
});


module.exports = router; 