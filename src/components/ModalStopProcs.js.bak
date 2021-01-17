//ModalStopProcs.js
import React, { Fragment, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './ModalStopProcs.css'
import construccion from '../assets/construccion.GIF';
import cerrar3 from '../assets/custom_logo/cerrar3.PNG' ;
import movilnettest1 from '../assets/custom_logo/movilnettest1.PNG' ;
import {ModalContext} from "../context/ModalesContext.js";


function ModalStopProcs ({ children,onClose}) {
 //<ListGrupos/> 
 const {t1ModalStopProcs} = useContext(ModalContext); 
console.log('ModalStopProcs 0 children:',children);
console.log('ModalStopProcs 1 onClose:',onClose); 
console.log('ModalStopProcs 32 {t1ModalStopProcs}:',{t1ModalStopProcs});
console.log('ModalStopProcs 33 t1ModalStopProcs:',t1ModalStopProcs); 
let t1ModalStopProcsdecision=t1ModalStopProcs;
  return <div className='modal'>
    <div className='modal-content'>
      <div className='title-bar'>
      <button onClick={onClose} ><img src={cerrar3}/></button>
      <span className='title-bar-text'>Stop Reglas de Expert</span>  
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

    <ModalStopProcs onClose={onClose}>
    {children}
    </ModalStopProcs>,
    document.getElementById('root')
  )
 
}
