const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const blog = await Blog.find();
  res.send(blogs);
});