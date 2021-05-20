import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow,CCardFooter,CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const User_Pdf = ({match}) => {
  const [users, setUsers] = useState({})


  useEffect(() => {
    load_user_data();
        
        // axios(`http://localhost:3100/user/getFile `, {
        //     method: "GET",
        //     responseType: "blob"
        //     //Force to receive data in a Blob Format
        // })
        // .then(response => {
        //   //Create a Blob from the PDF Stream
        //   const file = new Blob([response.data], {
        //     type: "application/pdf"
        // });
        //   //Build a URL from the file
        // const fileURL = URL.createObjectURL(file);
        // //Open the URL on new Window
        // window.open(fileURL);
        // })
        // .catch(error => {
        //   console.log(error);
        // });
  }, [])

  const load_user_data = async ()  =>{
    await axios.get('http://localhost:5000/admin_userdata/user_view/' + match.params.id).then(resu=>{
        //setUsers(resu.data[0])
        setUsers(resu.data)
    }).catch(err=>{
      console.log(err);
    })
  }

//   const pdf_user = () =>{
//     var doc = new jsPDF()
//     doc.autoTable({ html: '#my-table',theme:'grid' })
//     doc.save('table.pdf')
//   }

  const pdf_user = (name) =>{

    // var doc = new jsPDF({ unit: "pt",userUnit: "pt"});          
    // var source = document.getElementById("my-table")
    // doc.html(source).then(()=>{
    //     doc.save('mypdf.pdf')
    // })

    var doc = new jsPDF({ unit: "pt", format: "letter", userUnit: "pt" });          
    var source = document.getElementById("my-table")
    doc.html(source,{html2canvas:{scale:0.51}}).then(()=>{
           
    // var data_pdf = btoa(doc.output());
    // var data_pdf = doc.output();

    var today = new Date();
    var Pdf_Data = name + "_" + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + ".pdf"
    const data_pdf = new File([doc.output("blob")], Pdf_Data , {  type: "pdf" });
    var formdata = new FormData();
    formdata.append("data_pdf",data_pdf);
    axios.post(`http://localhost:5000/admin_userdata/new_pdf`,formdata)
    .then((res)=>{

      console.log("res=>",res)
    })
    .catch((err)=>{
      console.log("err=>",err)
    })
    doc.save(name + "_" + Date.now() +'.pdf')
  
  })
}

  return (
    <CRow>
        <CCol lg={12}>
            <CCard>
                <CCardHeader>
                    User id: {match.params.id} 
                </CCardHeader>  
                <CCardBody id="my-table">
                    <table className="table table-borderless" border="0" cellspacing="5" cellpadding="5"  style={{width:"100%"}} >
                        <tr style={{width:"100%",borderBottom:'2px solid #000'}}>
                            <th colspan="12" style={{textAlign:'center'}}>
                                {/* <img src="infilon_logo.png" width="281" height="81" ></img> */}
                                <br></br><h2>INFILON TECHNOLOGIES PVT. LTD.</h2>
                                <br></br> INFILON@GMAIL.COM
                                <br></br> 407, Sakar 2, Ellisbridge, Ahmedabad, Gujarat 380006
                                <br></br>We have been crafting and developing Android and iOS mobile app solutions from 2009
                            </th>
                        </tr>
                        <tr>
                            <td colspan="12" style={{textAlign:'center'}}>
                                <img classname="mx-auto" src={'/uploads/User_img/' + users.profile_img} style={{ width: '200px', height: '200px', borderRadius: '200px' }} />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="12" style={{textAlign:'center'}}>
                            <h1><u><b>Infomation</b></u></h1>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:'50%',textAlign:'center',fontWeight:'bold'}}> Name </td>
                            <td style={{width:'50%',textAlign:'center',fontWeight:'bold'}}> {users.username} </td>
                        </tr>
                        <tr>
                            <td style={{width:'50%',textAlign:'center',fontWeight:'bold'}}> Mobile</td>
                            <td style={{width:'50%',textAlign:'center',fontWeight:'bold'}}> {users.fullname} </td>
                        </tr>
                        <tr>
                            <td style={{width:'50%',textAlign:'center',fontWeight:'bold'}}> Email</td>
                            <td style={{width:'50%',textAlign:'center',fontWeight:'bold'}}> {users.email} </td>
                        </tr>
                        <tr>
                            <td style={{width:'50%',textAlign:'center',fontWeight:'bold'}}> Contact No </td>
                            <td style={{width:'50%',textAlign:'center',fontWeight:'bold'}}> {users.contact_no} </td>
                        </tr>
                        <tr style={{width:"100%",borderTop:'2px solid #000'}}>
                            <td colspan="12"> IMPORTANT : Any change in document except by the issuing 
                                authority,will result into cancellation of the statement and shall 
                                also invoke imposition of appropriate legal action.
                            </td>
                        </tr>
                    </table>
                </CCardBody>
                <CCardFooter>
                    <CButton style={{textAlign:'center'}} size="sm" color="danger"  onClick={ () =>{ if (window.confirm('Are you sure you wish to create PDF ?')) pdf_user(users.username) }}><CIcon name="cil-scrubber" /> PDF</CButton>
                </CCardFooter>
            </CCard>
        </CCol>
    </CRow>
  )
}
export default User_Pdf
