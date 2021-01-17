//BarraHerramientas3.js
//<Link to='/ModalModulos'></Link> 
import React, { Fragment, useState,useContext } from "react";

import trescincosiete from '../assets/trescincosiete.GIF';
import './BarraHerramientas3.css'
import { Link, Redirect } from "react-router-dom";
import ModalModulos from "./ModalModulos";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientas3 = ({t1}) => {
   const {isModalModulosOpen,setIsModalModulosOpen,setT1ModalModulos} = useContext(ModalContext);
    //console.log('BarraHerramientas3 0 t1:',t1);
    console.log('BarraHerramientas3 1 isModalModulosOpen:',isModalModulosOpen);
    //console.log('BarraHerramientas3 2 setIsModalModulosOpen:',setIsModalModulosOpen);
   
    //console.log('BarraHerramientas3 3 setT1ModalModulos:',setT1ModalModulos);
    const onClose=()=>{
       setIsModalModulosOpen(!isModalModulosOpen);
       setT1ModalModulos('Add Modulo');                   
                      
                     };
                          
  return (
    <React.Fragment>
   
    {isModalModulosOpen && <ModalModulos onClose={onClose}/>}
            <img onClick={onClose} className="com__function_bar__icon" src={trescincosiete} alt="xxxxxx" title="Insertar Modulo"/>
         
          
    </React.Fragment>
  );
};

export default BarraHerramientas3;

