import React from 'react';
import { NavLink } from 'react-router-dom';
// import Pdf from '../../../public/Images/Employee_Policy/EmployeePolicy.pdf';

import Pdf_new from '../../Images/Employee_Policy/EmployeePolicy.pdf';

const Footer = () => {
    return (  
        <div className="">
            <div class="row Main-section-Hire">
                <div class="col-sm-6">
                <p>Hire Dedicated Resources</p>
                </div>
                <div class="col-sm-6 hire-now">
                <button><a href="/Get_Quotation" style={{textDecoration:'none',color:'#75DBB3'}}>HIRE NOW</a></button>
                </div>
            </div>
            <div className="row Main-section-Quick-Links">
                <div className="Main-section-Quick-Links-inside">
                    <p>Quick Links</p><i class="fal fa-horizontal-rule fa-2x" style={{fontSize:'60px'}}></i>
                    <ul>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/Responsive_Website_Design`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Responsive Website Design
                            </NavLink> */}
                            <a href="/Responsive_Website_Design" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Responsive Website Design
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/Android_App`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Android App Development
                            </NavLink> */}
                            <a href="/Android_App" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Android App Development
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/Ios_App`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;iPhone App Development
                            </NavLink> */}
                            <a href="/Ios_App" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> iPhone App Development
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/Mobile_App`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Mobile App Development
                            </NavLink> */}
                            <a href="/Mobile_App" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Mobile App Development
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/SEO`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;SEO Company in Ahmedabad
                            </NavLink> */}
                            <a href="/SEO" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Top SEO Company in Ahmedabad
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/Software_Development`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Software Development
                            </NavLink> */}
                            <a href="/Software_Development" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Software Development
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Ecommerce Services
                            </NavLink> */}
                            <a href="/" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Ecommerce Services
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Open Source Development
                            </NavLink> */}
                            <a href="/Open_Source_Services" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Open Source Development
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/Web_ERP`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;ERP Software Solutions
                            </NavLink> */}
                            <a href="/Web_ERP" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> ERP Software Solutions
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/React_Native_App`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;React Native Development
                            </NavLink> */}
                            <a href="/React_Native_App" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> React Native Development
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="Main-section-Quick-Links-inside">
                    <i id="data-link" class="fal fa-horizontal-rule fa-2x" style={{fontSize:'60px'}}></i>
                    <ul>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/Accounting_Software`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Accounting Software
                            </NavLink> */}
                            <a href="/Accounting_Software" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Accounting Software
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/Billing_Software`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Billing Software
                            </NavLink> */}
                            <a href="/Billing_Software" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Billing Software
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/Web_ERP`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Web ERP
                            </NavLink> */}
                            <a href="/Web_ERP" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Web ERP
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/Web_CRM`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Web CRM
                            </NavLink> */}
                            <a href="/Web_CRM" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Web CRM
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/Hire_Developers`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Hire Developer
                            </NavLink> */}
                            <a href="/Hire_Developers" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Hire Developer
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Domain & Hosting
                            </NavLink> */}
                            <a href="/Domain_Hosting" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Domain & Hosting
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Bulk SMS & Email
                            </NavLink> */}
                            <a href="/BULK_SMS_EMAIL" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Bulk SMS & Email
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Employee policy
                            </NavLink> */}
                            <a href={Pdf_new} target = "_blank" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Employee policy
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/Career`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Career
                            </NavLink> */}
                            <a href="/Career" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Career
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/Portfolio`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Portfolio
                            </NavLink> */}
                            <a href="/Portfolio" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Portfolio
                            </a>
                        </li>
                        <li>
                            {/* <NavLink  style={{textDecoration:'none'}} exact to={`/`}>
                                <i class="fal fa-chevron-right"></i>&nbsp;Blog
                            </NavLink> */}
                            <a href="/Blog" style={{textDecoration:'none'}} >
                                <i class="fal fa-chevron-right"></i> Blog
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="Main-section-Quick-Links-inside">
                    <p>Contact Us:</p><i class="fal fa-horizontal-rule fa-2x" style={{fontSize:'60px'}}></i>
                    <br></br>
                    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.017872460409!2d72.5703573149192!3d23.02311598495282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f466a8194f%3A0xbdcde14274fb0096!2sInfilon%20-%20Mobile%20App%20Development%20Company!5e0!3m2!1sen!2sin!4v1614169278523!5m2!1sen!2sin" width="291" height="160" style={{border:'0',allowfullscreen:'',loading:'lazy'}}></iframe>
                    <h6>407, Sakar 2, Ellis Bridge, Ashram Road, Ahmedabad, Gujarat, India – 380006</h6>
                    <h4>Infilon Technologies Rating : 4.9 / 5</h4>
                    <div className="social-icon">
                        <li>
                            <a href="https://www.google.com"><i class="fab fa-facebook-square fa-2x"></i></a>
                        </li>
                        <li>
                            <a href="https://www.google.com"><i class="fab fa-twitter fa-2x"></i></a>
                        </li>
                        <li>
                            <a href="https://www.google.com"><i class="fab fa-google-plus-g fa-2x"></i></a>
                        </li>
                        <li>
                            <a href="https://www.google.com"><i class="fab fa-instagram fa-2x"></i></a>
                        </li>
                    </div>
                </div>
                <div className="Main-section-Quick-Links-inside">
                    <p>Get Quotation</p><i class="fal fa-horizontal-rule fa-2x" style={{fontSize:'60px'}}></i>
                    <br></br>
                    <button>Get Quotation</button>
                    <br></br>
                    <p>Sales & Support</p><i class="fal fa-horizontal-rule fa-2x" style={{fontSize:'60px'}}></i>
                    <div className="sale">
                    <b>Sales :</b>
                    <br></br>
                    <i class="fas fa-phone-alt"></i><p> : +91-95100 16999</p> <br></br>
                    <i class="fas fa-phone-alt"></i><p> : +91-99044 69794</p> <br></br>
                    </div>
                    <div className="Support mt-2">
                    <b>Support :</b>
                    <br></br>
                    <i class="fas fa-phone-alt"></i><p> : +91 79 4009 1208</p> <br></br>
                    <i class="fas fa-phone-alt"></i><p> : +91 9099 830 350</p> <br></br>
                    <i class="fab fa-whatsapp" style={{fontSize:'20px'}}></i><p> : +91 8000 230 350</p> <br></br>
                    </div>
                    <div className="Career mt-2">
                    <b>Career :</b>
                    <br></br>
                    <span>Click Here to Join us</span>
                    </div>  
                </div>
            </div>

            <div className="row Main-section-footer">
                <p>  © 2021 Infilon Technologies Pvt. Ltd. All rights reserved.</p>
                <img id="foot-img" src="/Images/footer.png" />
                <div className="row Main-section-footer-inside-icon">
                    <ul>
                    <li>
                        <a href="https://www.google.com"><i class="fab fa-facebook-square fa-2x"></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com"><i class="fab fa-twitter fa-2x"></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com"><i class="fab fa-google-plus-g fa-2x"></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com"><i class="fab fa-instagram fa-2x"></i></a>
                    </li>
                    </ul>
                </div>
                {/* <a href="https://wa.me/+919904469794" class="whatsapp_float" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a> */}
                {/* <a href="https://web.whatsapp.com/send?phone=+919904469794&text=I am interested in your service contact me" class="whatsapp_float" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon fa-spin"></i></a>                 */}
                <a href="https://web.whatsapp.com/send?phone=919904469794&text=I am interested in your service contact me" class="whatsapp_float" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon fa-spin"></i></a>
            </div>
        </div>
    );
}
 
export default Footer;

