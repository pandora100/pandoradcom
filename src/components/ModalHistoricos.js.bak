//ModalHistoricos.js
import React, { Fragment, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './ModalHistoricos.css'
import construccion from '../assets/construccion.GIF';
import cerrar3 from '../assets/custom_logo/cerrar3.PNG' ;
import movilnettest1 from '../assets/custom_logo/movilnettest1.PNG' ;
import {ModalContext} from "../context/ModalesContext.js";


function ModalHistoricos ({ children,onClose}) {
 //<ListGrupos/> 
 const {t1ModalHistoricos} = useContext(ModalContext); 
console.log('ModalHistoricos 0 children:',children);
console.log('ModalHistoricos 1 onClose:',onClose); 
console.log('ModalHistoricos 32 {t1ModalHistoricos}:',{t1ModalHistoricos});
console.log('ModalHistoricos 33 t1ModalHistoricos:',t1ModalHistoricos); 
let t1ModalHistoricosdecision=t1ModalHistoricos;
  return <div className='modal'>
    <div className='modal-content'>
      <div className='title-bar'>
      <button onClick={onClose} ><img src={cerrar3}/></button>
      <span className='title-bar-text'>Historico de Alarmas</span>  
      </div> 
      <div className='title-bar-img'>
      <img src={movilnettest1}/>
      
      </div> 
      {children}
      <br/>
        <br/>
       
      
      <div className='formulario'>
      
      </div>
      <img onClick={onClose}  src={construccion} style={{"height" : "60%", "width" : "100%"}} />
      <br/>
        <br/> 
      
     </div>
     </div>
}
export default function ModalPortal ({children,onClose}) {
  console.log('Dentro del ModalPortal....'); 
 
  return ReactDOM.createPortal(

    <ModalHistoricos onClose={onClose}>
    {children}
    </ModalHistoricos>,
    document.getElementById('root')
  )
 
}
