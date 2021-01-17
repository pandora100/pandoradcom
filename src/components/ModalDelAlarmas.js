//ModalDelAlarmas.js
import React, { Fragment, useState , useContext} from "react";
import ReactDOM from 'react-dom'
import './ModalDelAlarmas.css'
import InputDelAlarma from "./InputDelAlarma.js";
import {ModalContext} from "../context/ModalesContext.js";
import gindowsoff from '../assets/gindowsoff.GIF' ;
function ModalDelAlarmas ({ children,onCloseDel}) {

 const {t1ModalDelAlarmas} = useContext(ModalContext); 
//console.log('ModalDelAlarmas 0 children:',children);
//console.log('ModalDelAlarmas 1 onCloseDel:',onCloseDel); 
console.log('ModalDelAlarmas 32 {t1ModalDelAlarmas}:',{t1ModalDelAlarmas});
//console.log('ModalDelAlarmas 33 t1ModalDelAlarmas:',t1ModalDelAlarmas); 

  return <div className='modal'>
   
     <div className='modal-content'>
       <header className="new-header">
      <span className="new-header__text">eLIMINAR alarma en Pandora</span>
      <img src={gindowsoff} alt="" className="new-header__img" />
    </header>


      <div className='new-container-ch'>  
      {children}
      <br/>

       <h3 className='titulo'>Eliminar Alarma</h3>
       
       <div className='formulario'>
       <InputDelAlarma onCloseDel={onCloseDel}/> 
      </div>
      
     
     
     </div>
      
      <footer className="footer">
      <button onClick={onCloseDel} className="footer__button">
          Cancel
      </button>
      </footer>
      
     </div>
     </div>
}
export default function ModalPortal ({children,onCloseDel}) {
  //console.log('Dentro del ModalPortal....'); 
 
  return ReactDOM.createPortal(

    <ModalDelAlarmas onCloseDel={onCloseDel}>
    {children}
    </ModalDelAlarmas>,
    document.getElementById('root')
  )
 
}
