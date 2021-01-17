//Header.js
import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import boliv2 from '../assets/boliv2.GIF';
import './Header.css'
const Header = () => {
   console.log('Header....');  
  return (
    <React.Fragment>
     <div className='header-title-bar-img-container'>
     <div className='header-title-bar-img'>
       <img src={boliv2}/>
       </div>
       </div>
     <div className='gf-header-container'>
      <div className='gf-header-container-left'>
      <Link to='#'><i className="fas fa-tv"></i>
        {" "}Administracion de Gestores Cirs
        </Link>
        </div>
      <div className='gf-header-container-right'>  
      <Link to='/login'>
          Login
        </Link>
        <Link to='/register'>
          Register
        </Link>
        </div>
   
    </div>
    </React.Fragment>
  );
};

export default Header;