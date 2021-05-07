import React,{useState} from 'react'

const Get_Quotation = () => {

    const[no,setno]=useState({
        number:''
    });

    const {number} = no;

   
    const onChange_no = e => {
        // setno({ [e.target.name] : e.target.value })
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setno({  number : e.target.value})
        }
    }

    return ( 
        
        <div className="container-fluid p-0">
            
            <div className="get-quotation-certificate-form-1">
                My name is&nbsp;<input id="Enter_name" type="text" placeholder="Enter Name"/>. I am looking for&nbsp;<select id="select_op">
                    <option value="Select an option" selected>Select an option</option>
                    <option value="Awesome website">Awesome website</option>
                    <option value="Mobile application">Mobile application</option>
                    <option value="Web/Desk application">Web/Desk application</option>
                    <option value="SEO/Digitak marking">SEO/Digitak marking</option>
                    <option value="ERP/CRM">ERP/CRM</option>
                    <option value="Hire Dedicated developer">Hire Dedicated developer</option>
                    <option value="Technology consult">Technology consult</option>
                </select>
                .My
                <br></br>
                <div className="mt-3"></div>
                buget is&nbsp;<select id="select_op_new">
                    <option value="Select an option" selected>Select an option</option>
                    <option value="below Rs. 30,000">below Rs. 30,000</option>
                    <option value="Between Rs.30,000 to Rs.1,00,000">Between Rs.30,000 to Rs.1,00,000</option>
                    <option value="above Rs.1,00,000">above Rs.1,00,000</option>
                    <option value="Not decided">Not decided</option>
                </select>. You can call me on&nbsp;<select id="select_op_call">
                    <option value="Select an option">+91</option>
                    <option value="Select an option">+98</option>   
                </select><input type="text" id="Enter_name" placeholder="Enter Contact no" maxlength="12" value={number} onChange={e => onChange_no(e)}/>or
                <br></br>
                <div className="mt-3"></div>
                mail me at &nbsp;<input type="email" id="Enter_name" placeholder="Enter Email"/>. I heard about you through
                <br></br>
                <div className="mt-3"></div>
                <select id="select_op_new">
                    <option value="Select an option" selected>Select an option</option>
                    <option value="google">google</option>
                    <option value="Social media">Social media</option>
                    <option value="Friends">Friends</option>
                    <option value="Client reference">Client reference</option>
                    <option value="Other">Other</option>
                </select>
                <br></br>
                <button type="button" class="btn btn-outline" id="btn-get-quotation" style={{background:'#75dbb3'}}>Request Quotation</button>
            </div>
        </div>
     );
}
 
export default Get_Quotation;