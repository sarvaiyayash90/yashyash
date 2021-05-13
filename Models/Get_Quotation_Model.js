const mongoose = require('mongoose')

const Login_schema = new mongoose.Schema({
    name:{
        type:String
    },
    select_website_type:{
        type:String
    },
    select_budget_type:{
        type:String
    },
    moblie_no:{
        type:String
    },
    email:{
        type:String
    },
    select_reference:{
        type:String 
    }
})

module.exports = mongoose.model('get_quotation',Login_schema,'get_quotation')
