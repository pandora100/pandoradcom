//ModalConfigs.js
import React, { Fragment, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './ModalConfigs.css'
import construccion from '../assets/construccion.GIF';
import cerrar3 from '../assets/custom_logo/cerrar3.PNG' ;
import movilnettest1 from '../assets/custom_logo/movilnettest1.PNG' ;
import {ModalContext} from "../context/ModalesContext.js";


function ModalConfigs ({ children,onClose}) {
 //<ListGrupos/> 
 const {t1ModalConfigs} = useContext(ModalContext); 
console.log('ModalConfigs 0 children:',children);
console.log('ModalConfigs 1 onClose:',onClose); 
console.log('ModalConfigs 32 {t1ModalConfigs}:',{t1ModalConfigs});
console.log('ModalConfigs 33 t1ModalConfigs:',t1ModalConfigs); 
let t1ModalConfigsdecision=t1ModalConfigs;
  return <div className='modal'>
    <div className='modal-content'>
      <div className='title-bar'>
      <button onClick={onClose} ><img src={cerrar3}/></button>
      <span className='title-bar-text'>Configuraciones</span>  
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

    <ModalConfigs onClose={onClose}>
    {children}
    </ModalConfigs>,
    document.getElementById('root')
  )
 
}
