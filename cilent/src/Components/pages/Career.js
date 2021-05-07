import React,{useState,useEffect} from 'react'

import axios from 'axios';


const Career = () => {

    const[data,setdata]=useState({
        fullname : '',
        email : '',
        phone_no : '',
        apply_for :'',
        fresh_experiencd : '',
        about_your_skills : '',
        resume:null
    })

    const {fullname,email,phone_no,apply_for,resume,fresh_experiencd,about_your_skills} = data;

    const onInputChange = e => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }; 
    

    const [new_pdf, set_new_pdf] = useState(null);
    const [invalid_pdf, setinvalid_pdf] = useState(null);

    const [auth,setauth]=useState(false);
    const [error,seterror]=useState('');
    
    const [formerror,setformerror]=useState({
        fullname_err : null,
        email_err : null,
        phone_no_err : null,
        password_err :null,
        about_your_skills_err:null,
        resume_err:null,
        apply_for_err:null,
        fresh_experiencd_err:null
    });
    
    // const onInputChange_resume = e => {
    //     const pdfFile = e.target.files[0];

    //     if (!pdfFile) {
    //         setpdf({ invalid_pdf: 'Please select File.' });
    //         return false;
    //     }
        
    //     if (!pdfFile.name.match(/\.(pdf|doc)$/)) {
    //         setpdf({ invalid_pdf: 'Please select valid File.' });
    //         return false;
    //     }

    //     reader.onload = (e) => {
    //         const img = new Image();
    //         img.onload = () => {
    //             setpdf({ resume: pdfFile, invalid_pdf: null,handleResponse: null });
    //             return true;
    //         };
    //         img.onerror = () => {
    //             setpdf({ invalid_pdf: 'Invalid File content.' });
    //             return false;
    //         };
    //         debugger
    //         img.src = e.target.result;
    //     };
    //     reader.readAsDataURL(pdfFile);
    // };
    

    const onhandlesubmit_user = e =>{
        e.preventDefault();

        if(!fullname && !email && !phone_no && !about_your_skills && !resume && !apply_for && !fresh_experiencd){
            setformerror({  
                fullname_err: 'Please Enter Fullname',
                email_err: 'Please Enter email',
                phone_no_err: 'Please Enter Phone_no',
                password_err: 'Please Enter password',
                about_your_skills_err: 'Please Enter about your skills',
                resume_err : 'Please Select File',
                apply_for_err : 'Please Select Any Option',
                fresh_experiencd_err:'Please Select Any Option'
            });
            setTimeout(()=>{setformerror({ 
                fullname_err: '',
                email_err: '',
                phone_no_err : '',
                password_err : '',
                about_your_skills_err : '',
                resume_err:'',
                apply_for_err:'',
                fresh_experiencd_err:''
            })},3000);
        }
        else if(!fullname){
            setformerror({ fullname_err: 'Please Enter fullname' });
                setTimeout(()=>{
                    setformerror({ fullname_err: '' })
                },3000);
            return false;
        }else if(!email){
            setformerror({ email_err: 'Please Enter email' });
            setTimeout(()=>{
                setformerror({ email_err: '' })
                },3000);
            return false;
        }else if(!phone_no){
            setformerror({ phone_no_err: 'Please Enter phone_no' });
                setTimeout(()=>{
                    setformerror({ phone_no_err: '' })
                  },3000);
                return false;
        }
        else if(new_pdf == null){
            setformerror({  resume_err : 'Please Select File' });
                setTimeout(()=>{
                    setformerror({ resume_err: '' })
                  },3000);
                return false;
        }
        else if(apply_for==''){
            setformerror({ apply_for_err: 'Please Select Any Option' });
                setTimeout(()=>{
                    setformerror({ apply_for_err: '' })
                  },3000);
                return false;
        }else if(fresh_experiencd==''){
            setformerror({ fresh_experiencd_err: 'Please Select Any Option' });
                setTimeout(()=>{
                    setformerror({ fresh_experiencd_err: '' })
                  },3000);
                return false;
        }
        else if(!about_your_skills){
            setformerror({ about_your_skills_err: 'Please Enter About your Skills' });
                setTimeout(()=>{
                    setformerror({ about_your_skills_err: '' })
                  },3000);
                return false;
        }
        else{
            const bodyFormData = new FormData();
            bodyFormData.append("fullname",fullname);
            bodyFormData.append("email",email);
            bodyFormData.append("phone_no",phone_no);
            bodyFormData.append("apply_for",apply_for);
            bodyFormData.append("fresh_experiencd",fresh_experiencd);
            bodyFormData.append("about_your_skills",about_your_skills);

            console.log('form_data',bodyFormData);

            if (new_pdf != null) {
                if (!new_pdf.name.match(/\.(pdf|docx)$/)) {
                    setinvalid_pdf('Please select valid File Like PDF And Docx...');
                    return false;
                }
                setinvalid_pdf('');    
                bodyFormData.append("resume", new_pdf);
            }
            
            axios.post("http://localhost:5000/Careerdata/Career_Apply_Now",bodyFormData)
            .then((res)=>{
                setauth(true)
                setTimeout(()=>{
                    window.location.href="/"
                },2000)
            }).catch((err)=>{
                window.location.reload()
                if (err.response && err.response.data) {
                    //console.log(err.response.data.message) // some reason error message
                    seterror(err.response.data.message)
                    setTimeout(()=>{
                      seterror("")
                    },5000);
                }
            })
        }
    }
    
    return (

        <div className="container-fluid p-0">
            <div className="contact-section-nav">
                <div className="contact-section-nav-text">
                    <h1>Current Openings</h1>
                    <p>build your career with us</p>
                </div>
            </div>

            <div className="career-section-collapsedata">

                <div className="career-section-collapsedata-inside">
                    <p>
                        <a class="btn" data-toggle="collapse" data-target="#collapseExample_node_js" aria-expanded="false" aria-controls="collapseExample">
                            Node.js Developer
                            <a className="mydiv ml-3" style={{color:'white'}}>NEW</a>
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample_node_js">
                        <div class="card card-body" >
                            <div className="row inside">
                                <div className="col-sm-4 pt-1">
                                    <h5>Exp : <b>Fresher or Exp.</b></h5>
                                </div>
                                <div className="col-sm-4 pt-1">
                                    <h5>Job Type : <b>Full Time</b></h5>
                                </div>
                                <div className="col-sm-4 pt-1">
                                    <h5>No. of Openings : <b>4</b></h5>
                                </div>
                            </div>
                            <ul className="text-left mt-2">
                                <b>Key responsibility</b>
                                <li>Basic knowledge of NodeJS,Express</li>
                                <li>Knowledge advance Front-End Technologies (React/Angular)</li>
                                <li>Good knowledge of REST API Design and Development in Node.js</li>
                                <li>Experience working with databases such as MySQL, MongoDB</li>
                                <li>Familiarity with RESTful APIs</li>
                                <li>Familiarity with code versioning tools (GIT, BitBucket)</li>
                                <li>Understanding of modularized / service-oriented architecture</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="career-section-collapsedata-inside mt-3">
                    <p>
                        <a class="btn" data-toggle="collapse" data-target="#collapseExample_php" aria-expanded="false" aria-controls="collapseExample">
                            PHP Developer ( MVC )
                            <a className="mydiv ml-3" style={{color:'white'}}>NEW</a>
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample_php">
                        <div class="card card-body">
                            <div className="row inside">
                                <div className="col-sm-4 pt-1">
                                    <h5>Exp : <b>1+ Year</b></h5>
                                </div>
                                <div className="col-sm-4 pt-1">
                                    <h5>Job Type : <b>Full Time</b></h5>
                                </div>
                                <div className="col-sm-4 pt-1">
                                    <h5>No. of Openings : <b>3</b></h5>
                                </div>
                            </div>
                            <p id="php_text"className="mt-2">PHP Developer Position We are a rapidly growing, innovative, nationwide company in Ahmedabad. We are search a PHP developer with solid programming experience. This is a fantabulous opportunity to apply your skills and experience in a fun and exciting work environment. Our champion candidates to fill this position should have the following. Required Skills Experience writing object-oriented code for PHP Experience writing code for a MVC web framework a plus Experience with HTML and CSS Experience with JavaScriptAJAX including common libraries and debugging tools Knowledge of web services a plus Experience with OCR is a big plus Cloud experience a plus, knowledge of Scripting and OS installation configuration. Excellent communication skills, self-starter and ability to work with a team Education Bachelor & degree in Computer Science or a related field 1+ years of experience Please email resume today. We are growing our team because of continuous growth of our company, so if you are a talented, hard-working individual who is willing to make an immediate result, apply today and be part of something big!</p>
                            <ul className="text-left mt-1">
                                <b>Key responsibility</b>
                                <li>Good Programming Knowledge in Codeigniter or Laravel PHP Framework</li>
                                <li>Good Programming Knowledge in PHP, MYSQL, AjJAX & Javascript, JQuery</li>
                                <li>Good understanding of XHTML/HTML, CSS & XML</li>
                                <li>Should be technically sound in OOPs Concepts</li>
                                <li>Preferred Knowledge in MVC Framework</li>
                                <li>Experience working with third-party APIs & web services</li>
                                <li>Strong database concepts and SQL queries</li>
                                <li>Hard Working And Growth-oriented</li>
                                <li>Able to work independently and Team</li>
                                <li>Excellent communication and analytical skills</li>
                                <li>Communicate effectively with client & project manager</li>
                                <li>Communicate effectively with client & project manager</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="career-section-collapsedata-inside mt-3">
                    <p>
                        <a class="btn" data-toggle="collapse" data-target="#collapseExample_React" aria-expanded="false" aria-controls="collapseExample">
                            React Native Developer
                            <a className="mydiv ml-3" style={{color:'white'}}>NEW</a>
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample_React">
                        <div class="card card-body">
                            <div className="row inside">
                                <div className="col-sm-4 pt-1">
                                    <h5>Exp : <b>1+ Year</b></h5>
                                </div>
                                <div className="col-sm-4 pt-1">
                                    <h5>Job Type : <b>Full Time</b></h5>
                                </div>
                                <div className="col-sm-4 pt-1">
                                    <h5>No. of Openings : <b>2</b></h5>
                                </div>
                            </div>
                            <p className="mt-2" id="php_text">Plan to carry out big mobile cross platform applications in next 2 years. We require highly skilled candidate specially in React Native + Redux framework and clear view of design layouts of web designing</p>
                            <ul className="text-left">
                                <b>Key responsibility</b>
                                <li>Deep knowledge of basic React Native components</li>
                                <li>Firm grasp of the JavaScript and TypeScript language (EcmaScript)</li>
                                <li>Good understanding of Object-Oriented concepts & Data Structures</li>
                                <li>Translating designs and wireframes into high-quality code</li>
                                <li>Building reusable components and libraries for future use</li>
                                <li>Comfortable in working with third-party dependencies and debugging dependency conflicts</li>
                                <li>Experience with popular workflows (such as Redux)</li>
                                <li>Familiarity with RESTful APIs</li>
                                <li>Familiarity with native build tools, like XCode, Gradle on Android Studio.</li>
                                <li>Work with native modules when required</li>
                                <li>Familiarity with code versioning tools such as Git & SVN</li>
                                <li>Build and deploy applications to iOS and Google Play stores.</li>
                                <b>Required Experience, Skills and Qualifications</b>
                                <li>Knowledge of computer programming, Proffered Javascript and Android development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="career-section-collapsedata-inside mt-3">
                    <p>
                        <a class="btn" data-toggle="collapse" data-target="#collapseExample_Flutter" aria-expanded="false" aria-controls="collapseExample">
                            Flutter Android Developer
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample_Flutter">
                        <div class="card card-body">
                            <div className="row inside">
                                <div className="col-sm-4 pt-1">
                                    <h5>Exp : <b>Fresher or Exp.</b></h5>
                                </div>
                                <div className="col-sm-4 pt-1">
                                    <h5>Job Type : <b>Full Time</b></h5>
                                </div>
                                <div className="col-sm-4 pt-1">
                                    <h5>No. of Openings : <b>3</b></h5>
                                </div>
                            </div>
                            <p className="mt-2" id="php_text">
                                We are looking for an Flutter Android Developer who possesses a passion for design and build the next generation of our mobile applications.
                            </p>
                            <ul class="text-left">
                                <b>Responsibilities and Duties</b>
                                <li>Design and build advanced mobile applications in Flutter cross-platform</li>
                                <li>Collaborate with cross-functional teams to define, design, and ship new features</li>
                                <b>Required Experience, Skills and Qualifications</b>
                                <li>Proven App development experience and Android skills development</li>
                                <li>Proven working experience with Flutter for Android and IOS app development</li>
                                <li>Experience working with remote data via REST and JSON</li>
                                <li>Experience with third-party libraries and APIs</li>
                                <b>Benefits</b>
                                <li>Yes, we will provide 3 months training of Flutter Android Development.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="career-section-apply mb-4">
                <h1>Apply Now</h1>
                <form>
                {error && <p style={{color:'red'}}> {error} </p>}
                <div className="row mt-2 text-left">
                    <div className="col-sm-6">
                        <label>Full Name</label>
                        <input type="text" 
                            name="fullname"
                            value={fullname}
                            class="form-control" 
                            placeholder="John" onChange={e => onInputChange(e) }
                            style={{fontWeight:'bold'}}
                        />
                        {formerror.fullname_err && <p className="error" style={{color: 'red'}}>{formerror.fullname_err}</p>}
                    </div>
                    <div class="col-sm-6">
                        <label>Email</label>
                        <input type="email"
                            name="email"
                            value={email}
                            class="form-control" 
                            placeholder="Example@gmail.com" onChange={e => onInputChange(e) }
                            style={{fontWeight:'bold'}}
                        />
                        {formerror.email_err && <p className="error" style={{color: 'red'}}>{formerror.email_err}</p>}
                    </div>
                </div>
                <div class="row mt-2 text-left">
                    <div class="col-sm-6">
                        <label>Phone No:</label>
                        <input type="text"
                            name="phone_no"
                            value={phone_no}
                            maxlength="10"
                            class="form-control" 
                            placeholder="000 000 0000" onChange={e => onInputChange(e) }
                            style={{fontWeight:'bold'}}
                        />
                        {formerror.phone_no_err && <p className="error" style={{color: 'red'}}>{formerror.phone_no_err}</p>}
                    </div>
                    <div class="col-sm-6">
                        <label>Resume</label>
                        <input type="file"
                            name="resume"
                            // accept=".pdf, .doc"
                            onChange={e=>{
                                set_new_pdf(e.target.files[0])
                            }}
                            class="form-control"
                        />
                        {formerror.resume_err && <p className="error" style={{color: 'red'}}>{formerror.resume_err}</p>}
                        <p className="error" style={{color: 'red'}}>{invalid_pdf}</p>
                    </div>
                </div>
                <div class="row mt-2 text-left">
                    <div class="col-sm-6">
                        <label>Apply For:</label>
                        <select class="form-control" name="apply_for" onChange={e => onInputChange(e) } style={{fontWeight:'bold'}}>
                            <option value="">---</option>
                            <option value="React Js Developer">React Js Developer</option>
                            <option value="Node Js Developer">Node Js Developer</option>
                            <option value="Angular Js Developer">Angular Js Developer</option>
                            <option value="PHP Laravel Developer">PHP Laravel Developer</option>
                            <option value="React Native Developer">React Native Developer</option>
                            <option value="Flutter Android Developer">Flutter Android Developer</option>
                            <option value="SEO Executive">SEO Executive</option>
                            <option value="Content Writer">Content Writer</option>
                            <option value="QA Engineer">QA Engineer</option>
                        </select>
                        {formerror.apply_for_err && <p className="error" style={{color: 'red'}}>{formerror.apply_for_err}</p>}
                    </div>

                    <div class="col-sm-6">
                        <label>Fresher / Experienced:</label>
                        <select class="form-control" name="fresh_experiencd" onChange={e => onInputChange(e) } style={{fontWeight:'bold'}}>
                            <option value="">---</option>
                            <option value="Fresher">Fresher</option>
                            <option value="Experienced">Experienced</option>
                        </select>
                        {formerror.fresh_experiencd_err && <p className="error" style={{color: 'red'}}>{formerror.fresh_experiencd_err}</p>}
                    </div>
                </div>
                <div class="row mt-2 text-left">
                    <div class="col-sm-12">
                        <label>About Your Skills:</label>
                        <textarea class="form-control" 
                            rows="4" 
                            cols="50"
                            name="about_your_skills"
                            value={about_your_skills}
                            style={{fontWeight:'bold'}} 
                            placeholder="About Your Skills"
                            onChange={e=> onInputChange(e)}
                        ></textarea>
                        {formerror.about_your_skills_err && <p className="error" style={{color: 'red'}}>{formerror.about_your_skills_err}</p>}
                    </div>
                </div>

                <br></br>
                {!auth  && <button type="button" class="btn btn-outline" id="btnbtn" style={{background:'#75dbb3'}} onClick={ e =>onhandlesubmit_user(e) }>Submit</button> }
                {auth && <button type="button" class="btn btn-lg btn-outline" style={{background:'#75dbb3'}} disabled >Please Wait...Please check your Mail box...</button>}
                </form>
            </div>


        </div>
    );
}
 
export default Career;