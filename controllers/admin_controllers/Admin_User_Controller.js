const express = require('express');  // Express
const router = express.Router(); // Router

const admin_user = require('../../models/admin_model/admin_login_model'); // admin and user Model
const permission = require('../../models/admin_model/permission_Model'); // user permission Model

let path = require('path'); // path
const multer = require('multer'); // Multer one type image upload time call middleware
var fs = require('fs'); // file systems
const pdf = require('html-pdf');// pdf 
const bcrypt = require('bcrypt')

// pdf file upload
const storage_pdf = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "main/user_pdf/")
    },
    filename: (req, file, cb) => {
      cb(null,file.originalname)
    },
})

// multer photo upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'admin/public/uploads/User_img/');
    },
    filename: function (req, file, cb) {
        photo_name = Date.now() + path.extname(file.originalname)
        //cb(null, file.originalname)
        cb(null, photo_name);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

/*  +------------------------------------+
    |        upload pdf in server        |
    +------------------------------------+  */
    router.post('/new_pdf', (req, res) => {
        let upload = multer({ storage: storage_pdf }).single('data_pdf');
        upload(req, res, function (err) {
            res.status(200).send({message: "PDF Successfully created and upload..!"});
        })
    })

// function sessionChecker(req, res, next){

//     // console.log("session=>",req.session.user);
//     // console.log("cookies=>",req.cookies.user_sid);

//     if (req.cookies.user_sid && req.session.user) {
//         next();
//     } else {
//         res.sendFile(path.resolve('public/404.html'));
//     }
// };

/*  +--------------------------+
    |       create-pdf         |
    +--------------------------+  */
    // router.post('/pdf/:id',(req, res) => {
    //     admin_user.findById(req.params.id).exec()
    //     .then(result => {
    //         console.log("ss",result.username);
            
    //         var html = fs.readFileSync('./PDF/user_data.html', 'utf8');
    //         var options = { format: 'Letter' };
    //         var today = new Date();

    //         pdf.create(html, options).toFile('./PDF/' + result.username + "_" + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + '.pdf', function (err, data) {
    //             if (err) {
    //                 res.send(err);
    //             } else {
    //                 res.send("File created successfully");
    //             }
    //         });
    //     })
    //     .catch(err => {
    //         res.status(500).send(err)
    //     })
    // })

    // const pdfTemplate = require('./index.js');

    router.post('/pdf', (req, res) => {

        // console.log("body",req.body.params);
        
        // var img_path = path.join(__dirname+"/../public/");
        // img_path = img_path.replace(new RegExp(/\\/g),'/');

        var options = { format: 'Letter' };
        
        // var options = {  
        //     format: 'Letter',
        //     "type" :"pdf",
        //     "quality" : "100",
        //     "base":"file:///"+img_path
        // }

        var today = new Date();
        pdf.create(pdfTemplate(req.body.params),options).toFile('./PDF/' + req.body.params.name + "_" + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + '.pdf', (err) => {
            if(err)
            {
              return console.log('error');
            }
            res.send(Promise.resolve())
        });
    })

/*  +--------------------------------+
    |        Ftech Pdf Create        |
    +--------------------------------+  */

    router.get('/fetchpdf/:id',(req, res) => {
        const id = req.params.id
        setTimeout(()=>{
            admin_user.findById({ _id: id })
            .exec()
            .then(result => {
                var today = new Date();
                var Pdf_Data = result.username + "_" + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + ".pdf"
                //res.sendFile("./"+ Pdf_Data)
                var file = fs.createReadStream('./PDF/' + Pdf_Data);
                file.pipe(res);
            })
            .catch(err => {
                res.json({ msg: "errrooreor" })
            })
        },3000)
    })

/*  +--------------------------+
    |       create data        |
    +--------------------------+  */
router.post('/User_Register',(req, res, next) => {

    let upload = multer({ storage: storage, fileFilter: fileFilter }).single('profile_img');

    upload(req, res, function (err) {

        admin_user.find({ username: req.body.username}, function (err, new_user) {
            if(new_user.length > 0)
            {
                res.status(400).send({ message: "Your username already exits Please enter Unique username ..!" })
            }else{

                const token_store = "YJmeH7RMVk_BKGfbRPurcu5UkUGjOBhM";
                const status = "Active";
                const login_type_chk = "User";

                const user_new = new admin_user({
                    username: req.body.username,
                    fullname: req.body.fullname,
                    email: req.body.email,
                    contact_no: req.body.contact_no,
                    profile_img: photo_name,
                    password: req.body.password,
                    Token : token_store,
                    resetToken : token_store,
                    expireToken : '',
                    status : status,
                    login_type : login_type_chk
                }) 

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(user_new.password, salt, (err, hash) => {
                        if(err) throw err;
                        user_new.password = hash;
                        user_new.save()
                        .then((user) => { 
                            const u_id = user._id
                            const form_data = JSON.parse(req.body.form_ID)
                            var dd = Object.values(form_data)
                            for (let index = 0; index < dd.length; index++) 
                            {
                                const permission_new = new permission({
                                    admin_id : u_id,
                                    form_id : dd[index],
                                    status : "Active"
                                })
                                permission_new.save() 
                            }
                            res.status(200).send();
                        })
                        .catch(error => console.log(error));
                    })
                })
            }
        })
    });
})

/*  +-------------------------------------------------+
    |        List user data Active and in-Active      |
    +-------------------------------------------------+  */

    router.get('/User_List',async (req, res) => {

        admin_user.find({$or : [{status:"Active"},{ status:"In-Active" }]}).sort( { _id : -1 } ).exec()
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })

    })

 /*  +-------------------------------------+
     |        disable user show data       |
     +-------------------------------------+  */
    router.get('/User_List_Delete',async (req, res) => {

        admin_user.find({ status:"disable" }).sort( { _id : -1 } ).exec()
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })

    })

/*  +----------------------------------------+
    |        Active to In-Active user        |
    +----------------------------------------+  */

    router.put('/active_to_IN_active/:id',async (req, res) => {
        admin_user.updateOne({ _id: req.params.id },{ status : "In-Active" }, { new: true }).then((result) => {
            res.status(200).json({ "status": "Successfully Active...." }).send()
        }).catch(err => {
            console.log(err);
            res.status(500).json({ "status": "unSuccessfully Active...." }).send()
        })
    })

/*  +----------------------------------------+
    |        In-active to Active user        |
    +----------------------------------------+  */
    
    router.put('/IN_active_to_Active/:id',async (req, res) => {
        admin_user.updateOne({ _id: req.params.id },{ status : "Active" }, { new: true }).then((result) => {
            res.status(200).json({ "status": "Successfully InActive...." }).send()
        }).catch(err => {
            console.log(err);
            res.status(500).json({ "status": "unSuccessfully InActive...." }).send()
        })
    })

/*  +-------------------------------+
    |        User View data         |
    +-------------------------------+  */

    router.get('/User_view/:id',async (req, res) => {
        try {
            const admin_user_new = await admin_user.findById(req.params.id)
            res.json(admin_user_new)
        } catch (err) {
            res.send('Error' + err)
        }
    })

/*  +--------------------------+
    |        Delete data       |
    +--------------------------+  */

    router.put('/User_delete/:id',(req, res) => {

        admin_user.updateOne({ _id: req.params.id },{ status : "disable" }, { new: true }).then((result) => {
            res.status(200).json({ "status": "Successfully Deleted...." }).send()
        }).catch(err => {
            console.log(err);
            res.status(500).json({ "status": "unSuccessfully Deleted...." }).send()
        })
    })

/*  +----------------------------------+
    |        Inactive to Active user   |
    +----------------------------------+  */

    router.put('/User_active/:id',(req, res) => {

        admin_user.updateOne({ _id: req.params.id },{ status : "Active" }, { new: true }).then((result) => {
            res.status(200).json({ "status": "User Successfully Actived...." }).send()
        }).catch(err => {
            console.log(err);
            res.status(500).json({ "status": "User Not Actived...." }).send()
        })
    })

/*  +-------------------------+
    |        User delete      |
    +-------------------------+  */
    router.delete('/user_permanent_delete/:id',(req, res) => {
        const id = req.params.id;
        const delete_img = admin_user.findById({ _id: id })
        delete_img.exec()
        .then(result => {
            fs.unlink("client/public/uploads/" + result.profile_img, (err) => {
                if (err) {
                    console.log(err);
                }
            })
        })

        const delete_stu_data = admin_user.remove({ _id: id })
        delete_stu_data.exec()
            .then(result => {
                res.status(200).json({ status: "Successfully Deleted Image...." })
            }).catch(err => {
                res.status(500).send("ERROR")
            })
    })

/*  +--------------------------------------+
    |        User active and inactive      |
    +--------------------------------------+  */

    router.put('/User_active_inactive/:id',(req, res) => {

        console.log("id",req.params.id);
        console.log("fghjakjshvghasajsa",req.body.status);

        admin_user.updateOne({ _id: req.params.id }, {
            status : req.body.status
        }, { new: true })
            .then((result) => {
                //console.log(result)
                res.status(200).json({ "status": "Successfully Updated...." }).send()
            }).catch(err => {
                console.log(err);
                res.status(500).json({ "status": "unSuccessfully Updated...." }).send()
            })
    })

/*  +--------------------------+
    |        Update Data       |
    +--------------------------+  */
router.put('/user_update/:id', async (req, res) => {

    let upload = multer({ storage: storage, fileFilter: fileFilter }).single('profile_img');

    upload(req, res, function (err)
    {
        admin_user.find({ username: req.body.username,_id: {$ne : req.params.id } },async function (err, new_user) {
            if(new_user.length > 0)
            {
                res.status(400).send({ message: "Your username already exits Please enter Unique username ..!" })

            }else{
                var body = req.body;
                const user = await admin_user.findById(req.params.id)
                if(user.password == req.body.password)
                {
                    // console.log("match");
                }
                else
                {
                  bcrypt.genSalt(12, function (err, salt) {
                    if (err)
                    {
                      throw err
                    }
                    else
                    {
                        bcrypt.hash(req.body.password, salt,async function(err, hash) {
                        if (err)
                        {
                          throw err
                        }
                        else
                        {
                            body.password=hash
                            const user_data = await admin_user.findById(req.params.id)
                            user_data.password=hash
                            user_data.save()
                        }
                      })
                    }
                  })
                }

                if (req.file != null) 
                {
                    // const id = req.params.id;
                    // const delete_img = admin_user.findById({ _id: id })
                    // delete_img.exec()
                    //     .then((result) => {
                    //         fs.unlink("admin/public/uploads/User_img/" + result.profile_img, ((err) => {
                    //             if (err) { console.log(err); }
                    //             else {
                                        admin_user.updateOne({ _id: req.params.id }, {
                                            username: req.body.username,
                                            fullname: req.body.fullname,
                                            email: req.body.email,
                                            contact_no: req.body.contact_no,
                                            profile_img: photo_name,
                                        }, { new: true })
                                        .then((result) => {
                                            //console.log(result)
                                            res.status(200).json({ "status": "Successfully Updated...." }).send()
                                        }).catch(err => {
                                            console.log(err);
                                            res.status(500).json({ "status": "unSuccessfully Updated...." }).send()
                                        })
                    //              }
                    //          }))
                    //      })
                }
                else
                {
                    admin_user.updateOne({ _id: req.params.id }, {
                            fullname: req.body.fullname,
                            username: req.body.username,
                            email: req.body.email,
                            contact_no: req.body.contact_no,
                    }, { new: true })
                    .then((result) => {
                        //console.log(result)
                        res.status(200).json({ "status": "Successfully Updated...." })
                    }).catch(err => {
                        //console.log(err);
                        res.status(500).json({ "status": "unSuccessfully Updated...." }).send()
                    })
                }
            }
        })

        if (req.file) 
        {
            const id = req.params.id;
            const delete_img = admin_user.findById({ _id: id })
            delete_img.exec()
            .then((result) => {
                fs.unlink("admin/public/uploads/User_img/" + result.profile_img, ((err) => {
                    if (err) { console.log(""); }
                    else 
                    {
                        admin_user.updateOne({ _id: req.params.id }, {
                            profile_img: photo_name
                        }, { new: true })
                        .then((result) => {
                            res.status(200).json({ "status": "Successfully Updated...." }).send()
                        }).catch(err => {
                            res.status(400).json({ "status": "unSuccessfully Updated...." }).send()
                        })
                    }
                }))
            })
        }
    })
})


/*  +--------------------------+
    |        user profile      |
    +--------------------------+  */
    router.get('/user_profile',async (req, res) => {
        try {
           const admin_user_new = await admin_user.findById(req.query.user_id)
           res.json(admin_user_new)
       } catch (err) {
           res.send('Error' + err)
       }
   })


 /*  +---------------------------------------+
     |        profile edit show Data         |
     +---------------------------------------+  */
    router.get('/user_profile_edit',async (req, res) => {
         try {
            const admin_user_new = await admin_user.findById(req.query.user_id)
            res.json(admin_user_new)
        } catch (err) {
            res.send('Error' + err)
        }
    })


 /*  +------------------------------------+
     |        profile update Data         |
     +------------------------------------+  */
    router.put('/user_profile_update/:id',async (req, res) => {

    let upload = multer({ storage: storage, fileFilter: fileFilter }).single('profile_img');

    upload(req, res, function (err)
    {
        admin_user.find({ username: req.body.username,_id: {$ne : req.params.id } },async function (err, new_user) {
            if(new_user.length > 0)
            {
                res.status(400).send({ message: "Your username already exits Please enter Unique username ..!" })

            }else{
                if (req.file != null) {
                    // const id = req.params.id;
                    // const delete_img = admin_user.findById({ _id: id })
                    // delete_img.exec()
                    //     .then((result) => {
                    //         fs.unlink("admin/public/uploads/User_img/" + result.profile_img, ((err) => {
                    //             if (err) { console.log(err); }
                    //             else {
                                    admin_user.updateOne({ _id: req.params.id }, {
                                        username: req.body.username,
                                        fullname: req.body.fullname,
                                        email: req.body.email,
                                        contact_no: req.body.contact_no,
                                        profile_img: photo_name,
                                    }, { new: true })
                                        .then((result) => {
                                            //console.log(result)
                                            res.status(200).json({ message : "Your Profile Successfully Update..!" }).send()
                                        }).catch(err => {
                                            console.log(err);
                                            res.status(500).json({ message : "unSuccessfully Updated...." }).send()
                                        })
                        //         }
                        //     }))
                        // })
                } else {
                    admin_user.updateOne({ _id: req.params.id }, {
                            fullname: req.body.fullname,
                            username: req.body.username,
                            email: req.body.email,
                            contact_no: req.body.contact_no,
                    }, { new: true })
                        .then((result) => {
                            //console.log(result)
                            res.status(200).json({ "status": "Successfully Updated...." })
                        }).catch(err => {
                            //console.log(err);
                            res.status(500).json({ "status": "unSuccessfully Updated...." }).send()
                        })
                }
            }
        })

            if (req.file)
            {
                const id = req.params.id;
                const delete_img = admin_user.findById({ _id: id })
                delete_img.exec()
                .then((result) => {
                    fs.unlink("admin/public/uploads/User_img/" + result.profile_img, ((err) => {
                        if (err) { 
                            // console.log(err); 
                        }
                        else {
                            admin_user.updateOne({ _id: req.params.id }, {
                                profile_img: photo_name,
                            }, { new: true })
                                .then((result) => {
                                    // res.status(200).json({ message : "Your Profile Successfully Update..!" }).send()
                                }).catch(err => {
                                    // res.status(500).json({ message : "unSuccessfully Updated...." }).send()
                                })
                        }
                    }))
                })
            }
    })
})


/*  +------------------------------------+
    |       Password change              |
    +------------------------------------+  */
    
    router.put('/user_password_change/:id',async (req, res) => {

    
    // console.log("re",req.body);
    //res.status(200).send("call this api");
        admin_user.find({ _id: req.params.id }, function (err, user) {    
            if (user.length > 0){
                bcrypt.compare(req.body.old_password, user[0].password, function (err, result) {
                    if (!result)
                    {
                            res.status(400).send({ message: "Your Password is Invalid Enter Please try again..!" })
                    }else{
                        bcrypt.compare(req.body.new_password, user[0].password, function (err, result) {
                            if (result == true)
                            {
                                res.status(400).send({ message: "Current Password and New Password Same Please Enter Unique Password..!" })
                            }else{
                                var body = req.body;
                                bcrypt.genSalt(12, function (err, salt) {
                                    if (err)
                                    {
                                        throw err
                                    }
                                    else
                                    {
                                        bcrypt.hash(req.body.new_password, salt,async function(err, hash) {
                                            if (err)
                                            {
                                                throw err
                                            }
                                            else
                                            {
                                                body.new_password=hash
                                                const user_data = await admin_user.findById(req.params.id)
                                                user_data.password=hash
                                                user_data.save()
                                                res.status(200).json({ status: "Your Password Successfully Updated...." })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }else{

            }
        })

        // admin_user.find({ _id: req.params.id }, function (err, user) {
        //     if (user.length > 0)
        //     {
        //       bcrypt.compare(req.body.old_password, user[0].password, function (err, result) {
        //         if (!result)
        //         {
        //                res.status(400).send({ message: "Your Password is Invalid Enter Please try again..!" })
        //         }else{
        //             bcrypt.compare(req.body.new_password, user[0].password, function (err, result) {
        //                 if (result == true)
        //                 {
        //                     res.status(400).send({ message: "Current Password and New Password Same Please Enter Unique Password..!" })
        //                 }else{
        //                     var body = req.body;
        //                     bcrypt.genSalt(12, function (err, salt) {
        //                         if (err)
        //                         {
        //                             throw err
        //                         }
        //                         else
        //                         {
        //                             bcrypt.hash(req.body.new_password, salt,async function(err, hash) {
        //                                 if (err)
        //                                 {
        //                                     throw err
        //                                 }
        //                                 else
        //                                 {
        //                                     body.new_password=hash
        //                                     const user_data = await admin_user.findById(req.params.id)
        //                                     user_data.password=hash
        //                                     user_data.save()
        //                                     res.status(200).json({ status: "Your Password Successfully Updated...." })
        //                                 }
        //                             })
        //                         }
        //                     })
        //                 }
        //             })
        //         }
        //     }
        // })
        // if(user.password == req.body.password)
        // {
        //     res.status(400).send({ message: "Current Password and New Password Same Please Enter Unique Password..!" })
        // }
        // else
        // {
        //     bcrypt.genSalt(12, function (err, salt) {
        //     if (err)
        //     {
        //         throw err
        //     }
        //     else
        //     {
        //         bcrypt.hash(req.body.password, salt,async function(err, hash) {
        //         if (err)
        //         {
        //             throw err
        //         }
        //         else
        //         {
        //             body.password=hash
        //             const user_data = await admin_user.findById(req.params.id)
        //             user_data.password=hash
        //             user_data.save()
        //         }
        //         })
        //     }
        //     })
        // }
    })

module.exports = router;
