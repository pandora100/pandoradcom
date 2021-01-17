//ModalCorrelaciones.js
import React, { Fragment, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './ModalCorrelaciones.css'
import InputCorrelacion from "./InputCorrelacion.js";
import InputCorrelacionDel from "./InputCorrelacionDel.js";
import ListCorrelaciones from "./ListCorrelaciones.js";

import {ModalContext} from "../context/ModalesContext.js";
import gindowsoff from '../assets/gindowsoff.GIF' ;
function ModalCorrelaciones ({ children,onClose}) {
 //<ListGrupos/> 
 const {t1ModalCorrelaciones} = useContext(ModalContext); 
//console.log('ModalCorrelaciones 00 children:',children);
//console.log('ModalCorrelaciones 1 onClose:',onClose); 
console.log('ModalCorrelaciones 32 {t1ModalCorrelaciones}:',{t1ModalCorrelaciones});
//console.log('ModalCorrelaciones 33 t1ModalCorrelaciones:',t1ModalCorrelaciones); 
let t1ModalCorrelacionesdecision=t1ModalCorrelaciones;
  return <div className='modal'>
    <div className='modal-content'>
       <header className="new-header">
      <span className="new-header__text">Lista de Correlaciones de Expert</span>
      <img src={gindowsoff} alt="" className="new-header__img" />
    </header>
       <div className='new-container-ch'>  
      {children}
      <br/>
      <br/>
      
       <div className='formulario'> 
       {t1ModalCorrelacionesdecision ==='Add Corr' ? console.log('!!!!!!!!:',true) :  console.log('!!!!!!!!:',false)}  
       {t1ModalCorrelacionesdecision ==='Del Corr' ? console.log('!!!!!!!!:',true) :  console.log('!!!!!!!!:',false)}  
       {t1ModalCorrelacionesdecision ==='Add Corr' ? <InputCorrelacion onClose={onClose}/> : <InputCorrelacionDel onClose={onClose}/>}  
       
      </div>
     {t1ModalCorrelacionesdecision ==='Add Corr' ? <h3 className='titulo'>Añadir Correlacion</h3> : <h3 className='titulo'>Eliminar Correlacion</h3>}  
      <ListCorrelaciones/> 
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

    <ModalCorrelaciones onClose={onClose}>
    {children}
    </ModalCorrelaciones>,
    document.getElementById('root')
  )
 
}
