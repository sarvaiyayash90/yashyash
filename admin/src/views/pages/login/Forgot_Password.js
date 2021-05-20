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

const Forgot_Password = () => {

  const[admin,setAdmin]=useState({
    email:'',
  })

  const {email} = admin;

  const onInputChange = e =>{
    setAdmin({email:e.target.value});
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
      email : email
    }

    // console.log("data",bodyFormData);

    axios.post('http://localhost:5000/admin_logindata/forgot_password',bodyFormData)
      .then((res)=>{
            setauth(true)
            // alert(res.data.message)
            seterror(res.data.message)
            setTimeout(()=>{
              seterror("")
              window.location.reload()
              // window.location.href="/#/forgot_password"
            },3000);
            //window.location.href="/#/forgot_password"
            // window.location.reload()
      }).catch((err)=>{
          if (err.response && err.response.data) {
            // console.log(err.response.data.message) // some reason error message
            seterror(err.response.data.message)
            setTimeout(()=>{
              seterror("")
              window.location.href="/#/forgot_password"
            },2000);
          }
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
                    <h1>Forgot password</h1>
                    <p className="text-muted">Sign In to your account</p>
                    {error && <p style={{color:'red'}}> {error} </p>}
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" 
                        placeholder="Example@gmail.com" 
                        autoComplete="email" 
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e) }
                        onKeyDown={handleKeypress}
                      />
                    </CInputGroup>
                    {/* <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
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
                    </CInputGroup> */}
                    <CRow>
                      <CCol xs="10" className="text-left">
                        {!auth && <CButton color="primary" className="px-4" onClick={ e =>onhandlesubmit(e) } >Submit</CButton> }
                        { auth && <CButton color="success" variant="outline" className="px-4" disabled >Please Wait Your Email Is verifiy...</CButton> }
                      </CCol>
                      <CCol xs="2" className="text-right">
                        <Link to="/login"><CButton color="link" style={{textDecoration:'none'}} className="px-0">SignIn</CButton></Link>
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

export default Forgot_Password
