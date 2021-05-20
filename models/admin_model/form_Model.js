const mongoose = require('mongoose')

const Form_schema = new mongoose.Schema({
    form_name:
    {
        type:String,
    },
    form_path:
    {
        type:String,
    },
    form_component:
    {
        type:String,
    }
})

module.exports = mongoose.model('form',Form_schema,'form')
