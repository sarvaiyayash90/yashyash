import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Swal from 'sweetalert2'
import axios from 'axios';
axios.defaults.withCredentials = true
const Login = () => {

    const[user,setuser]=useState({
        new_password :'',
        confirm_password :''
    })

    const {new_password,confirm_password} = user;

    const onInputChange = e => {
        setuser({ ...user, [e.target.name]: e.target.value });
    }; 

    const [auth,setauth]=useState(false);
    const [error,seterror]=useState('');
    
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown_new, setPasswordShown_new] = useState(false);
    
    const [eyeShown, seteyeShown] = useState('');
    const [eyeShown_new, seteyeShown_new] = useState('');
    
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
        if(true === eyeShown){
          seteyeShown(false)
        }else{
          seteyeShown(true)
        }
    };

    const togglePasswordVisiblity_new = () => {
        setPasswordShown_new(passwordShown_new ? false : true);
        if(true === eyeShown_new){
            seteyeShown_new(false)
        }else{
            seteyeShown_new(true)
        }
    };

    const handleKeypress = e => {
        if (e.key === 'Enter' || e.key === 'NumpadEnter') 
        {
            onhandlesubmit_password(e);
        }
      };

    const [formerror,setformerror]=useState({
        new_password_err : null,
        confirm_password_err : null
    });

    
 
    const onhandlesubmit_password = e =>{

        e.preventDefault();

        if(!new_password && !confirm_password ){
            setformerror({ 
            new_password_err: 'Please Enter New Password',
            confirm_password_err: 'Please Enter Confirm Password' });
                setTimeout(()=>{
                    setformerror({ new_password_err: '',confirm_password_err:'' })
                },3000);
            return false;
        }else{
        
            if(new_password == confirm_password)
            {   

                const data_pass ={
                    new_password : new_password,
                    confirm_password : confirm_password
                }
                // const params = window.location.pathname.split("/").pop()
                // console.log("sasasasas",params);

                const params_data = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
                axios.put(`http://localhost:5000/admin_logindata/update_password/${params_data}`,data_pass)
                .then((res)=>{
                    setauth(true)
                    // window.location.reload()
                    console.log("res",res)
                    window.location.href="/#/login"
                    Swal.fire({
                      position: 'top-bottom',
                      icon: 'success',
                      title: 'Password Successfully Change...',
                      showConfirmButton: false,
                      timer: 2000,
                      timerProgressBar: true,
                    })
                }).catch((err)=>{
                    if (err.response && err.response.data) {
                        console.log(err.response.data.message) // some reason error message
                          seterror(err.response.data.message)
                          setTimeout(()=>{
                          seterror("")
                          window.location.href=`/#/update_password/${params_data}`
                        },3000);
                    }
                })
            }else{
                const params_data = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
                
                setformerror({ confirm_password_err: 'New Password And Confirm Password Not Match Please check...!' });
                setTimeout(()=>{
                    setformerror({ confirm_password_err: '' })
                      window.location.reload()
                      window.location.href=`/#/update_password/${params_data}`
                    },3000);
                return false;
            }
        }
    }
    
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>New Password</h1>
                    <p className="text-muted">Sign In to your account</p>
                    {error && <p style={{color:'red'}}> {error} </p>}
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          {/* <CIcon name="cil-lock-locked" /> */}
                          {!eyeShown && <i className="far fa-eye-slash" onClick={togglePasswordVisiblity}></i> } 
                          { eyeShown && <i className="far fa-eye" onClick={togglePasswordVisiblity}></i> }
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type={ passwordShown ? "text" : "password"}
                        placeholder="New Password" 
                        autoComplete="current-password" 
                        name="new_password"
                        value={new_password}
                        onChange={e => onInputChange(e) }
                        onKeyDown={handleKeypress}
                      />
                    </CInputGroup>
                    {formerror.new_password_err && <p className="error" style={{color: 'red'}}>{formerror.new_password_err}</p>}
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          {/* <CIcon name="cil-lock-locked" /> */}
                          {!eyeShown_new && <i className="far fa-eye-slash" onClick={togglePasswordVisiblity_new}></i> } 
                          { eyeShown_new && <i className="far fa-eye" onClick={togglePasswordVisiblity_new}></i> }
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type={ passwordShown_new ? "text" : "password"}
                        placeholder="Confirm Password" 
                        autoComplete="current-password" 
                        name="confirm_password"
                        value={confirm_password}
                        onChange={e => onInputChange(e) }
                        onKeyDown={handleKeypress}
                      />
                    </CInputGroup>
                    {formerror.confirm_password_err && <p className="error" style={{color: 'red'}}>{formerror.confirm_password_err}</p>}
                    <CRow>
                      <CCol xs="8">
                      {!auth && <CButton color="primary" className="px-4" onClick={ e =>onhandlesubmit_password(e) } >Login</CButton> }
                      { auth && <CButton color="success" variant="outline" className="px-4" onClick={ e =>onhandlesubmit_password(e) } disabled >Please Wait Your Password Update...</CButton> }
                      </CCol>
                      <CCol xs="4" className="text-right">
                        <Link to="/login"><CButton color="link" style={{textDecoration:'none'}} className="px-0">Sign In</CButton></Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
