import React, { useState, useEffect } from 'react'
// import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CDataTable,
  CButton,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'

// import usersData from './UsersData'

import axios from 'axios';
import Swal from 'sweetalert2'

const User_List_Delete = () => {

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

  useEffect(() => {
    load_user_data();
  },[])
  
  const [student_data, setStudent] = useState([]);

  // show user data
  const load_user_data = () => {
    axios.get("http://localhost:5000/admin_userdata/User_List_Delete")
    .then((res)=>{
        setStudent(res.data);
        console.log("res",res);
        //setStudent(res.data);        
    }).catch((err)=>{
        console.log("err",err);
    })
  }

  // user active
    const user_active = async id =>{
    await axios.put(`http://localhost:5000/admin_userdata/user_active/${id}`)
    Swal.fire({
      position: 'top-bottom',
      icon: 'success',
      title: 'User Actived Successfully...',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    })
    load_user_data();
  }

  // user active
  const user_permanent_delete = async id =>{
    await axios.delete(`http://localhost:5000/admin_userdata/user_permanent_delete/${id}`)
    Swal.fire({
      position: 'top-bottom',
      icon: 'success',
      title: 'User Deleted Successfully...',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    })
    load_user_data();
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
        //onRowClick={(student_data) => history.push(`/User_view/${student_data.user_ID}`)}
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
                    <CButton className="rounded-lg"
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                      onClick={ () =>{ if (window.confirm('Are you sure you wish to Active this item?')) user_active(item._id) }}
                      //onClick={()=>{toggleDetails(index)}}
                    >Active User
                      {/* {details.includes(index) ? 'Hide' : 'Show'} */}
                    </CButton>
                  </td>
                  <td className="py-3">
                  <CButton className="rounded-lg"
                    color="danger"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={ () =>{ if (window.confirm('Are you sure you wish to Delete this item?')) user_permanent_delete(item._id) }}
                    //onClick={()=>{toggleDetails(index)}}
                  >Delete
                    {/* {details.includes(index) ? 'Hide' : 'Show'} */}
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
          //           {/* <CButton size="sm" color="danger" className="ml-1"  onClick={ () =>{ if (window.confirm('Are you sure you wish to delete this item?')) delete_user(item.user_ID) }}><CIcon name="cil-scrubber" /> Delete</CButton> */}
          //         </CCardBody>
          //       </CCollapse>
          //     )
          //   }
        }}
      />
    </div>
  )
}

export default User_List_Delete
