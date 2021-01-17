//ModalDelAlarmas.js
import React, { Fragment, useState , useContext} from "react";
import ReactDOM from 'react-dom'
import './ModalDelAlarmas.css'
import InputDelAlarma from "./InputDelAlarma.js";
import cerrar3 from '../assets/custom_logo/cerrar3.PNG' ;
import movilnettest1 from '../assets/custom_logo/movilnettest1.PNG' ;
import {ModalContext} from "../context/ModalesContext.js";
function ModalDelAlarmas ({ children,onCloseDel}) {

 const {t1ModalDelAlarmas} = useContext(ModalContext); 
console.log('ModalDelAlarmas 0 children:',children);
console.log('ModalDelAlarmas 1 onCloseDel:',onCloseDel); 
console.log('ModalDelAlarmas 32 {t1ModalDelAlarmas}:',{t1ModalDelAlarmas});
console.log('ModalDelAlarmas 33 t1ModalDelAlarmas:',t1ModalDelAlarmas); 

  return <div className='modal'>
    <div className='modal-content'>
      <div className='title-bar'>
      <button onClick={onCloseDel} ><img src={cerrar3}/></button>
      <span className='title-bar-text'>Eliminar Alarma</span>  
      </div> 
      <div className='title-bar-img'>
      <img src={movilnettest1}/>
      </div> 
      {children}
      <br/>

       <h3 className='titulo'>Eliminar Alarma</h3>
       
       <div className='formulario'>
       <InputDelAlarma onCloseDel={onCloseDel}/> 
      </div>
       
      
      
      
     </div>
     </div>
}
export default function ModalPortal ({children,onCloseDel}) {
  console.log('Dentro del ModalPortal....'); 
 
  return ReactDOM.createPortal(

    <ModalDelAlarmas onCloseDel={onCloseDel}>
    {children}
    </ModalDelAlarmas>,
    document.getElementById('root')
  )
 
}
