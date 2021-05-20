require('./db')

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

var cookieParser = require('cookie-parser');
var session = require('express-session');

/*  +-----------------------------------+
    |     Cilent controllers Start      |
    +-----------------------------------+  */
  
    const Career_Controllers = require('./controllers/cilent_controllers/Career_Controllers')  
    const Blog_Controllers = require('./controllers/cilent_controllers/Blog_Controllers')

// ========== ( Cilent controllers End ) ==========

/*  +-----------------------------------+
    |     Admin controllers Start       |
    +-----------------------------------+  */

    const login_controllers = require('./controllers/admin_controllers/login_controllers') 
    const Admin_Blog_controllers = require('./controllers/admin_controllers/Admin_Blog_controllers')
    const Admin_User_Controller = require('./controllers/admin_controllers/Admin_User_Controller')
    const Admin_User_Permission_Controller = require('./controllers/admin_controllers/Admin_User_Permission_Controller')
    
// ========== ( Admin controllers End ) ==========

    var app = express();

    app.use(bodyparser.urlencoded({ extended:false }));
    app.use(bodyparser.json());

    app.use(express.static(path.join(__dirname,'main')));

    app.use(express.static(path.join(__dirname,'cilent_build')));

    app.use('/adminpanel',express.static(path.join(__dirname,'admin_build')));

    
    app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
    // app.use(cors());
    app.use(cookieParser());

    //app.set('trust proxy', 1) // trust first proxy
    app.use(session({
        key: 'user_sid',
        secret: 'somerandonstuffs',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000
        }
    }));

/*  +-----------------------------+
    |     Cilent Route Start      |
    +-----------------------------+  */
    app.use('/Careerdata',Career_Controllers);  // Career controller
    app.use('/Blogdata',Blog_Controllers);   // Blog controller
  
// ========== ( Cilent Routes End ) ==========

/*  +-----------------------------+
    |     Admin Route Start       |
    +-----------------------------+  */

    app.use('/admin_logindata',login_controllers);  // admin login controller
    app.use('/admin_blogdata',Admin_Blog_controllers);  // admin Blog controller
    app.use('/admin_userdata',Admin_User_Controller);  // admin user controller
    app.use('/admin_permissiondata',Admin_User_Permission_Controller);  // admin user permission controller
    
// ========== ( Admin Routes End ) ==========

    app.use('*', function (req, res){
        res.sendFile(path.join(__dirname+'/cilent_build/index.html'));
    });

    app.use('adminpanel/*', function (req, res){
        res.sendFile(path.join(__dirname+'/admin_build/index.html'));
    });


app.listen(process.env.PORT || 5000, () => { console.log("\n \t\t\t < Server Started At Port : (5000) > \n ") });

