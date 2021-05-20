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

} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { useParams,useHistory } from 'react-router-dom';

import axios from 'axios';

const User_profile_Edit = () => {
  
    const history = useHistory()

    // const { id } = useParams();
    // console.log("id", id);

    const[user,setuser]=useState({
        username : '',
        fullname : '',
        email : '',
        contact_no : '',
        password :'',
        profile_img:null
    })

    const {username,fullname,email,contact_no,password,profile_img} = user;

    const [error,seterror]=useState('');
    
    const onInputChange = e => {
        setuser({ ...user, [e.target.name]: e.target.value });
    }; 

    const [newprofile, setfiledata] = useState(null);
    const [invalidImage, setinvalidImage] = useState(null);
    const [auth,setauth]=useState(false);
    
    useEffect(() => {
        load_user_data();
    }, [])

    const load_user_data = async ()  =>{
        await axios.get('http://localhost:5000/admin_userdata/user_profile_edit/',{params:
        {   
            user_id:localStorage.getItem('Token_Key')
        }
    }).then(resu=>{
            setuser(resu.data)
        }).catch(err=>{
            console.log(err);
        })
    }

    //const {profile_img,invalidImage,newprofile} = profile;

    const onhandlesubmit_user_new = e =>{

            e.preventDefault();
            const bodyFormData = new FormData();
            bodyFormData.append("username",username);
            bodyFormData.append("fullname",fullname);
            bodyFormData.append("email",email);
            bodyFormData.append("contact_no",contact_no);
            if (newprofile != null) {
                if (!newprofile.name.match(/\.(jpg|jpeg|png)$/)) {
                    setinvalidImage('Please select valid image.');
                    return false;
                }
                setinvalidImage('');
                bodyFormData.append("profile_img", newprofile);
            }
            
            axios.put(`http://localhost:5000/admin_userdata/user_profile_update/${localStorage.getItem('Token_Key')}`,bodyFormData)
            .then((res)=>{
                console.log("res",res)
                setauth(true)
                //history.push(`/user_profile`)
                window.location.href="/#/user_profile"
            }).catch((err)=>{
                
                if (err.response && err.response.data) {
                    //console.log(err.response.data.message) // some reason error message
                    seterror(err.response.data.message)
                    setTimeout(()=>{
                      seterror("")
                    },5000);
                }
            })
        
    }

  return (
    <CCol xs="12" sm="12">
        <CCard>
            <CCardHeader>
                Profile
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
                </CForm>
            </CCardBody>
            <CCardFooter>
                { !auth && <CButton type="submit" size="sm" color="primary"  onClick={ e =>onhandlesubmit_user_new(e) }><CIcon name="cil-scrubber" /> Save</CButton> }
                { auth && <CButton color="success" variant="outline" className="px-4" disabled >Please Wait Save Your Data</CButton> }
                    
                {/* {' '}
                <CButton size="sm" color="warning" to={`/password_change`}><CIcon name="cil-scrubber" /> Change Password</CButton> */}
            </CCardFooter>
        </CCard>
    </CCol>
  )
}

export default User_profile_Edit
