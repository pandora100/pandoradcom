//BarraHerramientas4.js
//<Link to='/ModalCorrelaciones'></Link> 
import React, { Fragment, useState,useContext } from "react";

import dostresocho from '../assets/dostresocho.GIF';
import './BarraHerramientas4.css'
import { Link, Redirect } from "react-router-dom";
import ModalCorrelaciones from "./ModalCorrelaciones";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientas4 = ({t1}) => {
   const {isModalCorrelacionesOpen,setIsModalCorrelacionesOpen,setT1ModalCorrelaciones} = useContext(ModalContext);
    //console.log('BarraHerramientas4 0 t1:',t1);
    console.log('BarraHerramientas4 1 isModalCorrelacionesOpen:',isModalCorrelacionesOpen);
    //console.log('BarraHerramientas4 2 setIsModalCorrelacionesOpen:',setIsModalCorrelacionesOpen);
   
    //console.log('BarraHerramientas4 3 setT1ModalCorrelaciones:',setT1ModalCorrelaciones);
    const onClose=()=>{
       setIsModalCorrelacionesOpen(!isModalCorrelacionesOpen);
       setT1ModalCorrelaciones('Add Corr');                   
                      
                     };
                          
  return (
    <React.Fragment>
    
    {isModalCorrelacionesOpen && <ModalCorrelaciones onClose={onClose}/>}
         <img onClick={onClose} className="com__function_bar__icon" src={dostresocho} alt="xxxxxx" title="Insertar Correlacion"/> 
          
    </React.Fragment>
  );
};

export default BarraHerramientas4;

