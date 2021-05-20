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

import { useParams } from 'react-router-dom';

import axios from 'axios';

const User_Edit = () => {
  
    const { id } = useParams();

    const[user,setuser]=useState({
        username : '',
        fullname : '',
        email : '',
        contact_no : '',
        password :'',
        profile_img:null
    })

    const {username,fullname,email,contact_no,password,profile_img} = user;

    const [error,seterror]=useState(''); // show error messages 
    
    const onInputChange = e => {
        setuser({ ...user, [e.target.name]: e.target.value });
    }; 

    const [newprofile, setfiledata] = useState(null); // profile set new 
    const [invalidImage, setinvalidImage] = useState(null); // error messages show

    const [form_data, setform] = useState([]); // user permission show form 
    const [form_d, setform_d] = useState([]); // user show form 


    // user perission form insert in database
    const onInputChange_form = (id) =>{
      
        // console.log("id",id);

        const params_data = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        // console.log("user_id",params_data);

        const bodyFormData ={
            form_ID : id,
            user_ID : params_data
        }
        // console.log("data",bodyFormData);
        axios.post("http://localhost:5000/admin_permissiondata/user_permission_form_insert",bodyFormData)
        .then((res)=>{
            console.log("res",res);
            window.location.reload()
        }).catch((err)=>{
            console.log("error",err)
        })
    }

    useEffect(() => {
        load_user_data();
        load_permission_form_data();
        load_form_data();
    }, [])

    // show user data
    const load_user_data = async ()  =>{
        await axios.get('http://localhost:5000/admin_userdata/user_view/'+id).then(resu=>{
            setuser(resu.data)
        }).catch(err=>{
            console.log(err);
        })
    }

    // show user permission form data
    const load_permission_form_data = async () => {
        await axios.get("http://localhost:5000/admin_permissiondata/permission_user_edit_permission_check/"+id)
        .then((res)=>{
            setform(res.data);
            // console.log("data_permission",res.data);
        }).catch((err)=>{
            console.log("err",err);
        })
    }

     // show only form
     const load_form_data = async () => {
        await axios.get("http://localhost:5000/admin_permissiondata/permission_check_user_show/")
        .then((res)=>{
            setform_d(res.data);
            // console.log("data_form",res.data);
        }).catch((err)=>{
            console.log("err",err);
        })
    }

    // form update status
    const onInputChange_form_active_to_inactive = async id =>{
        const params_data = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        await axios.put(`http://localhost:5000/admin_permissiondata/form_active_to_in_active`,{
            params:
            {
                user_id:params_data,
                f_id:id
            }
        }).then((res)=>{
           load_user_data();
        }).catch((err)=>{
          console.log("err",err);
        })
    }
   
    let form_data_store = form_d.filter((data)=>{
        return form_data.find((data_new)=> { 
            if(data_new.form_id === data._id && data_new.status === "Active"){
                data.status = "Active"
                return data
            }
        })
    })

    console.log("sasas_form_Store",form_data_store)

    const onhandlesubmit_user_new = e =>{

        e.preventDefault();
        const bodyFormData = new FormData();
        bodyFormData.append("username",username);
        bodyFormData.append("fullname",fullname);
        bodyFormData.append("email",email);
        bodyFormData.append("contact_no",contact_no);
        bodyFormData.append("password",password);
        if (newprofile != null) {
            if (!newprofile.name.match(/\.(jpg|jpeg|png)$/)) {
                setinvalidImage('Please select valid image.');
                return false;
            }
            setinvalidImage('');    
            bodyFormData.append("profile_img", newprofile);
        }
        
        axios.put(`http://localhost:5000/admin_userdata/user_update/${id}`,bodyFormData)
        .then((res)=>{
            //alert(res.data.message);
            window.location.href="/#/user_list"
        }).catch((err)=>{
            
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

  return (
    <CRow>
    <CCol xs="12" sm="6">
        <CCard>
            <CCardHeader>
                User Form
            </CCardHeader>
            <CCardBody>
                <center>
                    <img classname="mx-auto" src={'/uploads/User_img/' + user.profile_img} style={{ width: '200px', height: '200px', borderRadius: '200px',border: '10px double #007bff' }} />
                </center>
                <CForm action="" method="post" className="form-horizontal">
                    <CFormGroup>
                        <CLabel htmlFor="username">User Name</CLabel>
                        <CInput type="text"
                            name="username"
                            value={username}
                            placeholder="Enter Username" onChange={e => onInputChange(e) } />
                            {error && <p style={{color:'red'}}> {error} </p>}
                    </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="fullname">Full Name</CLabel>
                        <CInput type="text"
                        name="fullname"
                        value={fullname}
                        placeholder="Enter User Full Name" onChange={e => onInputChange(e) }/>
            
                    </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="email">Email</CLabel>
                        <CInput type="email"
                        name="email"
                        value={email}
                        placeholder="example@mail.com" onChange={e => onInputChange(e) } />
                        
                    </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="contact_no">Contact No.</CLabel>
                        <CInput type="text"
                        name="contact_no"
                        value={contact_no}
                        placeholder="+91 0000 000 000" onChange={e => onInputChange(e) } />
                    </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="Profile">Profile</CLabel>
                        <CInput type="file"
                        name="profile_img"
                        accept=".png, .jpg, .jpeg"
                        //onChange={e => setuser(e.target.files[0])  } 
                        onChange={e => {
                            setfiledata(e.target.files[0])
                        }}
                        />
                        <p className="error" style={{color: 'red'}}>{invalidImage}</p>
                    </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="Password">Password</CLabel>
                        <CInput type="password"
                        name="password"
                        value={password}
                        placeholder="**********" onChange={e => onInputChange(e) } />
                    </CFormGroup>
                </CForm>
            </CCardBody>
            <CCardFooter>
                <CButton CButton type="submit" size="sm" color="primary"  onClick={ e =>onhandlesubmit_user_new(e) }><CIcon name="cil-scrubber" /> Submit</CButton>
            </CCardFooter>
        </CCard>
    </CCol>
    <CCol xs="12" sm="6">
    <CCard>
        <CCardHeader>User Permission</CCardHeader>
        <CCardBody>
            <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                {form_d.map((form, index) => (
                    <>
                    <CCol xs="12" md={8} style={{marginTop:'12px',marginLeft:'15px'}}>
                        <CLabel>{form.form_name}</CLabel>
                        {/* <hr></hr> */}
                    </CCol>
                    <CCol xs="12" md={3} style={{marginTop:'12px'}}>
                        
                    { form.status == "Active" ?  <CSwitch 
                        value={form._id}
                        name={form.form_name}
                        className={'mx-1'} 
                        shape={'pill'} 
                        color={'primary'}
                        labelOn={'\u2713'} 
                        labelOff={'\u2715'}
                        onClick={() => { onInputChange_form_active_to_inactive(form._id); onInputChange_form(form._id) }}
                        defaultChecked
                    /> : 
                    <CSwitch 
                        value={form._id}
                        name={form.form_name}
                        className={'mx-1'} 
                        shape={'pill'} 
                        color={'primary'} 
                        labelOn={'\u2713'} 
                        labelOff={'\u2715'}
                        onClick={() => { onInputChange_form_active_to_inactive(form._id); onInputChange_form(form._id) }}
                    /> 
                    }
                    {/* <hr></hr> */}
                    </CCol>
                    </>
                    ))}
                </CFormGroup>
            </CForm>
        </CCardBody>
    </CCard>
</CCol>
</CRow>
  )
}

export default User_Edit
