const mongoose = require('mongoose');
const express = require('express');
const blogs = require('./routes/blogs');

const app = express();

app.use(express.json());
app.use('/api/blogs', blogs);


app.get('/', async (req, res) => {
  res.send("Hello World");
});

mongoose.connect('mongodb://localhost/blogme')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));