import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow,CImg,CCardFooter,CButton,CHeaderNavLink } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import moment from 'moment';


const User_view = ({match}) => {

    const { id } = useParams(); 

    console.log("data",id);


    const [blog_data, set_blog_data] = useState({})
    
    useEffect(() => {
        load_blog_data();
    }, [])

    const load_blog_data = async ()  =>{

        await axios.get('http://localhost:5000/admin_blogdata/blog_view/' + match.params.id)
        .then(resu=>{
            console.log("data",resu)
            set_blog_data(resu.data[0])
        }).catch(err=>{
            console.log(err);
        })
    }

    const delete_user = () =>{
        axios.put(`http://localhost:5000/admin_blogdata/blog_delete/${match.params.id}`)
        .then((res)=>{  
            window.location.href="/#/Blog_list"
        }).catch((err)=>{

        })
    }

  // const user = users.find( user => user.user_ID === match.params.id)
  const userDetails = blog_data ? Object.entries(blog_data): 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

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
              <img classname="mx-auto" src={'/uploads/Blog_img/' + blog_data.blog_image } style={{ width: '200px', height: '200px', borderRadius: '200px',border: '10px double #007bff' }} />
          </center>
                
          {/* <CCardHeader src={'public/profiles/'+users.selectedFile} ></CCardHeader> */}
          {/* <img width="80" height="80" src={'/profiles/'+users.selectedFile}/> */}
          <CCardBody>
               <table className="table table-striped table-hover">
                <tbody>
                 <tr>
                   <td>Blog Title</td><td>{blog_data.blog_title}</td>
                 </tr>
                 <tr>
                   <td>Blog Content</td><td>{blog_data.blog_content}</td>
                 </tr>
                 <tr>
                    <td>Blog Date</td><td>{moment(blog_data.blog_date).format('DD-MM-YYYY')}</td>
                 </tr>
                 <tr>
                   <td>Blog Author</td><td>{blog_data.author}</td>
                 </tr>
                 <tr>
                   <td>Blog Status</td><td>{blog_data.blog_status}</td>
                 </tr>
                </tbody>
              </table>
          </CCardBody>
          <CCardFooter>
            <CButton size="sm" color="danger"  onClick={ () =>{ if (window.confirm('Are you sure you wish to delete this item?')) delete_user() }}><CIcon name="cil-scrubber" /> Delete</CButton>
            {' '}||{' '}                         
            <CButton size="sm" color="primary" to={`/Blog_Edit/${blog_data.blog_id}`}><CIcon name="cil-scrubber" /> Edit</CButton>
            {/* <CHeaderNavLink to={`/user_edit/${users.useruser_ID}`}>EDIT</CHeaderNavLink> */}
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default User_view
