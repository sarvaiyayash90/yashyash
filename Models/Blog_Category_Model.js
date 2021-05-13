const mongoose = require('mongoose')

const blog_category_schema = new mongoose.Schema({
    blog_category_name:{
        type:String
    }
})

module.exports = mongoose.model('blog_category',blog_category_schema,'blog_category')
