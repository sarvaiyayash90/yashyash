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

import axios from 'axios';

axios.defaults.withCredentials = true

const Login = () => {

  const[admin,setAdmin]=useState({
    username:'',
    password:''
  })

  const [passwordShown, setPasswordShown] = useState(false);
  const [eyeShown, seteyeShown] = useState('');
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    if(true === eyeShown){
      seteyeShown(false)
    }else{
      seteyeShown(true)
    }
  };

  const {username,password} = admin;

  const onInputChange = e =>{
    setAdmin({...admin,[e.target.name]:e.target.value});
  }

  const [auth,setauth]=useState(false);
  const [error,seterror]=useState('');

  const handleKeypress = e => {
    if (e.key === 'Enter' || e.key === 'NumpadEnter') 
    {
      onhandlesubmit(e);
    }
  };

  const onhandlesubmit = e =>{
    e.preventDefault();

    const bodyFormData ={
      username : username,
      password : password
    }
    
    console.log("data",bodyFormData);

    axios.post('/admin_logindata/admin_login',bodyFormData)
      .then((res)=>{
          setauth(true)
          window.location.href="/adminpanel"
          if(res.data.auth_admin == true)
          {
            localStorage.setItem("Auth_check",res.data.Auth_check)
            // localStorage.setItem("Token_Key",res.data.session)
          }
          else
          {
            // localStorage.setItem("Token_Key",res.data.session)
            // localStorage.setItem("Auth_check",res.data.Auth_check)
            // localStorage.setItem("chk_user",res.data.chk_user)
          }
      }).catch((err)=>{
          if (err.response && err.response.data) {
            console.log(err.response.data.message) // some reason error message
            seterror(err.response.data.message)
            setTimeout(()=>{
              seterror("")
              window.location.href="/adminpanel"
            },2000);
          }
          // seterror("Incorrect Username and/or Password!")
          // //seterror(err.message)
          // setTimeout(()=>{
          //   seterror("")
          //   window.location.href="/login"
          // },2000);
      })
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
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    {error && <p style={{color:'red'}}> {error} </p>}
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" 
                        placeholder="Username" 
                        autoComplete="username" 
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e) }
                        onKeyDown={handleKeypress}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          {/* <CIcon name="cil-lock-locked" /> */}
                          {!eyeShown && <i className="far fa-eye-slash" onClick={togglePasswordVisiblity}></i> } 
                          { eyeShown && <i className="far fa-eye" onClick={togglePasswordVisiblity}></i> }
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type={ passwordShown ? "text" : "password"}
                        placeholder="Password" 
                        autoComplete="current-password" 
                        name="password"
                        value={password}
                        onChange={e => onInputChange(e) }
                        onKeyDown={handleKeypress}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                      {/* {!eyeShown && <i className="far fa-eye-slash" onClick={togglePasswordVisiblity}></i> } 
                      { eyeShown && <i className="far fa-eye" onClick={togglePasswordVisiblity}></i> }
                      {"  "}  */}

                      {!auth && <CButton color="primary" className="px-4" onClick={ e =>onhandlesubmit(e) } >Login</CButton> }
                      { auth && <CButton color="success" variant="outline" className="px-4" onClick={ e =>onhandlesubmit(e) } disabled >Please Wait Login</CButton> }
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <Link to="/forgot_password"><CButton color="link" style={{textDecoration:'none'}} className="px-0">Forgot password?</CButton></Link>
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
