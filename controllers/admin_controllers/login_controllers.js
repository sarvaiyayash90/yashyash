const express = require('express'); // Express
var router = express.Router(); // Router

const admin_login = require('../../models/admin_model/admin_login_model');  // admin login Model
// var path = require('path')

const bcrypt = require('bcrypt')
// const crypto = require('crypto')

// const nodemailer = require('nodemailer')

// var transport = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port:587,
//     secure:false,
//     requireTLS:true,
//     auth:{
//         user:'sarvaiyayash30@gmail.com',
//         pass:'rddldqdysapwcinr'
//     }
// })

/*  +----------------+
    |     Login      |
    +----------------+  */
    
    router.post('/admin_login',(req,res)=>{
        
        var username = req.body.username;
        var password = req.body.password;

        if (username && password)
        {
            admin_login.find({ username: username }, function (err, user) {
                if (user.length > 0) 
                {    
                    bcrypt.compare(req.body.password, user[0].password, function (err, result) {
                        if (result == true) 
                        {
                            if(user[0].status === "Active")
                            {   
                                req.session.user = req.body.username;

                                admin_login.updateOne({ _id:user[0]._id },{Token:req.sessionID},{ new: true })
                                .then((ress)=>{
                                    
                                    admin_login.find({ _id: user[0]._id}, function (err, new_user) {  
                                        if(new_user.length > 0)
                                        {
                                            if(req.session.id == new_user[0].Token)
                                            {    
                                                res.status(200).send(
                                                    {
                                                        auth_admin : true,
                                                        // chk_user : req.sessionID,
                                                        Auth_check : new_user[0].Token,
                                                        // session:  req.sessionID,
                                                        message: "Login successfully"
                                                    }
                                                ) 
                                            }
                                            else
                                            {
                                                res.status(400).send({ auth : false })
                                            }
                                        }else{
                                            console.log("err",err);
                                        }
                                    })

                                }).catch((err)=>{
                                    console.log("Data Not Updated")
                                })
                            }else{
                                res.status(400).send({ message: "Your account is suspended ..!" })
                            }
                        }else{
                            res.status(400).send({ message: "Incorrect Password Please Enter Valid Password ..!" })
                        }
                    })
                } 
                else 
                {
                    res.status(400).send({ message: "User don't exists with that username ..!" })
                }
            });
        }
        else
        {
            res.status(500).send({message:"Please Enter Username and Password ..!"})
        }
    });

// router.post('/admin_login',(req,res)=>{
    
//     var username = req.body.username;
//     var password = req.body.password;

//     console.log("body",req.body);

//     if (username && password)
//     {
//         admin_login.find({ username: username }, function (err, user) {
//             if (user.length > 0) 
//             {    
//                 bcrypt.compare(req.body.password, user[0].password, function (err, result) {
//                     if (result == true) 
//                     {
//                         if(user[0].login_type === "admin")
//                         {   
//                             if(user[0].status === "Active")
//                             {   
//                                 req.session.user = req.body.username;
//                                 admin_login.updateOne({ _id:user[0]._id },{Token:req.sessionID},{ new: true })
//                                 .then((ress)=>{
//                                     admin_login.find({ _id: user[0]._id}, function (err, new_user) {  
//                                         if(new_user.length > 0)
//                                         {
//                                             if(req.session.id == new_user[0].Token)
//                                             {    
//                                                 res.status(200).send(
//                                                     {
//                                                         auth_admin : true,
//                                                         chk_user : req.sessionID,
//                                                         Auth_check : new_user[0].Token,
//                                                         session:  req.sessionID,
//                                                         message: "Login successfully"
//                                                     }
//                                                 ) 
//                                             }
//                                             else
//                                             {
//                                                 res.status(400).send({ auth : false })
//                                             }
//                                         }else{
//                                             console.log("err",err);
//                                         }   
//                                     })
//                                 }).catch((err)=>{
//                                     console.log("Data Not Updated")
//                                 })
//                                 // console.log("user_status",user);

//                                 // req.session.user = req.body.username;
//                                 // res.status(200).send({
                                
//                                 // auth_admin : true,
//                                 // chk_user : req.sessionID,
//                                 // Auth_check : req.sessionID,
//                                 // session:  req.sessionID,
//                                 // message: "Login successfully"
//                                 // })    
//                             }else{
//                                 res.status(400).send({ message: "Your account is suspended ..!" })
//                             }    
//                         }else{
//                             if(user[0].status === "Active")
//                             {   
//                                 // console.log("user_status",user);
//                                 req.session.user = req.body.username;
//                                 res.status(200).send(
//                                     {
//                                         auth_user : true,
//                                         // chk_user : req.sessionID,
//                                         Auth_check :  req.sessionID,
//                                         session:  user[0]._id,
//                                         message: "Login successfully"
//                                     }
//                                 )
//                                 // res.status(200).send({
//                                 //     auth_user : true,
//                                 //     // chk_user : "user",
//                                 //     Auth_check : req.sessionID,
//                                 //     session : user['user_ID'],
//                                 //     message: "Login successfully"
//                                 //}) 
//                             }else{
//                                 res.status(400).send({ message: "Your account is suspended ..!" })
//                             } 
//                         }
//                     }else{
//                         res.status(400).send({ message: "Incorrect Password Please Enter Valid Password ..!" })
//                     }
//                 })
//             } 
//             else 
//             {
//                 res.status(400).send({ message: "User don't exists with that username ..!" })
//             }
//         });
//     }
//     else
//     {
//         res.status(500).send({message:"Please Enter Username and Password ..!"})
//     }
// })

/*  +----------------+
    |     Logout     |
    +----------------+  */
router.post('/admin_logout',(req,res)=>{
    req.session.destroy();
    res.clearCookie('user_new_sid');
    res.status(200).send();
})

/*  +-------------------------+
    |     Forgot password     |
    +-------------------------+  */

    // router.post('/forgot_password',(req,res)=>{
    //     var email = req.body.email;

    //     crypto.randomBytes(32,(err,buffer)=>{
    //         if(err){
    //             console.log(err)
    //         }
    //         const token = buffer.toString("hex")
    //         admin_login.findOne({email:req.body.email})
    //         .then(user=>{
    //             if(!user){
    //                 return res.status(422).json({error:"User dont exists with that email"})
    //             }
    //             user.resetToken = token
    //             user.expireToken = Date.now() + 360
    //             user.save().then((result)=>{
    //                 var mailOptions = {
    //                     form:'sarvaiyayash30@gmail.com',
    //                     to:email,
    //                     subject:'Reset Password',
    //                     html:`
    //                     <p>You requested for password reset</p>
    //                     <h5>click in this <a href="http://localhost:3000/#/update_password/${token}">link</a> to reset password</h5>
    //                     `,
    //                     // attachments: [
    //                     //     {
    //                     //         filename: 'File.pdf', // <= Here: made sure file name match
    //                     //         path: path.join(__dirname, '../images/File.pdf'), // <= Here
    //                     //         contentType: 'application/pdf'
    //                     //     }
    //                     // ]
    //                 }
    //                 transport.sendMail(mailOptions,function(err,info){
    //                     if(err){
    //                         console.log("Error=>",err)
    //                     }else{
    //                         res.status(200).send({ message: "Please check your email Address..!" }) 
    //                     }
    //                 })
    //                 // res.json({message:"check your email"})
    //             })
   
    //         })
    //     })
    
    // })

    
/*  +----------------------+
    |     New password     |
    +----------------------+  */
    // router.put('/update_password/:id',(req,res)=>{

    //     const newPassword = req.body.new_password
    //     const sentToken =  req.params.id
    //     console.log("sentToken",sentToken)
    //     admin_login.findOne({resetToken:sentToken})
    //     .then(user=>{
    //         if(!user){
    //             res.status(400).send({ message: "Try again session expired" })
    //         }else
    //         {
    //             bcrypt.hash(newPassword,12).then(hashedpassword=>{
    //             user.password = hashedpassword
    //             user.resetToken = undefined
    //             user.expireToken = undefined
    //             user.save()
    //             .then((saveduser)=>{
    //                     res.status(200).json({ message : "Your Password Successfully Updated...." })
    //             })
    //             .catch((err)=>{
    //                     res.status(400).json({ message : "Token Null Updated...." })
    //             })
    //             })
    //         }
    //     }).catch(err=>{
    //         console.log(err)
    //     })

    // })

    
module.exports = router;