const mongoose = require('mongoose')

const Login_schema = new mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    phone_no:{
        type:String
    },
    resume:{
        type:String
    },
    apply_for:{
        type:String
    },
    fresh_experiencd:{
        type:String
    },
    about_your_skills:{
        type:String 
    }
})

module.exports = mongoose.model('career',Login_schema,'career')
