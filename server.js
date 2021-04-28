const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

var app = express();
app.use(bodyparser.urlencoded({ extended:true }));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'build')));
app.use(cors())

app.get('*', function (req, res){
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(process.env.PORT || 5000, () => { console.log("\n \t\t\t < Server Started At Port : (5000) > \n ") });

