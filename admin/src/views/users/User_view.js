import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow,CCardFooter,CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'


const User_view = ({match}) => {
  const [users, setUsers] = useState({})
  useEffect(() => {
    load_user_data();
  }, [])

  const load_user_data = async ()  =>{
      await axios.get('http://localhost:5000/admin_userdata/user_view/' + match.params.id).then(resu=>{
        //setUsers(resu.data[0])
        setUsers(resu.data)
      }).catch(err=>{
        console.log(err);
      })
  }

  const delete_user = () =>{
    axios.put(`http://localhost:5000/admin_userdata/user_delete/${match.params.id}`)
    .then((res)=>{  
        Swal.fire({
          position: 'top-bottom',
          icon: 'success',
          title: 'Item has been deleted Successfully...',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        })
        window.location.href="/#/User_List"
    }).catch((err)=>{

    })
  }

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            User id: {match.params.id}
          </CCardHeader>
          {/* <CImg src={'uploads/'+users.profile_img}
           className="rounded mx-auto d-block w-100"
          /> */}
          <center>
              <img classname="mx-auto" src={'/uploads/User_img/' + users.profile_img} style={{ width: '200px', height: '200px', borderRadius: '200px',border: '10px double #007bff' }} />
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
                   <td>Fullname</td><td>{users.fullname}</td>
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
            <CButton size="sm" color="danger"  onClick={ () =>{ if (window.confirm('Are you sure you wish to delete this item?')) delete_user() }}><CIcon name="cil-scrubber" /> Delete</CButton>
            {' '}||{' '}                         
            <CButton size="sm" color="primary" to={`/user_edit/${users._id}`}><CIcon name="cil-scrubber" /> Edit</CButton>
            {/* <CHeaderNavLink to={`/user_edit/${users.useruser_ID}`}>EDIT</CHeaderNavLink> */}
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default User_view
