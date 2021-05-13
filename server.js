require('./db')

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');


const Career_Controllers = require('./controllers/Career_Controllers')
const Blog_Controllers = require('./controllers/Blog_Controllers')


var app = express();

app.use(function(req, res, next){
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");//Authorization, sid
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyparser.urlencoded({ extended:false }));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'build')));
app.use(cors({ origin: 'http://localhost:3000'}));

app.use('/Careerdata',Career_Controllers);  // Student controller
app.use('/Blogdata',Blog_Controllers);   // Blog controller

app.get('*', function (req, res){
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(process.env.PORT || 5000, () => { console.log("\n \t\t\t < Server Started At Port : (5000) > \n ") });

