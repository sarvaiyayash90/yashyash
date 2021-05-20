import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow,CCardFooter,CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const User_profile = () => {
  
  const [users, setUsers] = useState({})

  useEffect(() => {
    load_user_data();
  }, [])

  const load_user_data = async ()  =>{

      await axios.get('http://localhost:5000/admin_userdata/user_profile',{params:
          {   
            user_id:localStorage.getItem('Token_Key')
          }
      }).then(resu=>{
        //setUsers(resu.data[0])
        setUsers(resu.data)
      }).catch(err=>{
        console.log(err);
      })
  }

  // const user = users.find( user => user._id === match.params.id)
  // const userDetails = users ? Object.entries(users) : 
  //   [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            User id: {localStorage.getItem('Token_Key')}
          </CCardHeader>
          {/* <CImg src={'uploads/'+users.profile_img}
           className="rounded mx-auto d-block w-100"
          /> */}
          <center>
              <img className="mx-auto" src={'/uploads/User_img/' + users.profile_img} style={{ width: '200px', height: '200px', borderRadius: '200px',border: '10px double #007bff' }} />
          </center>          
          {/* <CCardHeader src={'public/profiles/'+users.selectedFile} ></CCardHeader> */}
          {/* <img width="80" height="80" src={'/profiles/'+users.selectedFile}/> */}
          <CCardBody>
               <table className="table table-striped table-hover">
                <tbody>
                 <tr>
                   <td>Name</td><td>{users.username}</td>
                 </tr>
                 <tr>
                   <td>Mobile</td><td>{users.fullname}</td>
                 </tr>
                 <tr>
                   <td>Email</td><td>{users.email}</td>
                 </tr>
                 <tr>
                   <td>contact_no</td><td>{users.contact_no}</td>
                 </tr>
                 <tr>
                   <td>password</td><td>{users.password}</td>
                 </tr>
                </tbody>
              </table>
          </CCardBody>
          <CCardFooter>
            <CButton size="sm" color="primary" to={`/user_profile_edit`}><CIcon name="cil-scrubber" /> Edit</CButton>
            {` || `}
            <CButton size="sm" color="warning" to={`/user_password_change`}><CIcon name="cil-scrubber" /> Change Password</CButton> 
            {/* <CHeaderNavLink to={`/User_Edit/${users.user_ID}`}>EDIT</CHeaderNavLink> */}
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default User_profile
