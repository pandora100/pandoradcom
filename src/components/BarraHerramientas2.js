//BarraHerramientas2.js
//<Link to='/ModalAgentes'></Link> 
import React, { Fragment, useState,useContext } from "react";
import ochonuevedos from '../assets/ochonuevedos.GIF';
import './BarraHerramientas2.css'
import { Link, Redirect } from "react-router-dom";
import ModalAgentes from "./ModalAgentes";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientas2 = ({t1}) => {
   const {isModalAgentesOpen,setIsModalAgentesOpen,setT1ModalAgentes} = useContext(ModalContext);
    //console.log('BarraHerramientas2 0 t1:',t1);
    console.log('BarraHerramientas2 1 isModalAgentesOpen:',isModalAgentesOpen);
    //console.log('BarraHerramientas2 2 setIsModalAgentesOpen:',setIsModalAgentesOpen);
   
    //console.log('BarraHerramientas2 3 setT1ModalAgentes:',setT1ModalAgentes);
    const onClose=()=>{
       setIsModalAgentesOpen(!isModalAgentesOpen);
       setT1ModalAgentes('Add Agente');                   
                      
                     };
                          
  return (
    <React.Fragment>
    
       
    {isModalAgentesOpen && <ModalAgentes onClose={onClose}/>}
           <img   onClick={onClose} className="com__function_bar__icon" src={ochonuevedos} alt="xxxxxx" title="Insertar Agente"/>
          
    </React.Fragment>
  );
};

export default BarraHerramientas2;

