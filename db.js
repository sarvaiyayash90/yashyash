const mongoose = require('mongoose');

// connection start
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://yash:yash8238@cluster-yash.fcyru.mongodb.net/Infilon_WEB?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

mongoose.connection.on('connected', () => {
    console.log("********** < Database ( Mongoose As MongoDB ) Connected Succsessfuly > **********")
})
mongoose.connection.on('error', () => {
    console.log("Database (Mongoose as MongoDB) Not Connected")
})

