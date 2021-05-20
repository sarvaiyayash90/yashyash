import React,{useState} from 'react'
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

import axios from 'axios';

const User_Password_Change = () => {
  
    const[user,setuser]=useState({
        old_password :'',
        new_password :'',
        confirm_password :''
    })

    const {old_password,new_password,confirm_password} = user;

    const onInputChange = e => {
        setuser({ ...user, [e.target.name]: e.target.value });
    }; 

    const [auth,setauth]=useState(false);
    const [error,seterror]=useState('');

    const [formerror,setformerror]=useState({
        old_password_err : null,
        new_password_err : null,
        confirm_password_err : null
    });
 
    const onhandlesubmit_password = e =>{

        e.preventDefault();

        if(!old_password){
            setformerror({ old_password_err: 'Please Enter Old Password' });
            setTimeout(()=>{
                setformerror({ old_password_err: '' })
                },3000);
            return false;
        }else if(!new_password && !confirm_password ){
            setformerror({ new_password_err: 'Please Enter New Password',confirm_password_err: 'Please Enter Confirm Password' });
                setTimeout(()=>{
                    setformerror({ new_password_err: '',confirm_password_err:'Please' })
                },3000);
            return false;
        }else{
        
            if(new_password == confirm_password)
            {
                const data_pass ={
                    old_password : old_password,
                    new_password : new_password,
                    confirm_password : confirm_password
                }

                axios.put(`http://localhost:5000/admin_userdata/user_password_change/${localStorage.getItem('Token_Key')}`,data_pass)
                .then((res)=>{
                    setauth(true)
                    window.location.reload()
                    console.log("res",res)
                    // window.location.href="/#/User_List"
                }).catch((err)=>{
                    if (err.response && err.response.data) {
                        console.log(err.response.data.message) // some reason error message
                        seterror(err.response.data.message)
                        setTimeout(()=>{
                        seterror("")
                        window.location.reload()
                        },3000);
                    }
                })
            }else{
                setformerror({ confirm_password_err: 'New Password And Confirm Password Not Match Please check...!' });
                setTimeout(()=>{
                    setformerror({ confirm_password_err: '' })
                    window.location.reload()
                    },3000);
                return false;
            }
        }
    }

  return (
    <CCol xs="12" sm="12">
        <CCard>
            <CCardHeader>
                User Form
            </CCardHeader>
            {error && <span style={{color:'red',margin:'0',margin:'5px 0 0 20px'}}> {error} </span>}
            <CCardBody>
                <CForm action="" method="post" className="form-horizontal">
                    <CFormGroup>
                        <CLabel htmlFor="Password">Old Password</CLabel>
                        <CInput type="password"
                        name="old_password"
                        placeholder="**********" onChange={e => onInputChange(e) } />
                        
                        {formerror.old_password_err && <p className="error" style={{color: 'red'}}>{formerror.old_password_err}</p>}
                    </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="Password">New Password</CLabel>
                        <CInput type="password"
                        name="new_password"
                        placeholder="**********" onChange={e => onInputChange(e) } />
                        {formerror.new_password_err && <p className="error" style={{color: 'red'}}>{formerror.new_password_err}</p>}
                    </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="Password">Confirm Password</CLabel>
                        <CInput type="password"
                        name="confirm_password"
                        placeholder="**********" onChange={e => onInputChange(e) } />
                        {formerror.confirm_password_err && <p className="error" style={{color: 'red'}}>{formerror.confirm_password_err}</p>}
                    </CFormGroup>
                </CForm>
            </CCardBody>
            <CCardFooter>
            { !auth && <CButton type="submit" size="sm" color="primary"  onClick={ e =>onhandlesubmit_password(e) }><CIcon name="cil-scrubber" /> Submit</CButton> }
                
            { auth && <CButton color="success" variant="outline" className="px-4" disabled > Please Wait Your Password Update ..!</CButton> }
                    {/* {!auth && <CButton CButton type="submit" size="sm" color="primary"  onClick={ e =>onhandlesubmit_user(e) }><CIcon name="cil-scrubber" /> Submit</CButton> } */}
                    {/* { auth && <CButton color="success" variant="outline" className="px-4" disabled >Please Wait Your Password Update</CButton> } */}
                {/* <CButton CButton type="submit" size="sm" color="primary"  onClick={ e =>onhandlesubmit_user(e) }><CIcon name="cil-scrubber" /> Submit</CButton> */}
                {' '} 
                {/* <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton> */}
            </CCardFooter>
        </CCard>
    </CCol>
  )
}

export default User_Password_Change
