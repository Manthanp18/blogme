const mongoose = require('mongoose');
const Joi = require('joi');

const Blog = mongoose.model('Blogs', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 200
    },
    description: {
        type: String,
        default: false,
        minlength: 50,
        maxlength:2000

    },
}));
function validateBlog(blog){
    const schema = {
        title: Joi.string().min(5).max(500).required(),
        description: Joi.string().min(50).max(2000).required(),
    };
    return Joi.validate(blog, schema);
}

exports.Blog = Blog; 
exports.validate = validateBlog;