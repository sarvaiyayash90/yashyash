import React,{useState} from 'react'
import axios from 'axios';

const Get_Quotation = () => {

    // const[no,setno]=useState({
    //     number:'',
  
    // });

    // const {number} = no;

    // const onChange_no = e => {
    //     // setno({ [e.target.name] : e.target.value })
    //     const re = /^[0-9\b]+$/;
    //     if (e.target.value === '' || re.test(e.target.value)) {
    //         setno({  number : e.target.value})
    //     }
    // }


    const [data,setdata]=useState({
        name:'',
        select_website_type:'',
        select_budget_type:'',
        email:'',
        select_reference:'',
        moblie_no:''
    })

    const {name,select_website_type,select_budget_type,email,select_reference,moblie_no} =  data;

    const onInputChange = e => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }; 

    const [auth,setauth]=useState(false);
    const [error,seterror]=useState('');
    
    const [formerror,setformerror]=useState({
        name_err : null,
        select_website_type_err : null,
        select_budget_type_err : null,
        email_err :null,
        select_reference_err:null,
        moblie_no_err:null
    });

    
    const onhandlesubmit_get_quotation = e =>{
        e.preventDefault();
        if(!name && !email && !moblie_no && !select_website_type && !select_budget_type && !select_reference){
            setformerror({  
                name_err: 'Please Enter Name',
                email_err: 'Please Enter email',
                moblie_no_err: 'Please Enter Phone_no',
                select_website_type_err : 'Please Select Any Option',
                select_budget_type_err:'Please Select Any Option',
                select_reference_err:'Please Select Any Option'
            });
            setTimeout(()=>{setformerror({ 
                name_err: '',
                email_err: '',
                moblie_no_err : '',
                select_website_type_err:'',
                select_budget_type_err:'',
                select_reference_err:''
            })},3000);
        }   
        else if(!name){
            setformerror({ name_err: 'Please Enter Name' });
                setTimeout(()=>{
                    setformerror({ name_err: '' })
                },3000);
            return false;
        }
        else if(select_website_type==''){
            setformerror({ select_website_type_err: 'Please Select Any Option' });
                setTimeout(()=>{
                    setformerror({ select_website_type_err: '' })
                  },3000);
            return false;
        }

        else if(select_budget_type==''){
            setformerror({ select_budget_type_err: 'Please Select Any Option' });
                setTimeout(()=>{
                    setformerror({ select_budget_type_err: '' })
                  },3000);
            return false;
        }
        else if(!moblie_no){
            setformerror({ moblie_no_err: 'Please Enter phone_no' });
                setTimeout(()=>{
                    setformerror({ moblie_no_err: '' })
                  },3000);
                return false;
        }
        else if(!email){
            setformerror({ email_err: 'Please Enter email' });
                setTimeout(()=>{
                    setformerror({ email_err: '' })
                  },3000);
            return false;
        }
        else if(select_reference==''){
            setformerror({ select_reference_err: 'Please Select Any Option' });
                setTimeout(()=>{
                    setformerror({ select_reference_err: '' })
                  },3000);
            return false;
        }    
        else
        {        
            const body_data =  {
                name : name,
                select_website_type: select_website_type,
                select_budget_type:select_budget_type,
                email: email,
                select_reference:select_reference,
                moblie_no: moblie_no,
            }

            axios.post('/Careerdata/Get_Quotation',body_data)
            .then((res) =>{
                setauth(true)
                setTimeout(()=>{
                    window.location.href="/"
                },2000)
            }).catch((err) =>{
                window.location.reload()
                if (err.response && err.response.data) {
                    //console.log(err.response.data.message) // some reason error message
                    seterror(err.response.data.message)
                    setTimeout(()=>{
                      seterror("")
                    },5000);
                }
            })
        }
    }

    return ( 
        <div className="container-fluid p-0">
            {error && <p style={{color:'red'}}> {error} </p>}    
            <div className="get-quotation-certificate-form-1">
                My name is&nbsp;
                    <input id="Enter_name" 
                        type="text" 
                        name="name" 
                        placeholder="Enter Name"
                        value={name} onChange={e => onInputChange(e) }
                    />{formerror.name_err && <p className="error" style={{color: 'red',fontSize:'15px'}}>{formerror.name_err}</p>}
                    . I am looking for&nbsp;
                <select id="select_op" name="select_website_type" onChange={e => onInputChange(e) }>
                    <option value="Select an option" selected>Select an option</option>
                    <option value="Awesome website">Awesome website</option>
                    <option value="Mobile application">Mobile application</option>
                    <option value="Web/Desk application">Web/Desk application</option>
                    <option value="SEO/Digitak marking">SEO/Digitak marking</option>
                    <option value="ERP/CRM">ERP/CRM</option>
                    <option value="Hire Dedicated developer">Hire Dedicated developer</option>
                    <option value="Technology consult">Technology consult</option>
                </select>
                {formerror.select_website_type_err && <p className="error" style={{color: 'red',fontSize:'15px'}}>{formerror.select_website_type_err}</p>}
                .My
                <br></br>
                <div className="mt-3"></div>
                buget is&nbsp;
                <select id="select_op_new" name="select_budget_type" onChange={e => onInputChange(e) }>
                    <option value="Select an option" selected>Select an option</option>
                    <option value="below Rs. 30,000">below Rs. 30,000</option>
                    <option value="Between Rs.30,000 to Rs.1,00,000">Between Rs.30,000 to Rs.1,00,000</option>
                    <option value="above Rs.1,00,000">above Rs.1,00,000</option>
                    <option value="Not decided">Not decided</option>
                </select>.{formerror.select_budget_type_err && <p className="error" style={{color: 'red',fontSize:'15px'}}>{formerror.select_budget_type_err}</p>}
                You can call me on&nbsp;<select id="select_op_call">
                    <option value="Select an option">+91</option>
                    <option value="Select an option">+98</option>   
                </select><input type="text" id="Enter_name" placeholder="Enter Contact no" name="moblie_no" value={moblie_no} onChange={e => onInputChange(e) } maxlength="10"/>
                {formerror.moblie_no_err && <p className="error" style={{color: 'red',fontSize:'15px'}}>{formerror.moblie_no_err}</p>}
                or
                <br></br>
                <div className="mt-3"></div>
                mail me at &nbsp;<input type="email" id="Enter_name" name="email" value={email} onChange={e => onInputChange(e) } placeholder="Enter Email"/>.
                {formerror.email_err && <p className="error" style={{color: 'red',fontSize:'15px'}}>{formerror.email_err}</p>}
                I heard about you through
                <br></br>
                <div className="mt-3"></div>
                <select id="select_op_new" name="select_reference" onChange={e => onInputChange(e) }>
                    <option value="Select an option" selected>Select an option</option>
                    <option value="google">google</option>
                    <option value="Social media">Social media</option>
                    <option value="Friends">Friends</option>
                    <option value="Client reference">Client reference</option>
                    <option value="Other">Other</option>
                </select>
                {formerror.select_reference_err && <p className="error" style={{color: 'red',fontSize:'15px'}}>{formerror.select_reference_err}</p>}
                <br></br>
                {!auth  && <button type="button" class="btn btn-outline" id="btn-get-quotation" style={{background:'#75dbb3'}} onClick={ e =>onhandlesubmit_get_quotation(e) }>Request Quotation</button> }
                {auth && <button type="button" class="btn btn-lg btn-outline" style={{background:'#75dbb3'}} disabled >Please Wait... Your Request Quotation Send...</button>}
            </div>
        </div>
     );
}
 
export default Get_Quotation;