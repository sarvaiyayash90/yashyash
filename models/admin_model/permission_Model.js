const mongoose = require('mongoose')

const Permission_schema = new mongoose.Schema({
    admin_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'admin'
    },
    form_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'form'
    },
    status:
    {
        type:String,
    }
})

module.exports = mongoose.model('permission',Permission_schema,'permission')
