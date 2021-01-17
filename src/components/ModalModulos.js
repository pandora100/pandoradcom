//ModalModulos.js
import React, { Fragment, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './ModalModulos.css'
import InputModulo from "./InputModulo.js";
import InputModuloDel from "./InputModuloDel.js";
import ListModulos from "./ListModulos.js";

import {ModalContext} from "../context/ModalesContext.js";
import gindowsoff from '../assets/gindowsoff.GIF' ;
function ModalModulos ({ children,onClose}) {
 //<ListGrupos/> 
 const {t1ModalModulos} = useContext(ModalContext); 
//console.log('ModalModulos 00 children:',children);
//console.log('ModalModulos 1 onClose:',onClose); 
console.log('ModalModulos 32 {t1ModalModulos}:',{t1ModalModulos});
//console.log('ModalModulos 33 t1ModalModulos:',t1ModalModulos); 
let t1ModalModulosdecision=t1ModalModulos;
  return <div className='modal'>
    <div className='modal-content'>
       <header className="new-header">
      <span className="new-header__text">Lista de Modulos</span>
      <img src={gindowsoff} alt="" className="new-header__img" />
    </header>
      <div className='new-container-ch'>  
      {children}
      <br/>
        <br/>
      
       <div className='formulario'> 
       {t1ModalModulosdecision ==='Add Modulo' ? console.log('!!!!!!!!:',true) :  console.log('!!!!!!!!:',false)}  
       {t1ModalModulosdecision ==='Del Modulo' ? console.log('!!!!!!!!:',true) :  console.log('!!!!!!!!:',false)}  
       {t1ModalModulosdecision ==='Add Modulo' ? <InputModulo onClose={onClose}/> : <InputModuloDel onClose={onClose}/>}  
       
      </div>
     {t1ModalModulosdecision ==='Add Modulo' ? <h3 className='titulo'>Añadir Modulo</h3> : <h3 className='titulo'>Eliminar Modulo</h3>}  
      <ListModulos/> 
     <footer className="footer">
      <button onClick={onClose} className="footer__button">
      Cancel
      </button>
      </footer>
     </div>
     </div>
      </div>
}
export default function ModalPortal ({children,onClose}) {
  console.log('Dentro del ModalPortal....'); 
 
  return ReactDOM.createPortal(

    <ModalModulos onClose={onClose}>
    {children}
    </ModalModulos>,
    document.getElementById('root')
  )
 
}
