const mongoose = require('mongoose')

const Login_schema = new mongoose.Schema({
    username:
    {
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    Token:{
        type:String
    },
    status:{
        type:String
    }
})

module.exports = mongoose.model('admin',Login_schema,'admin')