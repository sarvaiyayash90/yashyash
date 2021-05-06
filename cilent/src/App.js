//import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; // route

//Layouts
import Header from './Components/Layout/Header';
import NavBar from './Components/Layout/NavBar';
// import Slider from './Components/Layout/Slider';
import Footer from './Components/Layout/Footer';


//pages
import Section from './Components/pages/Section';
import Contact_Us from './Components/pages/Contact_Us';
import Career from './Components/pages/Career';
import Get_Quotation from './Components/pages/Get_Quotation';
import Portfolio from './Components/pages/Portfolio';
import Who_We_Are from './Components/pages/Who_We_Are';
import Accounting_Software from './Components/pages/Accounting_Software';
import Billing_Software from './Components/pages/Billing_Software';
import Web_ERP from './Components/pages/Web_ERP';
import Web_CRM from './Components/pages/Web_CRM';
import Responsive_Website_Design from './Components/pages/Responsive_Website_Design';
import Software_Development from './Components/pages/Software_Development';
import SEO from './Components/pages/SEO';
import Magento from './Components/pages/Magento';
import WordPress from './Components/pages/WordPress';
import IOT from './Components/pages/IOT';
import Chatbot from './Components/pages/Chatbot';
import PHP from './Components/pages/PHP';
import Trusted_ERP from './Components/pages/Trusted_ERP';
import Android_App from './Components/pages/Android_App';
import Mobile_App from './Components/pages/Mobile_App';
import Ios_App from './Components/pages/Ios_App';
import React_Native_App from './Components/pages/React_Native_App';
import Ionic_App from './Components/pages/Ionic_App';
import Flutter_App from './Components/pages/Flutter_App';
import Hire_Developers from './Components/pages/Hire_Developers';
import Why_Hire_Developer from './Components/pages/Why_Hire_Developer';
import Offshore_IT from './Components/pages/Offshore_IT';
import Custom_Programmer from './Components/pages/Custom_Programmer';
import Asp_Net_Developer from './Components/pages/Asp_Net_Developer';
import Java_Developer from './Components/pages/Java_Developer';
import PHP_Developer from './Components/pages/PHP_Developer';
import DBMS_Developer from './Components/pages/DBMS_Developer';
import Joomla_Developer from './Components/pages/Joomla_Developer';
import OXID_Development from './Components/pages/OXID_Development';




function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <NavBar/>
        {/* <Slider/> */}
        {/* <Section/> */}
        <Switch>
          <Route exact path="/" component={Section} />
          <Route exact path="/Contact_Us" component={Contact_Us} />
          <Route exact path="/Career" component={Career} />
          <Route exact path="/Get_Quotation" component={Get_Quotation} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Who_We_Are" component={Who_We_Are} />
          <Route exact path="/Accounting_Software" component={Accounting_Software} />
          <Route exact path="/Billing_Software" component={Billing_Software} />
          <Route exact path="/Web_ERP" component={Web_ERP} />
          <Route exact path="/Web_CRM" component={Web_CRM} />
          <Route exact path="/Responsive_Website_Design" component={Responsive_Website_Design} />
          <Route exact path="/Software_Development" component={Software_Development} />
          <Route exact path="/SEO" component={SEO} />
          <Route exact path="/Magento" component={Magento} />
          <Route exact path="/WordPress" component={WordPress} />
          <Route exact path="/IOT" component={IOT} />
          <Route exact path="/Chatbot" component={Chatbot} />
          <Route exact path="/PHP" component={PHP} />
          <Route exact path="/Trusted_ERP" component={Trusted_ERP} />
          <Route exact path="/Android_App" component={Android_App} />
          <Route exact path="/Mobile_App" component={Mobile_App} />
          <Route exact path="/Ios_App" component={Ios_App} />
          <Route exact path="/React_Native_App" component={React_Native_App} />
          <Route exact path="/Ionic_App" component={Ionic_App} />
          <Route exact path="/Flutter_App" component={Flutter_App} />
          <Route exact path="/Hire_Developers" component={Hire_Developers} />
          <Route exact path="/Why_Hire_Developer" component={Why_Hire_Developer} />
          <Route exact path="/Offshore_IT" component={Offshore_IT} />
          <Route exact path="/Custom_Programmer" component={Custom_Programmer} />
          <Route exact path="/Asp_Net_Developer" component={Asp_Net_Developer} />
          <Route exact path="/Java_Developer" component={Java_Developer} />
          <Route exact path="/PHP_Developer" component={PHP_Developer} />
          <Route exact path="/DBMS_Developer" component={DBMS_Developer} />
          <Route exact path="/Joomla_Developer" component={Joomla_Developer} />
          <Route exact path="/OXID_Development" component={OXID_Development} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
