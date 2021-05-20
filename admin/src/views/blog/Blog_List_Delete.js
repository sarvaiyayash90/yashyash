import React, { useState, useEffect } from 'react'
// import { useHistory} from 'react-router-dom'
import {
  CBadge,
  // CCardBody,
  CDataTable,
  CButton,
  // CCollapse,
} from '@coreui/react'

import moment from 'moment';

import axios from 'axios';

const User_List_In_Active = () => {

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
    { key: 'blog_category_name', _style: { width: '20%'} },
    { key: 'blog_title', _style: { width: '20%'} },
    { key: 'author', _style: { width: '10%'} },
    { key: 'blog_date', _style: { width: '20%'} },
    { key: 'blog_status', _style: { width: '10%'} },
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
    load_blog_data();
  },[])
  
  const [blog_data, set_blog_data] = useState([]);

  // show blog data
  const load_blog_data = () => {
    axios.get("http://localhost:5000/admin_blogdata/Blog_List_Delete")
    .then((res)=>{
        set_blog_data(res.data);
 
    }).catch((err)=>{
        console.log("err",err);
    })
  }

  // blog active
    const blog_active = async id =>{
    await axios.put(`http://localhost:5000/admin_blogdata/blog_active/${id}`)
    load_blog_data();
  }

  // blog active
  const blog_permanent_delete = async id =>{
    await axios.delete(`http://localhost:5000/admin_blogdata/blog_permanent_delete/${id}`)
    load_blog_data();
  }

  // delete blog data
  // const delete_user = async id =>{
  //   await axios.put(`http://localhost:3100/user/User_delete/${id}`)
  //   load_student_data();
  // }

  return (
    <div style={{backgroundColor:'white',padding:'15px',borderRadius:'30px',margin:'0 0 32px 0',textAlign:'center'}}>
      <CDataTable 
        items={blog_data}
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
          'blog_date':
          (item)=>(
            <td>
              {moment(item.blog_date).format('DD-MM-YYYY')}
            </td>
          ),
          'blog_status':
            (item)=>(
              <td>
                <CBadge color={getBadge(item.blog_status)}>
                  {item.blog_status}
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
                      onClick={ () =>{ if (window.confirm('Are you sure you wish to Active this item?')) blog_active(item.blog_id) }}
                      //onClick={()=>{toggleDetails(index)}}
                    >Active Blog
                      {/* {details.includes(index) ? 'Hide' : 'Show'} */}
                    </CButton>
                  </td>
                  <td className="py-3">
                  <CButton className="rounded-lg"
                    color="danger"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={ () =>{ if (window.confirm('Are you sure you wish to Delete this item?')) blog_permanent_delete(item.blog_id) }}
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

export default User_List_In_Active
