//BarraHerramientasDel4.js
//<Link to='/ModalCorrelaciones'></Link> 
import React, { Fragment, useState,useContext } from "react";
import dosdosnueve from '../assets/dosdosnueve.GIF';
import './BarraHerramientasDel2.css'
import { Link, Redirect } from "react-router-dom";
import ModalCorrelaciones from "./ModalCorrelaciones";
import {ModalContext} from "../context/ModalesContext.js";
const BarraHerramientasDel2 = ({t1}) => {
   const {isModalCorrelacionesOpen,setIsModalCorrelacionesOpen,setT1ModalCorrelaciones} = useContext(ModalContext);
   //console.log('BarraHerramientasDel2 0 t1:',t1);
    console.log('BarraHerramientasDel2 1 isModalCorrelacionesOpen:',isModalCorrelacionesOpen);
    //console.log('BarraHerramientasDel2 2 setIsModalCorrelacionesOpen:',setIsModalCorrelacionesOpen);
    //console.log('BarraHerramientassDel 3 setT1ModalCorrelaciones:',setT1ModalCorrelaciones);
    const onClose=()=>{
          setIsModalCorrelacionesOpen(!isModalCorrelacionesOpen);
          setT1ModalCorrelaciones('Del Corr'); 
                        };
  return (
    <React.Fragment>
    
    {isModalCorrelacionesOpen && <ModalCorrelaciones onClose={onClose}/>}
         <img onClick={onClose} className="com__function_bar__icon" src={dosdosnueve} alt="xxxxxx" title="Eliminar Correlacion"/>
         
          
    </React.Fragment>
  );
};

export default BarraHerramientasDel2;

