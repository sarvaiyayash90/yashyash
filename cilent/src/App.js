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
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
