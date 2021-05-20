import React,{useState,useEffect,useRef} from 'react'
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
  CRow,
  CTextarea,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react';

import axios from 'axios';
import JoditEditor from "jodit-react";

const Blog_Create = () => {

    const editor = useRef(null)
	// const [content, setContent] = useState('')
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}

    const [category_blog,set_category_blog] = useState([]); // category blog 
    
    useEffect(()=>{
        load_category_blog();
    },[])

    // category blog load
    const load_category_blog = async () =>{
        await axios.get('http://localhost:5000/admin_blogdata/category_Blog_show')
        .then((res)=>{
            console.log("data",res);
            set_category_blog(res.data);
        })
        .catch((err)=>{
            console.log("error",err);
        })
    }

  
    const[Blog_data,set_Blog_data]=useState({
        blog_category_id : '',
        blog_title : '',
        blog_content : '',
        blog_date : '',
        author :'',
    })

    const {blog_category_id,blog_title,blog_content,blog_date,author} = Blog_data;


    // const [category_blog,set_category_blog] = useState([]);
    
    
    const onInputChange = e => {
        set_Blog_data({ ...Blog_data, [e.target.name]: e.target.value });
    }; 

    // const onInputChange_form = (e) => {
    //     set_category_blog({ [ e.target.name ] : e.target.value });
    //     console.log("sosss_id",category_blog)
    // }

    const reader = new FileReader();

    const[img,setimg]=useState({
        blog_image:null,
        invalidImage:null
    })

    const [auth,setauth]=useState(false);
    const [error,seterror]=useState('');

    const [formerror,setformerror]=useState({
        blog_category_id_err : null,
        blog_title_err : null,
        blog_content_err : null,
        blog_date_err : null,
        author_err :null
    });

    const onInputChange_user_Profile = e => {
        
        const imageFile = e.target.files[0];
        if (!imageFile) {
            setimg({ invalidImage: 'Please select image.' });
            return false;
        }
        if (!imageFile.name.match(/\.(jpg|jpeg|png)$/)) {
            setimg({ invalidImage: 'Please select valid image.' });
            return false;
        }
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                setimg({ blog_image: imageFile, invalidImage: null,handleResponse: null });
                return true;
            };
            img.onerror = () => {
                setimg({ invalidImage: 'Invalid image content.' });
                return false;
            };
            debugger
            img.src = e.target.result;
        };
        reader.readAsDataURL(imageFile);
    };

  

    const onhandlesubmit_blog = e =>{

        // form_permission_user_yes_no(id)

        e.preventDefault();
        
        const { blog_image } = img;

        if (!blog_image) {
            setimg({
                handleResponse: {
                    isSuccess: false,
                    message: "Please select image Like JPG, JPEG And PNG."
                }
            });
            return false;
        }else if(!blog_category_id && !blog_title && !blog_content && !blog_date && !author){
            setformerror({  
                blog_category_id_err: 'Please Select Any Option',
                blog_title_err: 'Please Enter Blog Title',
                blog_content_err: 'Please Enter Blog Content',
                blog_date_err: 'Please select Blog date',
                author_err: 'Please Enter Author name'    
            });
            setTimeout(()=>{setformerror({ 
                blog_category_id_err : '',
                blog_title_err: '',
                blog_content_err: '',
                blog_date_err: '',
                author_err : ''
            })},3000);

        }
        else if(blog_category_id==''){
            setformerror({ blog_category_id_err: 'Please Select Any Option' });
                setTimeout(()=>{
                    setformerror({ blog_category_id_err: '' })
                  },3000);
                return false;
        }
        else if(!blog_title){
            setformerror({ blog_title_err: 'Please Enter Blog Title' });
                setTimeout(()=>{
                    setformerror({ blog_title_err: '' })
                  },3000);
                return false;
        }
        else if(!blog_content){
            setformerror({ blog_content_err: 'Please Enter Blog Content' });
                setTimeout(()=>{
                    setformerror({ blog_content_err: '' })
                  },3000);
                return false;
        }
        else if(!blog_date){
            setformerror({ blog_date_err: 'Please select Blog date' });
            setTimeout(()=>{
                setformerror({ blog_date_err: '' })
                },3000);
            return false;
        }
        else if(!author){
            setformerror({ author_err: 'Please Enter Author name' });
                setTimeout(()=>{
                    setformerror({ author_err: '' })
                  },3000);
                return false;
        }
        else{
            setimg({
                handleResponse: {
                    isSuccess: false,
                    message: ""
                }
            });
            const bodyFormData = new FormData();
            bodyFormData.append("blog_category_id",blog_category_id);
            bodyFormData.append("blog_title",blog_title);
            bodyFormData.append("blog_content",blog_content);
            bodyFormData.append("blog_date",blog_date);
            bodyFormData.append("author",author);
            bodyFormData.append("blog_image",img.blog_image);

            console.log("data",bodyFormData);
            
            axios.post("http://localhost:5000/admin_blogdata/Blog_Create",bodyFormData)
            .then((res)=>{
                setauth(true)
                window.location.href="/#/Blog_list"
            }).catch((err)=>{
                window.location.reload()
                if (err.response && err.response.data) {
                    //console.log(err.response.data.message) // some reason error message
                    seterror(err.response.data.message)
                    setTimeout(()=>{
                      seterror("")
                    },5000);
                }
                //window.location.href="/Create_data"
                //alert("Student email already exits Please Enter Unique Enter email");
                //console.log("error",err)
            })
        }
    }

  return (
    <CRow>
        <CCol xs="12" sm="12">
            <CCard>
                <CCardHeader>
                    User Form
                </CCardHeader>
                <CCardBody>
                    <CForm action="" method="post" className="form-horizontal">
                        {error && <p style={{color:'red'}}> {error} </p>}    
                        <CFormGroup>
                            <CLabel htmlFor="select">Blog Category</CLabel>
                            <CSelect custom name="blog_category_id" id="select" onChange={e => onInputChange(e) }>
                                <option value="" hidden>Please select Category Blog</option>
                                {category_blog.map((item,key) => (
                                    <option value={item._id}>{item.blog_category_name}</option>
                                ))}
                            </CSelect>
                            {formerror.blog_category_id_err && <p className="error" style={{color: 'red'}}>{formerror.blog_category_id_err}</p>}
                        </CFormGroup>
                        
                        <CFormGroup>
                            <CLabel htmlFor="blog title">Blog title</CLabel>
                            <CInput type="text"
                                name="blog_title"
                                value={blog_title}
                                placeholder="Enter Blog Title" onChange={e => onInputChange(e) } />
                                {formerror.blog_title_err && <p className="error" style={{color: 'red'}}>{formerror.blog_title_err}</p>}
                        </CFormGroup>

                        <CFormGroup>
                            <CLabel htmlFor="Profile">Blog Image</CLabel>
                            <CInput type="file"
                            name="blog_image"
                            accept=".png, .jpg, .jpeg"
                            //onChange={e => set_blog(e.target.files[0])  } 
                            onChange={e => onInputChange_user_Profile(e)}
                            />
                            {img.invalidImage && <p className="error" style={{color: 'red'}}>{img.invalidImage}</p>}
                            {img.handleResponse && <p style={{color: 'red'}} className={img.handleResponse.isSuccess ? "success" : "error"}>{img.handleResponse.message}</p>}
                        </CFormGroup>

                        <CFormGroup>
                            <CLabel htmlFor="textarea-input">Blog Content</CLabel>
                            <CTextarea 
                                name="blog_content"
                                value={blog_content}
                                onChange={e => onInputChange(e) }
                                id="textarea-input" 
                                rows="9"
                                placeholder="Blog Content..." 
                            />
                             {/* <JoditEditor   
                                ref={editor}
                                name="blog_content"
                                value={blog_content}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                // onBlur={newContent => set_Blog_data(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={e => onInputChange(e) }
                            /> */}
                            {formerror.blog_content_err && <p className="error" style={{color: 'red'}}>{formerror.blog_content_err}</p>}
                        </CFormGroup>


                        <CFormGroup>
                            <CLabel htmlFor="date-input">Blog date</CLabel>
                             <CInput type="date" id="date-input" name="blog_date" onChange={e => onInputChange(e) }  />
                            {formerror.blog_date_err && <p className="error" style={{color: 'red'}}>{formerror.blog_date_err}</p>}
                        </CFormGroup>

                        <CFormGroup>
                            <CLabel htmlFor="blog title">Blog Author</CLabel>
                            <CInput type="text"
                                name="author"
                                value={author}
                                placeholder="Enter Author name" onChange={e => onInputChange(e) } />
                                {formerror.author_err && <p className="error" style={{color: 'red'}}>{formerror.author_err}</p>}
                        </CFormGroup>

                    </CForm>
                </CCardBody>
                <CCardFooter>
                    {!auth && <CButton CButton type="submit" size="sm" color="primary"  onClick={ e =>onhandlesubmit_blog(e) }><CIcon name="cil-scrubber" /> Submit</CButton> }
                    { auth && <CButton color="success" variant="outline" className="px-4" disabled >Please Wait Save Blog Data...</CButton> }    
                    {/* <CButton CButton type="submit" size="sm" color="primary"  onClick={ e =>onhandlesubmit_blog(e) }><CIcon name="cil-scrubber" /> Submit</CButton> */}
                    {' '} 
                    {/* <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton> */}
                </CCardFooter>
            </CCard>
        </CCol>
    </CRow>
  )
}

export default Blog_Create
