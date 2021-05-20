import React,{useState,useEffect} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import axios from 'axios';

const User_Register = () => {
  
    const[user,setuser]=useState({
        username : '',
        fullname : '',
        email : '',
        contact_no : '',
        password :'',
    })

    const [form_ID,setform_ID]=useState([]);

    const {username,fullname,email,contact_no,password} = user;

    const onInputChange = e => {
        setuser({ ...user, [e.target.name]: e.target.value });
    }; 

    const onInputChange_form = (e) =>{
        setform_ID({ ...form_ID , [ e.target.name ] : e.target.value });
        console.log("sosss_id",form_ID)
    }

    const reader = new FileReader();

    const[img,setimg]=useState({
        profile_img:null,
        invalidImage:null
    })

    const [auth,setauth]=useState(false);
    const [error,seterror]=useState('');

    const [formerror,setformerror]=useState({
        username_err : null,
        fullname_err : null,
        email_err : null,
        contact_no_err : null,
        password_err :null
    });

    const [form_data, setform] = useState([]);

    useEffect(() => {
        load_student_data();
    },[])
    
    // show user data
    const load_student_data = () => {
        axios.get("http://localhost:5000/admin_permissiondata/permission_check_user_show")
        .then((res)=>{
            setform(res.data);
            // console.log("data",res.data);
        }).catch((err)=>{
            console.log("err",err);
        })

    }

    //const {profile_img,invalidImage,newprofile} = profile;
 
    const onInputChange_user_Profile = e => {
        
        const imageFile = e.target.files[0];
        if (!imageFile) {
            setimg({ invalidImage: 'Please select image.' });
            return false;
        }
        if (!imageFile.name.match(/\.(jpg|jpeg|png)$/)) {
            setimg({ invalidImage: 'Please select valid image.' });
            return false;
        }
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                setimg({ profile_img: imageFile, invalidImage: null,handleResponse: null });
                return true;
            };
            img.onerror = () => {
                setimg({ invalidImage: 'Invalid image content.' });
                return false;
            };
            debugger
            img.src = e.target.result;
        };
        reader.readAsDataURL(imageFile);
    };

  

    const onhandlesubmit_user = e =>{

        // form_permission_user_yes_no(id)

        e.preventDefault();
        
        const { profile_img } = img;

        if (!profile_img) {
            setimg({
                handleResponse: {
                    isSuccess: false,
                    message: "Please select image Like JPG, JPEG And PNG."
                }
            });
            return false;
        }else if(!username && !fullname && !email && !contact_no && !password){
            setformerror({  username_err: 'Please Enter Username',
            fullname_err: 'Please Enter fullname',
            email_err: 'Please Enter email',
            contact_no_err: 'Please Enter contact_no',
            password_err: 'Please Enter password'

            });
            setTimeout(()=>{setformerror({ 
                username_err: '',
                fullname_err: '',
                email_err: '',
                contact_no_err : '',
                password_err : '',
            })},3000);

        }
        else if(!username){
            setformerror({ username_err: 'Please Enter username' });
            setTimeout(()=>{
                setformerror({ username_err: '' })
                },3000);
            return false;
        }else if(!fullname){
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
        }else if(!contact_no){
            setformerror({ contact_no_err: 'Please Enter contact_no' });
                setTimeout(()=>{
                    setformerror({ contact_no_err: '' })
                  },3000);
                return false;
        }else if(!password){
            setformerror({ password_err: 'Please Enter password' });
                setTimeout(()=>{
                    setformerror({ password_err: '' })
                  },3000);
                return false;
        }
        else{
            setimg({
                handleResponse: {
                    isSuccess: false,
                    message: ""
                }
            });
            const bodyFormData = new FormData();
            bodyFormData.append("username",username);
            bodyFormData.append("fullname",fullname);
            bodyFormData.append("email",email);
            bodyFormData.append("contact_no",contact_no);
            bodyFormData.append("password",password);
            bodyFormData.append("profile_img",img.profile_img);
            bodyFormData.append("form_ID",[JSON.stringify(form_ID)]);
            
            axios.post("http://localhost:5000/admin_userdata/user_register",bodyFormData)
            .then((res)=>{
                setauth(true)
                window.location.href="/#/user_list"
            }).catch((err)=>{
                window.location.reload()
                if (err.response && err.response.data) {
                    //console.log(err.response.data.message) // some reason error message
                    seterror(err.response.data.message)
                    setTimeout(()=>{
                      seterror("")
                    },5000);
                }
                //window.location.href="/Create_data"
                //alert("Student email already exits Please Enter Unique Enter email");
                //console.log("error",err)
            })
        }
    }

  return (
    <CRow>
    <CCol xs="12" sm="6">
        <CCard>
            <CCardHeader>
                User Form
            </CCardHeader>
            <CCardBody>
                <CForm action="" method="post" className="form-horizontal">
                    <CFormGroup>
                        <CLabel htmlFor="username">User Name</CLabel>
                        <CInput type="text"
                            name="username"
                            value={username}
                            placeholder="Enter Username" onChange={e => onInputChange(e) } />
                            {error && <p style={{color:'red'}}> {error} </p>}
                            {formerror.username_err && <p className="error" style={{color: 'red'}}>{formerror.username_err}</p>}
                    </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="fullname">Full Name</CLabel>
                        <CInput type="text"
                        name="fullname"
                        value={fullname}
                        placeholder="Enter User Full Name" onChange={e => onInputChange(e) }/>
                        {formerror.fullname_err && <p className="error" style={{color: 'red'}}>{formerror.fullname_err}</p>}

                    </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="email">Email</CLabel>
                        <CInput type="email"
                        name="email"
                        value={email}
                        placeholder="example@mail.com" onChange={e => onInputChange(e) } />
                        {formerror.email_err && <p className="error" style={{color: 'red'}}>{formerror.email_err}</p>}
                    </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="contact_no">Contact No.</CLabel>
                        <CInput type="text"
                        name="contact_no"
                        value={contact_no}
                        placeholder="+91 0000 000 000" onChange={e => onInputChange(e) } />
                        {formerror.contact_no_err && <p className="error" style={{color: 'red'}}>{formerror.contact_no_err}</p>}
                    </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="Profile">Profile</CLabel>
                        <CInput type="file"
                        name="profile_img"
                        accept=".png, .jpg, .jpeg"
                        //onChange={e => setuser(e.target.files[0])  } 
                        onChange={e => onInputChange_user_Profile(e)}
                        />

                        {img.invalidImage && <p className="error" style={{color: 'red'}}>{img.invalidImage}</p>}
                        {img.handleResponse && <p style={{color: 'red'}} className={img.handleResponse.isSuccess ? "success" : "error"}>{img.handleResponse.message}</p>}
                    
                    </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="Password">Password</CLabel>
                        <CInput type="password"
                        name="password"
                        value={password}
                        placeholder="**********" onChange={e => onInputChange(e) } />
                        {formerror.password_err && <p className="error" style={{color: 'red'}}>{formerror.password_err}</p>}
                    </CFormGroup>
                </CForm>
            </CCardBody>
            <CCardFooter>
                {!auth && <CButton CButton type="submit" size="sm" color="primary"  onClick={ e =>onhandlesubmit_user(e) }><CIcon name="cil-scrubber" /> Submit</CButton> }
                { auth && <CButton color="success" variant="outline" className="px-4" disabled >Please Wait save user data</CButton> }    
                {/* <CButton CButton type="submit" size="sm" color="primary"  onClick={ e =>onhandlesubmit_user(e) }><CIcon name="cil-scrubber" /> Submit</CButton> */}
                {' '} 
                {/* <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton> */}
            </CCardFooter>
        </CCard>
    </CCol>
    <CCol xs="12" sm="6">
        <CCard>
            <CCardHeader>User Permission</CCardHeader>
            <CCardBody>
                <CForm action="" method="post" className="form-horizontal">
                    {/* <CFormGroup>
                        {form_data.map((form, index) => (
                            <><CSwitch className={'mx-1'} 
                                shape={'pill'}
                                name='chk_status'
                                color={'success'} 
                                variant={'opposite'}
                                labelOn={'\u2713'} 
                                labelOff={'\u2715'}
                                onClick={() => {form_permission_user_yes_no(form.form_ID)  }}
                                // defaultChecked
                                />
                                <CLabel htmlFor="form_name" style={{margin:'0 0 0 5px'}}>{form.form_name}</CLabel>
                            <hr></hr>
                            </>
                        ))}
                    </CFormGroup> */}
                    
                    <CFormGroup row>
                    {form_data.map((form, index) => (
                        <>
                        <CCol xs="12" md={9}>
                            <CLabel>{form.form_name}</CLabel>
                            <hr></hr>
                        </CCol>
                        <CCol xs="12" md={3}>
                            <CSwitch 
                            value={form._id}
                            name={form.form_name}
                            className={'mx-1'} 
                            shape={'pill'} 
                            color={'primary'} 
                            labelOn={'\u2713'} 
                            labelOff={'\u2715'}
                            onClick={(e) => {onInputChange_form(e)  }}
                        /><hr></hr>
                        </CCol>
                        </>
                        ))}
                    </CFormGroup>
                    
                </CForm>
            </CCardBody>
            {/* <CCardFooter>
                {!auth && <CButton CButton type="submit" size="sm" color="primary"  onClick={ e =>onhandlesubmit_user(e) }><CIcon name="cil-scrubber" /> Submit</CButton> }
                { auth && <CButton color="success" variant="outline" className="px-4" disabled >Please Wait save user data</CButton> }    
                <CButton CButton type="submit" size="sm" color="primary"  onClick={ e =>onhandlesubmit_user(e) }><CIcon name="cil-scrubber" /> Submit</CButton>
                {' '} 
                <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter> */}
        </CCard>
    </CCol>
    </CRow>
  )
}

export default User_Register
