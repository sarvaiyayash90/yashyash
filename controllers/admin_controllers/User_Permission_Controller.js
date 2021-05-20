const express = require('express'); // Express
const { reset } = require('nodemon');
var router = express.Router(); // Router

const admin_schema = require('../model/admin_Login_Model');  // admin Model
const form_schema = require('../model/form_Model');  // form Model
const permission_schema = require('../model/permission_Model');  // permission Model

var ObjectId = require('mongodb').ObjectID;

// router.post('/permission_check',async (req,res)=>{

//     // console.log("id",req.body.params.l_id);
//     // console.log("url",req.body.params.l_url);

//     const data =  await permission_schema.find({admin_id : req.body.params.l_id,url_new : req.body.params.l_url})
//     if(data.length === 0){
//         res.clearCookie('user_sid');
//         res.status(400).send()
//     }else{
//         res.status(200).send()
//     }

//     // .then((res_data)=>{
//     //     console.log("sasas",res_data);
//     //     res.status(200).send()
//     // }).catch((err)=>{
//     //     console.log("errr")
//     //     //res.status(400).send()
//     // })
    
//     // console.log("id",req.query.l_id);
//     // console.log("url",req.query.l_url);
    
//     // var user_admin,other;

//     // permission_schema.aggregate([
//     //     {
//     //         $project: {
//     //             _id: 0,
//     //             permission: '$$ROOT'
//     //         }
//     //     },
//     //     {
//     //         $lookup: {
//     //             localField: 'permission.admin_id',
//     //             from: 'admin',
//     //             foreignField: '_id',
//     //             as: 'admin'
//     //         }
//     //     }, 
//     //     {
//     //         $unwind: {
//     //             path: '$admin',
//     //             preserveNullAndEmptyArrays: false
//     //         }
//     //     }, 
//     //     {
//     //         $lookup: {
//     //             localField: 'permission.form_id',
//     //             from: 'form',
//     //             foreignField: '_id',
//     //             as: 'form'
//     //         }
//     //     }, 
//     //     {
//     //         $unwind: {
//     //             path: '$form',
//     //             preserveNullAndEmptyArrays: false
//     //         }
//     //     }
//     // ],function (err, new_user) {

//     //     if(new_user.length > 0)
//     //     {
//     //         for(var i=0; i<new_user.length; i++)
//     //         {   
//     //             if(req.query.l_id == new_user[i].permission.admin_id && new_user[i].admin.login_type == 'admin' && new_user[i].permission.url_new == req.query.l_url)
//     //             {
//     //                 user_admin = 1
//     //             }
//     //             else if(req.query.l_id == new_user[i].permission.admin_id && new_user[i].admin.login_type == 'user' && new_user[i].permission.url_new == req.query.l_url)
//     //             {
//     //                 user_admin = 1
//     //             }
//     //             else
//     //             {
//     //                 //console.log("call this");
//     //             }
//     //         }
//     //         if(1 == user_admin)
//     //         {
//     //             //console.log("admin_if_condition",new_user[0].admin._id)
//     //             res.status(200).send({
//     //                 check_id : new_user[0].admin._id,
//     //                 message : "check successfully"
//     //             })
//     //         }
//     //         else
//     //         {
//     //             req.session.destroy();
//     //             res.clearCookie('user_sid');
//     //             res.status(400).send()
//     //         }
//     //     }else{
//     //         req.session.destroy();
//     //         res.clearCookie('user_sid');
//     //         res.status(400).send()
//     //     }
//     // })
// })
/*  +---------------------+
    |     permission      |
    +---------------------+  */
    router.get('/permission_components_check',async (req,res)=>{
    
        const id = req.query.l_id
        // console.log("url=>",req.query.l_url);
        // console.log("user=>",req.query.l_user);
        const admin = await admin_schema.find({ Token : id , login_type:"admin"})
        if(admin.length > 0)
        {   
            // console.log("admin routes send",admin)
            // setTimeout(()=>{
                res.status(200).send()
            // },2000)
        }else{
            try{
                await form_schema.aggregate([
                    {
                        $lookup:
                        {
                            from: "permission",
                            localField: "_id",
                            foreignField: "form_id",
                            as: "per_DATA"
                        }
                    },
                    { $unwind: "$per_DATA" },
                    {
                        $project: {
                           "_id": 1,
                           "form_name": 1,
                           "form_path" : 1,
                           "form_component" : 1,
                           "admin_id": "$per_DATA.admin_id",
                           "form_id": "$per_DATA.form_id",
                           "status": "$per_DATA.status"
                           
                        }
                    },
                    { 
                        $match : { $and:[{ admin_id :{$eq:ObjectId(id)}},{"status":"Active"}] }
                    }
                ],function (err, new_user) {
                    if(new_user.length > 0)
                    {
                        // setTimeout(()=>{
                            res.status(200).send(new_user)
                        // },2000)
                        // console.log("res_permission",new_user)
                    }else{
                        res.status(400).send()
                    }
                })
            }catch{
                res.status(400).send()
            }
        }
    })
/*  +-----------------------------+
    |     sidebar permission      |
    +-----------------------------+  */
    router.get('/permission_check_sidebar',async (req,res)=>{

        const id = req.query.l_id

        const admin = await admin_schema.find({ Token : id , login_type:"admin"})
            if(admin.length > 0)
            {   
                // console.log("user___",admin);
                
                // setTimeout(()=>{
                    res.status(200).send()
                // },2000)

            }else{
                try{
                    await form_schema.aggregate([
                        {
                            $lookup:
                            {
                                from: "permission",
                                localField: "_id",
                                foreignField: "form_id",
                                as: "per_DATA"
                            }
                        },
                        { $unwind: "$per_DATA" },
                        {
                            $project: {
                            "_id": 1,
                            "form_name": 1,
                            "form_path" : 1,
                            "admin_id": "$per_DATA.admin_id",
                            "form_id": "$per_DATA.form_id",
                            "status": "$per_DATA.status"
                            }
                        },
                        { 
                            $match : { $and:[{ admin_id :{$eq:ObjectId(id)}},{"status":"Active"}] }
                        }
                    ],function (err, new_user) {
                        if(new_user.length > 0)
                        {
                            
                            // setTimeout(()=>{
                                res.status(200).send(new_user)
                            // },2000)

                            //res.status(200).send(new_user)
                            // console.log("res_permission",new_user)
                        }else{
                            res.status(400).send()
                        }
                    })
                }catch{
                    res.status(400).send()
                }
            }
       
        
    })

/*  +-----------------------------------------------------------------+
    |     sidebar permission form show in user registration page      |
    +-----------------------------------------------------------------+  */
    router.get('/permission_check_user_show',async (req,res)=>{

        form_schema.find().exec()
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    })

/*  +-------------------------------------------------------+
    |     sidebar permission form show in edit user page    |
    +-------------------------------------------------------+  */
    router.get('/permission_user_edit_permission_check/:id',async (req,res)=>{

    // console.log("sss",req.params.id)
        
    const id = req.params.id
    
    form_schema.aggregate([
        {
            $lookup:
            {
                from: "permission",
                localField: "_id",
                foreignField: "form_id",
                as: "per_DATA"
            }
        },
        { $unwind: "$per_DATA" },
        {
            $project: {
               "_id": 1,
               "form_name": 1,
               "admin_id": "$per_DATA.admin_id",
               "form_id": "$per_DATA.form_id",
               "status": "$per_DATA.status"
            }
        },
        { 
            $match : { 
                "admin_id" :{$eq:ObjectId(id)}
            }
        }
    ],function (err, new_user) {
        // console.log("ssssssssssssss",new_user);
        if(new_user.length > 0)
        {
            res.status(200).send(new_user)
            // console.log("res",new_user)
        }else{
            console.log('err',err)
        }
    })

    // form_schema.aggregate([
    //     {
    //         $lookup:
    //         {
    //             from: "permission",
    //             localField: "_id",
    //             foreignField: "form_id",
    //             as: "per_DATA"
    //         }
    //     },
    //     { $unwind: "$per_DATA" },
    //     {
    //         $project: {
    //            "_id": 1,
    //            "form_name": 1,
    //            "admin_id": "$per_DATA.admin_id",
    //            "form_id": "$per_DATA.form_id",
    //            "status": "$per_DATA.status"
    //         }
    //     },
    //     { 
    //         $match : { 
    //             "admin_id" :{$eq:ObjectId(`${id}`)}
    //         }
    //     }
    // ],function (err, new_user) {
    //     // console.log("ssssssssssssss",new_user);
    //     if(new_user.length > 0)
    //     {
    //         console.log("res",new_user)
    //     }else{
    //         console.log('err',err)
    //     }
    // })


    // permission_schema.aggregate(
    // [
    //     { 
    //         $match : { 
    //             admin_id :{$eq:ObjectId(`${id}`)}
    //         }
    //     },
    //     {
    //         $lookup:
    //           {
    //             from: "form",
    //             localField: "form_id",
    //             foreignField: "_id",
    //             as: "per_DATA"
    //           }
    //     },
    //     { $unwind: "$per_DATA" },
    //     {
    //        $project: {
    //            "_id": 0,
    //            "status": 1,
    //            "form_id": 1,
    //            "admin_id":1,
    //            "form_name": "$per_DATA.form_name",
    //            "f_id": "$per_DATA._id",
    //        }
    //     }
    // ],function (err, new_user) {
    //     // console.log("ssssssssssssss",new_user);
    //     if(new_user.length > 0)
    //     {
    //         console.log("res",new_user)
    //     }else{
    //         console.log('err',err)
    //     }
    // })
        
        // await permission_schema.find({ admin_id : req.params.id },function (err, new_user){
        //     if(!new_user)
        //     {
        //         console.log("err",err);
        //     }
        //     else
        //     {   
        //         // console.log("user___",new_user);
        //         res.status(200).send(new_user)
        //     }
        // }) 
    })

/*  +--------------------------------------------------------------+
    |     sidebar permission form show in edit user page Update    |
    +--------------------------------------------------------------+  */

    router.put('/form_active_to_in_active',async (req, res) => {

        // console.log("u_id",req.body.params.user_id);
        // console.log("f_id",req.body.params.f_id);

        await permission_schema.find({ admin_id : req.body.params.user_id,form_id:req.body.params.f_id },function (err, new_user){
            if(!new_user)
            {
                console.log("err",err);
            }
            else
            {   
                try{
                    if(new_user[0].status == "Active")
                    {
                        permission_schema.updateOne({ admin_id: req.body.params.user_id,form_id: req.body.params.f_id},{ status : "In-Active" }, { new: true }).then((result) => {
                            res.status(200).send()
                        }).catch(err => {
                            console.log(err);
                            res.status(400).send()
                        })
                    }
                    else
                    {
                        permission_schema.updateOne({ admin_id: req.body.params.user_id,form_id: req.body.params.f_id},{ status : "Active" }, { new: true }).then((result) => {
                            res.status(200).send()
                        }).catch(err => {
                            console.log(err);
                            res.status(400).send()
                        })
                    }
                }catch{
                    res.status(400).send()
                }
            }
        }) 
    })

/*  +-------------------------------------------+
    |     permission form new insert in data    |
    +-------------------------------------------+  */

    router.post('/user_permission_form_insert',async (req, res) => {
        
        await permission_schema.find({ admin_id : req.body.user_ID,form_id:req.body.form_ID },function (err, new_user){
            if(new_user.length > 0)
            {
                // console.log("err",err);
                res.status(400).send()
            }
            else
            {   
                const permission_new = new permission_schema({
                    admin_id : req.body.user_ID,
                    form_id : req.body.form_ID,
                    status : "Active"
                })
                permission_new.save()
                .then((res)=>{
                    res.status(200).send()
                }).catch((err)=>{
                    res.status(400).send()
                })
            }
        })
          
    })

module.exports = router;