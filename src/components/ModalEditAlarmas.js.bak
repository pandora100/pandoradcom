//ModalEditAlarmas.js
import React, { Fragment, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './ModalEditAlarmas.css'
import ListSelectAlarm from "./ListSelectAlarm.js";
import cerrar3 from '../assets/custom_logo/cerrar3.PNG' ;
import movilnettest1 from '../assets/custom_logo/movilnettest1.PNG' ;
import {ModalContext} from "../context/ModalesContext.js";
function ModalEditAlarmas ({ children,onClose,fila}) {

 const {t1ModalEditAlarmas} = useContext(ModalContext); 
console.log('ModalEditAlarmas 0 children:',children);
console.log('ModalEditAlarmas 1 onClose:',onClose); 
console.log('ModalEditAlarmas 32 {t1ModalEditAlarmas}:',{t1ModalEditAlarmas});
console.log('ModalEditAlarmas 33 t1ModalEditAlarmas:',t1ModalEditAlarmas); 
console.log('ModalEditAlarmas 34 fila:',fila); 
let t1ModalEditAlarmasdecision=t1ModalEditAlarmas;
  return <div className='modal'>
    <div className='modal-content'>
      <div className='title-bar'>
      <button onClick={onClose} ><img src={cerrar3}/></button>
      <span className='title-bar-text'>View Alarm</span>  
      </div> 
      <div className='title-bar-img'>
      <img src={movilnettest1}/>
      </div> 
      {children}
      <br/>
        <br/>
       <div className='formulario'> 
       
       
      </div>
        <h3 className='titulo'>Alarma Seleccionada</h3>
      <br/>
          <ListSelectAlarm fila={fila}/> 
      
      
     </div>
     </div>
}
export default function ModalPortal ({children,onClose,fila}) {
  console.log('Dentro del ModalPortal....'); 
 
  return ReactDOM.createPortal(

    <ModalEditAlarmas onClose={onClose} fila={fila}>
    {children}
    </ModalEditAlarmas>,
    document.getElementById('root')
  )
 
}
