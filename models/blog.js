const mongoose = require('mongoose');
const Joi = require('joi');

const Blog = mongoose.model('Blog', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    date:  {type:Date, default: Date.now},
    body: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50000,
    },
}));
function validateBlog(blog){
    const schema = {
        title: Joi.string().min(5).max(500).required(),
        body: Joi.string().min(5).max(20000).required(),
    };
    return Joi.validate(blog, schema);
}


exports.Blog = Blog; 
exports.validate = validateBlog;