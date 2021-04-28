import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () =>{
  return (
    <nav className="navbar navbar-expand-lg navbarNav">

      <a class="navbar-brand" href="#">WELCOME TO INFILON</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><i style={{margin:'5px 0 0 0',color:'white'}} class="fas fa-bars"></i></span>
      </button>

      <div className="collapse navbar-collapse ulnavdata" id="navbarNav" >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">WHO WE ARE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">WHAT WE OFFER</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">PORTFOLIO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">GET QUOTATION</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CAREER</a>
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
