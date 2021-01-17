//ModalNewAlarmas.js
import React, { Fragment, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './ModalNewAlarmas.css'
import InputDependencia from "./InputDependencia.js";

import {ModalContext} from "../context/ModalesContext.js";
import gindowsoff from '../assets/gindowsoff.GIF' ;
function ModalNewAlarmas ({ children,onClose}) {

 const {t1ModalNewAlarmas} = useContext(ModalContext); 
//console.log('ModalNewAlarmas 0 children:',children);
//console.log('ModalNewAlarmas 1 onClose:',onClose); 
console.log('ModalNewAlarmas 32 {t1ModalNewAlarmas}:',{t1ModalNewAlarmas});
//console.log('ModalNewAlarmas 33 t1ModalNewAlarmas:',t1ModalNewAlarmas); 
let t1ModalNewAlarmasdecision=t1ModalNewAlarmas;
  return <div className='modal'>
    <div className='modal-content'>
       <header className="new-header">
      <span className="new-header__text">Insertar alarma en Pandora</span>
      <img src={gindowsoff} alt="" className="new-header__img" />
    </header>


      <div className='new-container-ch'>  
      {children}
      <br/>

       <h3 className='titulo'>Añadir Alarma</h3>
       
       <div className='formulario'> 
       <InputDependencia onClose={onClose} />
        </div>
      
       
       </div>
      <footer className="footer">
        <button onClick={onClose} className="footer__button">
          Cancel
        </button>
      </footer>
     
     
     </div>
     </div>
}
export default function ModalPortal ({children,onClose}) {
  console.log('Dentro del ModalPortal....'); 
 
  return ReactDOM.createPortal(

    <ModalNewAlarmas onClose={onClose}>
    {children}
    </ModalNewAlarmas>,
    document.getElementById('root')
  )
 
}
