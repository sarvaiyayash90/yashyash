const mongoose = require('mongoose')

const Login_schema = new mongoose.Schema({
    username:
    {
        type:String,
    },
    fullname:{
        type:String,
    },
    email:{
        type:String,
    },
    contact_no:{
        type:String,
    },
    profile_img:{
        type:String,
    },
    password:{
        type:String
    },
    Token:{
        type:String
    },
    resetToken:{    
        type:String
    },
    expireToken:{
        type:String
    },
    status:{
        type:String
    },
    login_type:{
        type:String
    }
})

module.exports = mongoose.model('admin',Login_schema,'admin')
