import React, { useState, useEffect } from 'react'

// import { useHistory} from 'react-router-dom'

import {
  CBadge,
  CDataTable,
  CButton,
  CSwitch
} from '@coreui/react'

import moment from 'moment';

import axios from 'axios';
// import { saveAs } from 'file-saver';

const User_List = () => {

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

  const [blog_data, set_blog_data] = useState([]);


  useEffect(() => {
    load_blog_data();
  },[])
  
  // show blog data
  const load_blog_data = () => {
    axios.get("http://localhost:5000/admin_blogdata/Blog_List")
    .then((res)=>{
      console.log("res",res);
      set_blog_data(res.data); 
    }).catch((err)=>{
      console.log("err",err);
    })
  }

  //delete blog data
  const delete_blog = async id =>{
    await axios.put(`http://localhost:5000/admin_blogdata/blog_delete/${id}`)
    load_blog_data();
  }

  //active_to_IN_active_blog
  const active_to_IN_active_blog = async id =>{
    await axios.put(`http://localhost:5000/admin_blogdata/active_to_in_active/${id}`).then((res)=>{
      load_blog_data();
    }).catch((err)=>{
      console.log("err",err);
    })
  }

  //IN_active_to_Active_blog
   const IN_active_to_Active_blog = async id =>{
    await axios.put(`http://localhost:5000/admin_blogdata/in_active_to_Active/${id}`).then((res)=>{
      load_blog_data();
    }).catch((err)=>{
      console.log("err",err);
    }) 
  }

  // pdf download
//   const pdf = async (id,name,fname,email,contact_no,profile_img) =>{
//     await axios.post(`http://localhost:3100/user/pdf`,{params:
//       {   
//         id:id,
//         name:name,
//         fname:fname,
//         email:email,
//         contact_no:contact_no,
//         profile_img:profile_img
//       }
//     })
//     load_blog_data();
//   }

  // fetch pdf download
//   const fetch_pdf = async (id,name) =>{
//     axios.get("http://localhost:3100/user/fetchpdf/"+id,{ responseType: 'blob' })
//     .then((res) => {
//        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
//        console.log("pdfdata",pdfBlob);
//        saveAs(pdfBlob, name + "_" + Date.now() +'.pdf');
//     })
//     .catch(err=>{
//        console.log("Error=>",err)
//     })
//   }
   
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
      //onRowClick={(student_data) => history.push(`/user_view/${student_data._id}`)}
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
                  {item.blog_status === "Active" && <CSwitch className={'mx-1'} 
                  shape={'pill'}
                  name='chk_status'
                  color={'success'} 
                  variant={'opposite'}
                  labelOn={'\u2713'} 
                  labelOff={'\u2715'}
                  onClick={() => {active_to_IN_active_blog(item.blog_id)  }}
                  defaultChecked
                  />}
                {item.blog_status === "In-Active" && <CSwitch className={'mx-1'} 
                shape={'pill'}
                name='chk_status'
                color={'success'} 
                variant={'opposite'}  
                labelOn={'\u2713'} 
                labelOff={'\u2715'}
                onClick={() => {IN_active_to_Active_blog(item.blog_id)  }}
                />}
              </td>
              <td className="py-3">  
                <CButton className="rounded-lg"
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  to={`/Blog_view/${item.blog_id}`}
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
                  to={`/Blog_Edit/${item.blog_id}`}
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
                  onClick={ () =>{ if (window.confirm('Are you sure you wish to delete this item ?')) delete_blog(item.blog_id) }}
                >
                  Delete
                </CButton>
              </td>
            </tr>
              )
          }
      }}
    />
  </div>
  )
}

export default User_List
