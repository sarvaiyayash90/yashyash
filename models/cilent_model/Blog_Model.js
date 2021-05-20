const mongoose = require('mongoose')

const blog_schema = new mongoose.Schema({
    blog_category_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'blog_category'
    },
    blog_title:{
        type:String
    },
    blog_image:{
        type:String
    },
    blog_content:{
        type:String
    },
    blog_date:{
        type:Date
    },
    author:{
        type:String
    },
    blog_status:{
        type:String
    }
})

module.exports = mongoose.model('blog',blog_schema,'blog')
