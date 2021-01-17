//BarraHerramientas10.js

import React, { Fragment, useState,useContext } from "react";
import cincoseis from '../assets/cincoseis.GIF';
import './BarraHerramientas10.css'
import { Link, Redirect } from "react-router-dom";

const BarraHerramientas10 = ({t1,logout}) => {
  
   
    //console.log('BarraHerramientas10...');
  

                          
  return (
    <React.Fragment>
     
             
          <img  onClick={logout} className="com__function_bar__icon" src={cincoseis} alt="xxxxxx" title="Logout"/>
       
    </React.Fragment>
  );
};

export default BarraHerramientas10;

