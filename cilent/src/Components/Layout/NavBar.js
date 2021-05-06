import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';




const NavBar = () =>{
  useEffect(()=>{
    var $ = window.$;
    $('.multi-level-dropdown .dropdown-submenu > a').on("mouseenter", function(e) {
      var submenu = $(this);
      $('.multi-level-dropdown .dropdown-submenu .dropdown-menu').removeClass('show');
      submenu.next('.dropdown-menu').addClass('show');
      e.stopPropagation();
    });
  
    $('.multi-level-dropdown .dropdown').on("hidden.bs.dropdown", function() {
      // hide any open menus when parent closes
      $('.multi-level-dropdown .dropdown-menu.show').removeClass('show');
    });
  })

  return (
    <nav className="navbar navbar-expand-lg navbarNav">

      <a class="navbar-brand" href="#">WELCOME TO INFILON</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><i style={{margin:'5px 0 0 0',color:'white'}} class="fas fa-bars"></i></span>
      </button>
      <div className="collapse navbar-collapse ulnavdata" id="navbarNav" >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" exact to={`/`}>HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to={`/Who_We_Are`}>WHO WE ARE</NavLink>
          </li>
          
          <li className="nav-item">

            <div class="dropdown">
              <a class="btn nav-item" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              WHAT WE OFFER&nbsp;<i class="far fa-chevron-down"></i>
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <NavLink className="dropdown-item" exact to={`/Responsive_Website_Design`}>Responsive Website Design</NavLink>
                {/* <NavLink className="dropdown-item" exact to={`/Mobile_App`}>Mobile App Development</NavLink> */}
               
                <li class="dropdown-submenu p-0">
                  <NavLink className="dropdown-item pl-2" exact to={`/Mobile_App`}>Mobile App Development</NavLink>
                  <ul class="dropdown-menu  rounded-0 white border-0 z-depth-1">
                    <li class="dropdown p-0">
                      <NavLink className="dropdown-item" exact to={`/Android_App`}>Android App Development</NavLink>
                    </li>
                    <li class="dropdown p-0">
                      <NavLink className="dropdown-item" exact to={`/Ios_App`}>IPhone App Development</NavLink>
                    </li>
                    <li class="dropdown p-0">
                      <NavLink className="dropdown-item" exact to={`/React_Native_App`}>React Native Development</NavLink>
                    </li>
                    <li class="dropdown p-0">
                      <NavLink className="dropdown-item" exact to={`/Ionic_App`}>Ionic Development</NavLink>
                    </li>
                    <li class="dropdown p-0">
                      <NavLink className="dropdown-item" exact to={`/Flutter_App`}>Flutter App Development</NavLink>
                    </li>
                  </ul>
                </li>

                {/* <NavLink className="dropdown-item" exact to={`/Android_App`}>Android App Development</NavLink>
                <NavLink className="dropdown-item" exact to={`/Ios_App`}>IPhone App Development</NavLink>
                <NavLink className="dropdown-item" exact to={`/React_Native_App`}>React Native Development</NavLink>
                <NavLink className="dropdown-item" exact to={`/Ionic_App`}>Ionic Development</NavLink>
                <NavLink className="dropdown-item" exact to={`/Flutter_App`}>Flutter App Development</NavLink> */}

                <NavLink className="dropdown-item" exact to={`/Software_Development`}>Software Development</NavLink>
                <NavLink className="dropdown-item" exact to={`/SEO`}>Search Engine Optimization (SEO)</NavLink>
                <NavLink className="dropdown-item" exact to={`/Magento`}>Magento E-Commerce Development</NavLink>
                <NavLink className="dropdown-item" exact to={`/WordPress`}>WordPress Development</NavLink>
                <NavLink className="dropdown-item" exact to={`/IOT`}>IOT Development</NavLink>       
                <NavLink className="dropdown-item" exact to={`/Chatbot`}>Chatbot Development</NavLink>
                <NavLink className="dropdown-item" exact to={`/PHP`}>PHP Development</NavLink>
                
                <li class="dropdown-submenu p-0">
                  <NavLink className="dropdown-item pl-2" exact to={`/Hire_Developers`}>Hire Developers</NavLink>
                  <ul class="dropdown-menu  rounded-0 white border-0 z-depth-1">
                    <li class="dropdown p-0">
                      <NavLink className="dropdown-item" exact to={`/Why_Hire_Developer`}>Why Hire Developer?</NavLink>
                    </li>
                    <li class="dropdown p-0">
                      <NavLink className="dropdown-item" exact to={`/Offshore_IT`}>Offshore IT Staffing</NavLink>
                    </li>
                    <li class="dropdown p-0">
                      <NavLink className="dropdown-item" exact to={`/Custom_Programmer`}>Custom Programmer</NavLink>
                    </li>
                    <li class="dropdown p-0">
                      <NavLink className="dropdown-item" exact to={`/Asp_Net_Developer`}>Asp.Net Developer</NavLink>
                    </li>
                    <li class="dropdown p-0">
                      <NavLink className="dropdown-item" exact to={`/Java_Developer`}>Java Developer</NavLink>
                    </li>
                    <li class="dropdown p-0">
                      <NavLink className="dropdown-item" exact to={`/PHP_Developer`}>PHP Developer</NavLink>
                    </li>
                    <li class="dropdown p-0">
                      <NavLink className="dropdown-item" exact to={`/DBMS_Developer`}>DBMS Developer</NavLink> 
                    </li>
                    <li class="dropdown p-0">
                      <NavLink className="dropdown-item" exact to={`/Joomla_Developer`}>Joomla Developer</NavLink> 
                    </li>
                    <li class="dropdown p-0">
                      <NavLink className="dropdown-item" exact to={`/OXID_Development`}>OXID Development</NavLink> 
                    </li>
                  </ul>
                </li>

                {/* <NavLink className="dropdown-item" exact to={`/Hire_Developers`}>Hire Developers</NavLink>
                <NavLink className="dropdown-item" exact to={`/Why_Hire_Developer`}>Why Hire Developer?</NavLink>
                <NavLink className="dropdown-item" exact to={`/Offshore_IT`}>Offshore IT Staffing</NavLink>
                <NavLink className="dropdown-item" exact to={`/Custom_Programmer`}>Custom Programmer</NavLink>
                <NavLink className="dropdown-item" exact to={`/Asp_Net_Developer`}>Asp.Net Developer</NavLink>
                <NavLink className="dropdown-item" exact to={`/Java_Developer`}>Java Developer</NavLink>
                <NavLink className="dropdown-item" exact to={`/PHP_Developer`}>PHP Developer</NavLink>
                <NavLink className="dropdown-item" exact to={`/DBMS_Developer`}>DBMS Developer</NavLink> 
                <NavLink className="dropdown-item" exact to={`/Joomla_Developer`}>Joomla Developer</NavLink> 
                <NavLink className="dropdown-item" exact to={`/OXID_Development`}>OXID Development</NavLink>  */}

                <NavLink className="dropdown-item" exact to={`/Trusted_ERP`}>Enterprice Resource Planning</NavLink>
              </div>
            </div>
            
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to={`/Portfolio`}>PORTFOLIO</NavLink>
          </li>
          <li className="nav-item">
            <div class="dropdown">
              <a class="btn nav-item" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              PRODUCTS&nbsp;<i class="far fa-chevron-down"></i>
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <NavLink className="dropdown-item" exact to={`/Accounting_Software`}>Accounting Software</NavLink>
                <NavLink className="dropdown-item" exact to={`/Billing_Software`}>Billing Software</NavLink>
                <NavLink className="dropdown-item" exact to={`/Web_ERP`}>Web ERP</NavLink>
                <NavLink className="dropdown-item" exact to={`/Web_CRM`}>Web CRM</NavLink>
                {/* <NavLink className="dropdown-item" exact to={`/Hire_Developers`}>Hire Developers</NavLink>
                <NavLink className="dropdown-item" exact to={`/Why_Hire_Developer`}>Why Hire Developer?</NavLink>
                <NavLink className="dropdown-item" exact to={`/Offshore_IT`}>Offshore IT Staffing</NavLink>
                <NavLink className="dropdown-item" exact to={`/Custom_Programmer`}>Custom Programmer</NavLink>
                <NavLink className="dropdown-item" exact to={`/Asp_Net_Developer`}>Asp.Net Developer</NavLink>
                <NavLink className="dropdown-item" exact to={`/Java_Developer`}>Java Developer</NavLink>
                <NavLink className="dropdown-item" exact to={`/PHP_Developer`}>PHP Developer</NavLink>
                <NavLink className="dropdown-item" exact to={`/DBMS_Developer`}>DBMS Developer</NavLink> 
                <NavLink className="dropdown-item" exact to={`/Joomla_Developer`}>Joomla Developer</NavLink> 
                <NavLink className="dropdown-item" exact to={`/OXID_Development`}>OXID Development</NavLink>  */}
              </div>
            </div>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link" exact to={`/Get_Quotation`}>GET QUOTATION</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to={`/Career`}>CAREER</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to={`/Contact_Us`}>CONTACT US</NavLink>
          </li>
        </ul>
      </div>
   </nav>
  );
}

export default NavBar;
