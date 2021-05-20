import React, { useState, useEffect } from 'react'
// import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CDataTable,
  CButton,
  CSwitch
} from '@coreui/react'

// import CIcon from '@coreui/icons-react'

// import usersData from './UsersData'

import Swal from 'sweetalert2'

// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

import axios from 'axios';
import { saveAs } from 'file-saver';

const User_List = () => {

  // const Toast = Swal.mixin({
  //   toast: true,
  //   position: 'top-end',
  //   showConfirmButton: false,
  //   timer: 1500,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.addEventListener('mouseenter', Swal.stopTimer)
  //     toast.addEventListener('mouseleave', Swal.resumeTimer)
  //   }
  // })
  // Toast.fire({
  //   icon: 'success',
  //   title: 'Item has been deleted Successfully..!'
  // })

  // const history = useHistory()

  // const [details, setDetails] = useState([])

  // const toggleDetails = (index) => {
  //   const position = details.indexOf(index)
  //   let newDetails = details.slice()
  //   if (position !== -1) {
  //     newDetails.splice(position, 1)
  //   } else {
  //     newDetails = [...details, index]
  //   }
  //   setDetails(newDetails)
  // }

  const fields = [
    { key: 'username', _style: { width: '10%'} },
    { key: 'fullname', _style: { width: '10%'} },
    { key: 'email', _style: { width: '20%'} },
    { key: 'contact_no', _style: { width: '10%'} },
    { key: 'status', _style: { width: '10%'} },
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '15%' },
      sorter: false,
      filter: false
    }
  ]

  const getBadge = (status)=>{
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }

  const [student_data, setStudent] = useState([]);

  useEffect(() => {
    load_user_data();
  },[])
  
  // show user data
  const load_user_data = () => {
    axios.get("http://localhost:5000/admin_userdata/user_list").then((res)=>{
        setStudent(res.data); 
    }).catch((err)=>{
        console.log("err",err);
    })
  }

  //delete user data
  const delete_user = async (id) =>{
    await axios.put(`http://localhost:5000/admin_userdata/user_delete/${id}`)
    Swal.fire({
      position: 'top-bottom',
      icon: 'success',
      title: 'Item has been deleted Successfully...',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })
    load_user_data();
  }

  //active_to_IN_active_user
  const active_to_IN_active_user = async (id) =>{
    await axios.put(`http://localhost:5000/admin_userdata/active_to_in_active/${id}`).then((res)=>{
      load_user_data();
    }).catch((err)=>{
      console.log("err",err);
    })
    
  }

   //IN_active_to_Active_user
   const IN_active_to_Active_user = async (id) =>{
    await axios.put(`http://localhost:5000/admin_userdata/in_active_to_Active/${id}`).then((res)=>{
      load_user_data();
    }).catch((err)=>{
      console.log("err",err);
    }) 
  }

  // pdf download
  const pdf = async (id,name,fname,email,contact_no,profile_img) =>{
    await axios.post(`http://localhost:3100/user/pdf`,{params:
      {   
        id:id,
        name:name,
        fname:fname,
        email:email,
        contact_no:contact_no,
        profile_img:profile_img
      }
    })
    load_user_data();
  }

  // fetch pdf download
  const fetch_pdf = async (id,name) =>{
    axios.get("http://localhost:3100/user/fetchpdf/"+id,{ responseType: 'blob' })
    .then((res) => {
       const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
       console.log("pdfdata",pdfBlob);
       saveAs(pdfBlob, name + "_" + Date.now() +'.pdf');
    })
    .catch(err=>{
       console.log("Error=>",err)
    })
  }
   
  return (
  <div style={{backgroundColor:'white',padding:'15px',borderRadius:'30px',margin:'0 0 32px 0',textAlign:'center'}}>
    <CDataTable
      items={student_data}
      fields={fields}
      columnFilter
      tableFilter
      footer
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      pagination
      //clickableRows
      //onRowClick={(student_data) => history.push(`/user_view/${student_data._id}`)}
      scopedSlots = {{
        'status':
          (item)=>(
            <td>
              <CBadge color={getBadge(item.status)}>
                {item.status}
              </CBadge>
            </td>
          ),
        'show_details':
          (item, index)=>{
            return (
              <tr>
                <td className="py-3">
                  {item.status === "Active" && <CSwitch className={'mx-1'} 
                  shape={'pill'}
                  name='chk_status'
                  color={'success'} 
                  variant={'opposite'}
                  labelOn={'\u2713'} 
                  labelOff={'\u2715'}
                  onClick={() => {active_to_IN_active_user(item._id)  }}
                  defaultChecked
                  />}
                {item.status === "In-Active" && <CSwitch className={'mx-1'} 
                shape={'pill'}
                name='chk_status'
                color={'success'} 
                variant={'opposite'}
                labelOn={'\u2713'} 
                labelOff={'\u2715'}
                onClick={() => {IN_active_to_Active_user(item._id)  }}
                />}
              </td>
              <td className="py-3">  
                <CButton className="rounded-lg"
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  to={`/user_view/${item._id}`}
                >
                  View
                </CButton>
              </td>
              <td className="py-3">  
                <CButton className="rounded-lg"
                  color="warning"
                  variant="outline"
                  shape="square"
                  size="sm"
                  to={`/user_edit/${item._id}`}
                >
                  Edit
                </CButton>
              </td>
              <td className="py-3">
                <CButton className="rounded-lg"
                  color="danger"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={ () =>{ if (window.confirm('Are you sure you wish to delete this item ?')) delete_user(item._id) }}
                >
                  Delete
                </CButton>
              </td>
              <td className="py-3">
                <CButton className="rounded-lg"
                  color="success"
                  variant="outline"
                  shape="square"
                  size="sm"
                  to={`/user_pdf/${item._id}`}
                  // onClick={ () =>{ if (window.confirm('Are you sure you wish to create PDF ?')) pdf(item._id,item.username,item.fullname,item.email,item.contact_no,item.profile_img); fetch_pdf(item._id,item.username) }}
                >
                  PDF
                </CButton>
              </td>
            </tr>
              )
          },
        // 'details':
        //     (item, index)=>{
        //       return (
        //       <CCollapse show={details.includes(index)}>
        //         <CCardBody>
        //           <h4>
        //             {item.username}
        //           </h4>
        //           {/* <p className="text-muted">User since: {item.registered}</p> */}
        //           <CButton size="sm" color="info">
        //             User Settings
        //           </CButton>
        //           {/* <CButton size="sm" color="danger" className="ml-1">
        //             Delete
        //           </CButton> */}
        //           {/* <CButton size="sm" color="danger" className="ml-1"  onClick={ () =>{ if (window.confirm('Are you sure you wish to delete this item?')) delete_user(item._id) }}><CIcon name="cil-scrubber" /> Delete</CButton> */}
        //         </CCardBody>
        //       </CCollapse>
        //     )
        //   }
      }}
    />
  </div>
  )
}

export default User_List
