const mongoose = require('mongoose');
const express = require('express');
const blog = require('./routes/blogs');
var cors = require('cors')

const app = express();
app.use(cors()) 
app.use(express.json());
app.use('/api/blog', blog);


app.get('/', async (req, res) => {
  res.send("Hello World");
});

mongoose.connect('mongodb://localhost/blogme')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));