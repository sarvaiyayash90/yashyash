const express = require('express');  // Express
const router = express.Router(); // Router

const Blog_category = require('../../models/cilent_model/Blog_Category_Model');  // Blog Categories Model
const Blog = require('../../models/cilent_model/Blog_Model');  // Blog Model

/*  +------------------------------------------+
    |      category blog name get data         |
    +------------------------------------------+  */

    router.get('/category_Blog',async (req, res) =>{
        await Blog_category.find().exec()
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        })
    })


/*  +-----------------------------+
    |       blog get data         |
    +-----------------------------+  */

    router.get('/Blog',async (req, res) =>{

        await Blog.find().sort( { _id : -1 } ).exec()
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        })

    })

/*  +-----------------------------+
    |      new blog get data         |
    +-----------------------------+  */

    router.get('/new_Blog',(req, res) =>{
        Blog.find().sort( { _id : -1 } ).limit(3).exec()
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        })
    })

/*  +------------------------------------+
    |       blog inside get data         |
    +------------------------------------+  */
    
    router.get('/Blog_inside/:id',async (req, res) =>{
        await Blog.findById({ _id : req.params.id })
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        })
    })

/*  +------------------------------------+
    |       recent blog get data         |
    +------------------------------------+  */
    
    router.get('/recent_blog_post',async (req, res) =>{
        await Blog.find().sort( { _id : -1 } ).limit(5).exec()
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        })
    })

/*  +---------------------------------------+
    |       category wise blog show         |
    +---------------------------------------+  */
    router.get('/category_view_Blog/:id',async (req, res) =>{ 
        
        await Blog.find({ blog_category_id : req.params.id }).exec()
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        })

    })


    
module.exports = router;

