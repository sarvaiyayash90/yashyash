import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () =>{
  return (
    <nav className="navbar">
      <div className="col-md-4 uldata">
        <ul className="text-center">
            <li>
                <a href="https://www.google.com"><i class="fab fa-facebook-square"></i></a>
            </li>
            <li>
                <a href="https://www.google.com"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
                <a href="https://www.google.com"><i class="fab fa-google-plus-g"></i></a>
            </li>
            <li>
                <a href="https://www.google.com"><i class="fab fa-instagram"></i></a>
            </li>
        </ul>
      </div>
      <div className="col-md-4">
        <NavLink id="home" className="nav-link" exact to="/"><img src="/Images/logo.png" width="281" height="81"></img></NavLink>
      </div>
      <div className="col-md-4 searchicon">
        <a href="https://www.google.com"><i class="fas fa-search"></i></a>
      </div>
    </nav>
  );
}

export default Header;
