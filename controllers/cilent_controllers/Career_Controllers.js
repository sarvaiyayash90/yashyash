const express = require('express');  // Express
const router = express.Router(); // Router

let path = require('path'); // path
const multer = require('multer'); // Multer one type image upload time call middleware
var fs = require('fs'); // file systems

const career = require('../../models/cilent_model/career_Model');  // career Model
const Get_Quotation_m = require('../../models/cilent_model/Get_Quotation_Model');  // Get Quotation Model


const nodemailer = require('nodemailer')

var transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'sarvaiyayash30@gmail.com',
        pass:'rddldqdysapwcinr'
    }
})

// require('../../pdf_uploads/')

// multer photo upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'pdf_uploads/');
    },
    filename: function (req, file, cb) {
        // photo_name = Date.now() + path.extname(file.originalname)
        file_name = file.originalname
        cb(null, file_name)
        // cb(null, photo_name);
    }
});

/*  +--------------------------+
    |       career data        |
    +--------------------------+  */

router.post('/Career_Apply_Now',(req,res)=>{

    let upload = multer({ storage: storage }).single('resume');

    upload(req, res, function (err) {
        
        // console.log("file",req.file);
        // console.log("body",req.body);
        // console.log("this funcation call")
        // res.status(200).send("this page call");

        const career_new = new career({
            fullname: req.body.fullname,
            email: req.body.email,
            phone_no: req.body.phone_no,
            apply_for: req.body.apply_for,
            fresh_experiencd: req.body.fresh_experiencd,
            about_your_skills: req.body.about_your_skills,
            resume: file_name
        })

        console.log("data", career_new);
        
        career_new.save()
            .then((career_data) => {
                
                const c_id = career_data._id
                career.find({ _id : c_id }).exec()
                .then((result) => {
                    // res.status(200).send(result)
                      
                    var mailOptions = {
                    form:req.body.email,
                    to:'sarvaiyayash30@gmail.com',
                    subject:'Build Career',
                    html:`
                        <h2>Apply for New User</h2>
                        <h3>Fullname : ${result[0].fullname}</h3>
                        <h3>Email : ${result[0].email}</h3>
                        <h3>Phone No. : ${result[0].phone_no}</h3>
                        <h3>Apply For : ${result[0].apply_for}</h3>
                        <h3>fresh / experiencd : ${result[0].fresh_experiencd}</h3>
                        <h3>About Your Skills : ${result[0].about_your_skills}</h3>
                    `,
                        attachments: [
                            {
                                filename:`${result[0].resume}`, // <= Here: made sure file name match
                                path: path.join(__dirname, `/../../../pdf_uploads/${result[0].resume}`), // <= Here
                                contentType: 'application/pdf'
                            }
                        ]
                    }
                
                    transport.sendMail(mailOptions,function(err,info){
                        if(err){
                            console.log("Error=>",err)
                        }else{
                            
                            var mailOptions = {
                                form:'sarvaiyayash30@gmail.com',
                                to:result[0].email,
                                subject:'Build Career',
                                html:`
                                <h1>Thanks for Apply</h1>
                                <br></br>
                                Thanks & Regards !
                                <br></br>
                                Infilon Technologies Pvt. Ltd.
                                `
                            }
                            transport.sendMail(mailOptions,function(err,info){
                                if(err){
                                    console.log("Error=>",err)
                                }else{
                                    res.status(200).send({ message: "Please check your email Address..!" }) 
                                }
                            })

                            res.status(200).send({ message: "Please check your email Address..!" }) 
                        }
                    })
                    
                })
                .catch(err => {
                    res.status(500).send(err)
                })
            
            }).catch(err => {
                //console.log(err);
                res.status(400).send();
                // res.status(400).json({ "status": "data Not insert successfully" });
            })
    }); 
})

/*  +---------------------------------+
    |       get quotation data        |
    +---------------------------------+  */
router.post('/Get_Quotation',(req, res) => {

    const Get_Quotation_new = new Get_Quotation_m({
        name: req.body.name,
        select_website_type: req.body.select_website_type,
        select_budget_type: req.body.select_budget_type,
        email: req.body.email,
        moblie_no: req.body.moblie_no,
        select_reference: req.body.select_reference,
    })

    Get_Quotation_new.save()
    .then(result => {
        res.status(200).send();
    }).catch(err => {
        res.status(400).json({ message: "data Not insert successfully" });
    })

})


module.exports = router;


