//ModalCorrActivas.js
import React, { Fragment, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './ModalCorrActivas.css'
import construccion from '../assets/construccion.GIF';
import cerrar3 from '../assets/custom_logo/cerrar3.PNG' ;
import movilnettest1 from '../assets/custom_logo/movilnettest1.PNG' ;
import {ModalContext} from "../context/ModalesContext.js";
function ModalCorrActivas ({ children,onCloseEdit}) {

 const {t1ModalCorrActivas} = useContext(ModalContext); 
console.log('ModalCorrActivas 0 children:',children);
console.log('ModalCorrActivas 1 onCloseEdit:',onCloseEdit); 
console.log('ModalCorrActivas 32 {t1ModalCorrActivas}:',{t1ModalCorrActivas});
console.log('ModalCorrActivas 33 t1ModalCorrActivas:',t1ModalCorrActivas); 
let t1ModalCorrActivasdecision=t1ModalCorrActivas;
  return <div className='modal'>
    <div className='modal-content'>
      <div className='title-bar'>
      <button onClick={onCloseEdit} ><img src={cerrar3}/></button>
      <span className='title-bar-text'>Configurar Correlacion</span>  
      </div> 
      <div className='title-bar-img'>
      <img src={movilnettest1}/>
      </div> 
      {children}
      
        <br/>
       <div className='formulario'> 
       
       
      </div>
        <h3 className='titulo'>Correlacion Activa</h3>
             
       <img onClick={onCloseEdit}  src={construccion} style={{"height" : "60%", "width" : "100%"}} />
       
      
      
     </div>
     </div>
}
export default function ModalPortal ({children,onCloseEdit}) {
  console.log('Dentro del ModalPortal....'); 
 
  return ReactDOM.createPortal(

    <ModalCorrActivas onCloseEdit={onCloseEdit}>
    {children}
    </ModalCorrActivas>,
    document.getElementById('root')
  )
 
}
