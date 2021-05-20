const express = require('express');  // Express
const router = express.Router(); // Router

const Blog_category = require('../../models/cilent_model/Blog_Category_Model');  // Blog Categories Model
const Blog_schema = require('../../models/cilent_model/Blog_Model');  // Blog Model

let path = require('path'); // path
const multer = require('multer'); // Multer one type image upload time call middleware
var fs = require('fs'); // file systems

var ObjectId = require('mongodb').ObjectID;

// multer photo upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'admin/public/uploads/Blog_img/');
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


/*  +------------------------------------------+
    |      category  blog name get data        |
    +------------------------------------------+  */

    router.get('/category_Blog_show',async (req, res) =>{
        await Blog_category.find().exec()
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        })
    })

/*  +---------------------------------------+
    |      category wise blog create        |
    +---------------------------------------+  */

    router.post('/blog_create',(req, res) =>{
       
        // console.log("call this funcation");
        
        let upload = multer({ storage: storage, fileFilter: fileFilter }).single('blog_image');

        upload(req, res, function (err) {

            // console.log("data",req.body);
            // console.log("data",req.file);

            const status = "Active";

            const Blog_data_new = new Blog_schema({
                blog_category_id: req.body.blog_category_id,
                blog_title: req.body.blog_title,
                blog_image: photo_name,
                blog_content: req.body.blog_content,
                blog_date: req.body.blog_date,
                author: req.body.author,
                blog_status: status
            })

            Blog_data_new.save()
            
            .then((result) => {
                res.status(200).send();
            }).catch((err) => {
                res.status(400).send();
            })

        });   
    })

/*  +-----------------------------------------+
    |     alll blog show in admin list        |
    +-----------------------------------------+  */

    router.get('/Blog_List',async (req, res) =>{

        await Blog_category.aggregate([
            {
                $lookup:
                {
                    from: "blog",
                    localField: "_id",
                    foreignField: "blog_category_id",
                    as: "per_DATA"
                }
            },
            { $unwind: "$per_DATA" },
            {
                $project: {
                    "_id": 1,
                    "blog_category_name": 1,
                    "blog_id": "$per_DATA._id",
                    "blog_title": "$per_DATA.blog_title",
                    "blog_image": "$per_DATA.blog_image",
                    "blog_content": "$per_DATA.blog_content",
                    "blog_date": "$per_DATA.blog_date",
                    "author": "$per_DATA.author",
                    "blog_status": "$per_DATA.blog_status",
                }
            },
            {
                $sort: { "blog_id": -1 }
            },
            { 
                $match : { $or:[{"blog_status":"Active"},{"blog_status":"In-Active"}] }
            }
        ],function (err, new_blog) {
            if(new_blog.length > 0)
            {
                res.status(200).send(new_blog)
            }else{
                res.status(400).send()
            }
        })
       
    })


/*  +--------------------------+
    |        Delete data       |
    +--------------------------+  */
    router.put('/blog_delete/:id',(req, res) => {
        
        Blog_schema.updateOne({ _id: req.params.id },{ blog_status : "disable" }, { new: true })
        .then((result) => {
            res.status(200).send()
        }).catch(err => {
            console.log(err);
            res.status(400).send()
        })
    })

/*  +-------------------------------------+
    |        disable user show data       |
    +-------------------------------------+  */
     router.get('/Blog_List_Delete',async (req, res) => {

        await Blog_category.aggregate([
            {
                $lookup:
                {
                    from: "blog",
                    localField: "_id",
                    foreignField: "blog_category_id",
                    as: "per_DATA"
                }
            },
            { $unwind: "$per_DATA" },
            {
                $project: {
                    "_id": 1,
                    "blog_category_name": 1,
                    "blog_id": "$per_DATA._id",
                    "blog_title": "$per_DATA.blog_title",
                    "blog_image": "$per_DATA.blog_image",
                    "blog_content": "$per_DATA.blog_content",
                    "blog_date": "$per_DATA.blog_date",
                    "author": "$per_DATA.author",
                    "blog_status": "$per_DATA.blog_status",
                }
            },
            {
                $sort: { "blog_id": -1 }
            },
            { 
                $match : {"blog_status":"disable"}
            }
        ],function (err, new_blog) {
            if(new_blog.length > 0)
            {
                res.status(200).send(new_blog)
            }else{
                res.status(400).send()
            }
        })

    })

/*  +---------------------------------------------+
    |        Active Blog to In-Active Blog        |
    +---------------------------------------------+  */
    router.put('/active_to_IN_active/:id',async (req, res) => {

        await Blog_schema.updateOne({ _id: req.params.id },{ blog_status : "In-Active" }, { new: true })
        .then((result) => {
            res.status(200).send()
        }).catch(err => {
            console.log(err);
            res.status(400).send()
        })
    })

/*  +--------------------------------------------+
    |        In-active Blog to Active blog       |
    +--------------------------------------------+  */
    router.put('/IN_active_to_Active/:id',async (req, res) => {

        await Blog_schema.updateOne({ _id: req.params.id },{ blog_status : "Active" }, { new: true })
        .then((result) => {
            res.status(200).send()
        }).catch(err => {
            console.log(err);
            res.status(400).send()
        })

    })

/*  +-----------------------------------------------------+
    |        delete blog men's disable blog active        |
    +-----------------------------------------------------+  */

    router.put('/blog_active/:id',async (req, res) => {

        await Blog_schema.updateOne({ _id: req.params.id },{ blog_status : "Active" }, { new: true })
        .then((result) => {
            res.status(200).send()
        }).catch(err => {
            console.log(err);
            res.status(400).send()
        })
    })

/*  +---------------------------------+
    |        Blog permanent delete    |
    +---------------------------------+  */

    router.delete('/blog_permanent_delete/:id',(req, res) => {
        
        const id = req.params.id;

        const delete_img = Blog_schema.findById({ _id: id })
        delete_img.exec()
        .then(result => {
            fs.unlink("admin/public/uploads/Blog_img/" + result.blog_image, (err) => {
                if (err) {
                    console.log(err);
                }
            })
        })
        .catch((err)=>{
            res.status(400).send();
        })

        const delete_blog_data = Blog_schema.deleteOne({ _id: id })
        delete_blog_data.exec()
        .then((result) => {
            res.status(200).send();
        }).catch((err) => {
            res.status(400).send();
        })    
    })

/*  +-------------------------------+
    |        blog View data         |
    +-------------------------------+  */
    router.get('/blog_view/:id',async (req, res) => {
        
        const id = req.params.id;
    
        await Blog_category.aggregate([
            {
                $lookup:
                {
                    from: "blog",
                    localField: "_id",
                    foreignField: "blog_category_id",
                    as: "per_DATA"
                }
            },
            { $unwind: "$per_DATA" },
            {
                $project: {
                    "_id": 1,
                    "blog_category_name": 1,
                    "blog_id": "$per_DATA._id",
                    "blog_title": "$per_DATA.blog_title",
                    "blog_image": "$per_DATA.blog_image",
                    "blog_content": "$per_DATA.blog_content",
                    "blog_date": "$per_DATA.blog_date",
                    "author": "$per_DATA.author",
                    "blog_status": "$per_DATA.blog_status",
                }
            },
            {
                $sort: { "blog_id": -1 }
            },
            { 
                $match : { "blog_id" : { $eq : ObjectId(id) } }
            }
        ],function (err, new_blog) {
            if(new_blog.length > 0)
            {
                res.status(200).json(new_blog)
            }else{
                res.status(400).send()
            }
        })
        
    })

/*  +---------------------------------+
    |        blog uddate data         |
    +---------------------------------+  */

    router.put('/Blog_update/:id', async (req, res) => {

        let upload = multer({ storage: storage, fileFilter: fileFilter }).single('blog_image');

        upload(req, res, function (err) {

            // console.log("data", req.body);
            // console.log("file",  req.file);

            if (req.file != null) 
            {
                // console.log("data_if");
                // const id = req.params.id;
                // const delete_img = Blog_schema.findById({ _id: id })
                // delete_img.exec()
                //     .then((result) => {
                //         fs.unlink("admin/public/uploads/Blog_img/" + result.blog_image, ((err) => {
                //             if (err) { console.log(err); }
                //             else {
                                if(req.body.blog_category_id == "undefined")
                                {           
                                    Blog_schema.updateOne({ _id: req.params.id },{
                                        blog_title: req.body.blog_title,
                                        blog_image: photo_name,
                                        blog_content: req.body.blog_content,
                                        blog_date: req.body.blog_date,
                                        author: req.body.author
                                    }, { new: true })
                                    .then((result) => {
                                        res.status(200).send()
                                    })
                                    .catch(err => {
                                        res.status(400).send()
                                    })
                                }
                                else
                                {
                                    Blog_schema.updateOne({ _id: req.params.id }, {
                                        blog_category_id: req.body.blog_category_id,
                                        blog_title: req.body.blog_title,
                                        blog_image: photo_name,
                                        blog_content: req.body.blog_content,
                                        blog_date: req.body.blog_date,
                                        author: req.body.author
                                    }, { new: true })
                                        .then((result) => {
                                            res.status(200).send()
                                        }).catch(err => {
                                            res.status(500).send()
                                        })
                                }   
                    //         }
                    //     }))
                    // })
            } else {
                
                // console.log("data_else",req.params.id);
                
                if(req.body.blog_category_id == "undefined")
                {           
                    Blog_schema.updateOne({ _id: req.params.id },{
                        blog_title: req.body.blog_title,
                        blog_content: req.body.blog_content,
                        blog_date: req.body.blog_date,
                        author: req.body.author
                    }, { new: true })
                    .then((result) => {
                        res.status(200).send()
                    })
                    .catch(err => {
                        res.status(400).send()
                    })
                }
                else
                {
                    Blog_schema.updateOne({ _id: req.params.id }, {
                        blog_category_id: req.body.blog_category_id,
                        blog_title: req.body.blog_title,
                        blog_content: req.body.blog_content,
                        blog_date: req.body.blog_date,
                        author: req.body.author
                    }, { new: true })
                    .then((result) => {
                        res.status(200).send()
                    }).catch(err => {
                        res.status(400).send()
                    })
                }
            }

            if(req.file)
            {
                const id = req.params.id;
                const delete_img = Blog_schema.findById({ _id: id })
                delete_img.exec()
                .then((result) => {
                    fs.unlink("admin/public/uploads/Blog_img/" + result.blog_image, ((err) => {
                        if (err) { console.log(err); }
                        else {
                            if(req.body.blog_category_id == "undefined")
                            {           
                                Blog_schema.updateOne({ _id: req.params.id },{
                                    blog_image: photo_name,
                                }, { new: true })
                                .then((result) => {
                                    res.status(200).send()
                                })
                                .catch(err => {
                                    res.status(400).send()
                                })
                            }
                            else
                            {
                                Blog_schema.updateOne({ _id: req.params.id }, {
                                    blog_category_id: req.body.blog_category_id,
                                    blog_image: photo_name,
                                }, { new: true })
                                .then((result) => {
                                    res.status(200).send()
                                }).catch(err => {
                                    res.status(500).send()
                                })
                            }   
                        }
                    }))
                })
            }
        })
    })
    
module.exports = router;