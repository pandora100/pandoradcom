//ModalAgentes.js
import React, { Fragment, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './ModalAgentes.css'
import InputAgente from "./InputAgente.js";
import InputAgenteDel from "./InputAgenteDel.js";
import ListAgentes from "./ListAgentes.js";
import {ModalContext} from "../context/ModalesContext.js";
import gindowsoff from '../assets/gindowsoff.GIF' ;
function ModalAgentes ({ children,onClose}) {
 //<ListGrupos/> 
 const {t1ModalAgentes} = useContext(ModalContext); 
//console.log('ModalAgentes 00 children:',children);
//console.log('ModalAgentes 1 onClose:',onClose); 
console.log('ModalAgentes 32 {t1ModalAgentes}:',{t1ModalAgentes});
//console.log('ModalAgentes 33 t1ModalAgentes:',t1ModalAgentes); 
let t1ModalAgentesdecision=t1ModalAgentes;
//


  return <div className='modal'>



      <div className='modal-content'>
      <header className="new-header">
      <span className="new-header__text">Lista de Agentes</span>
      <img src={gindowsoff} alt="" className="new-header__img" />
    </header>

      
      <div className='new-container-ch'>  
      {children}
      <br/>
        <br/>
      
       <div className='formulario'> 
       {t1ModalAgentesdecision ==='Add Agente' ? console.log('!!!!!!!!:',true) :  console.log('!!!!!!!!:',false)}  
       {t1ModalAgentesdecision ==='Del Agente' ? console.log('!!!!!!!!:',true) :  console.log('!!!!!!!!:',false)}  
       {t1ModalAgentesdecision ==='Add Agente' ? <InputAgente onClose={onClose}/> : <InputAgenteDel onClose={onClose}/>}  
       
      </div>
      {t1ModalAgentesdecision ==='Add Agente' ? <h3 className='titulo'>Añadir Agente</h3> : <h3 className='titulo'>Eliminar Agente</h3>}  
      

      <ListAgentes/> 
      

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

    <ModalAgentes onClose={onClose}>
    {children}
    </ModalAgentes>,
    document.getElementById('root')
  )
 
}
