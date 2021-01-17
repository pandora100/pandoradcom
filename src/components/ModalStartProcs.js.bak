//ModalStartProcs.js
import React, { Fragment, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './ModalStartProcs.css'
import construccion from '../assets/construccion.GIF';
import cerrar3 from '../assets/custom_logo/cerrar3.PNG' ;
import movilnettest1 from '../assets/custom_logo/movilnettest1.PNG' ;
import {ModalContext} from "../context/ModalesContext.js";


function ModalStartProcs ({ children,onClose}) {
 //<ListGrupos/> 
 const {t1ModalStartProcs} = useContext(ModalContext); 
console.log('ModalStartProcs 0 children:',children);
console.log('ModalStartProcs 1 onClose:',onClose); 
console.log('ModalStartProcs 32 {t1ModalStartProcs}:',{t1ModalStartProcs});
console.log('ModalStartProcs 33 t1ModalStartProcs:',t1ModalStartProcs); 
let t1ModalStartProcsdecision=t1ModalStartProcs;
  return <div className='modal'>
    <div className='modal-content'>
      <div className='title-bar'>
      <button onClick={onClose} ><img src={cerrar3}/></button>
      <span className='title-bar-text'>Start Reglas de Expert</span>  
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

    <ModalStartProcs onClose={onClose}>
    {children}
    </ModalStartProcs>,
    document.getElementById('root')
  )
 
}
