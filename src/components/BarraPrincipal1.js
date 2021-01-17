//BarraPrincipal1.js
import React, { Fragment, useState,useContext } from "react";
import windows from '../assets/windows.GIF';
import './BarraPrincipal1.css';
import Sidebar1 from "./Sidebar1.js";
import Notificaciones1 from "./Notificaciones1.js"; 
import { Link, Redirect } from "react-router-dom";
import {ModalContext} from "../context/ModalesContext.js";
import ModalTecnologias from "./ModalTecnologias";
import ModalAgentes from "./ModalAgentes";
import ModalModulos from "./ModalModulos";
import ModalCorrelaciones from "./ModalCorrelaciones";
import ModalStartProcs from "./ModalStartProcs";
import ModalStopProcs from "./ModalStopProcs";
import ModalHistoricos from "./ModalHistoricos";
import ModalConfigs from "./ModalConfigs";
import ModalNewAlarmas from "./ModalNewAlarmas";
import ModalDelAlarmas from "./ModalDelAlarmas";
import ModalCorrActivas from "./ModalCorrActivas";

const BarraPrincipal1 = ({titulo}) => {
   const {isModalTecnologiasOpen,setIsModalTecnologiasOpen,setT1ModalTecnologias,isModalAgentesOpen,setIsModalAgentesOpen,setT1ModalAgentes} = useContext(ModalContext);
   const {isModalModulosOpen,setIsModalModulosOpen,setT1ModalModulos,isModalCorrelacionesOpen,setIsModalCorrelacionesOpen,setT1ModalCorrelaciones} = useContext(ModalContext); 
   const {isModalStartProcsOpen,setIsModalStartProcsOpen,setT1ModalStartProcs,isModalStopProcsOpen,setIsModalStopProcsOpen,setT1ModalStopProcs} = useContext(ModalContext);
   const {isModalHistoricosOpen,setIsModalHistoricosOpen,setT1ModalHistoricos,isModalConfigsOpen,setIsModalConfigsOpen,setT1ModalConfigs} = useContext(ModalContext);
   const {isModalDelAlarmasOpen,setIsModalDelAlarmasOpen,t1ModalDelAlarmas,setT1ModalDelAlarmas,isModalNewAlarmasOpen,setIsModalNewAlarmasOpen,t1ModalNewAlarmas,setT1ModalNewAlarmas,isModalcorrActivasOpen,setIsModalcorrActivasOpen,t1ModalcorrActivas,setT1ModalcorrActivas} = useContext(ModalContext); 
   console.log('BarraPrincipal1....');
   const onCloseTecnologias=()=>{
       setIsModalTecnologiasOpen(!isModalTecnologiasOpen);
       setT1ModalTecnologias('Add Grupo');                   
                      
                     };
     const onCloseTecnologiasDel=()=>{
          setIsModalTecnologiasOpen(!isModalTecnologiasOpen);
          setT1ModalTecnologias('Del Grupo'); 
                        }; 
      const onCloseAgentes=()=>{
       setIsModalAgentesOpen(!isModalAgentesOpen);
       setT1ModalAgentes('Add Agente');                   
                      
                     };  
       const onCloseAgentesDel=()=>{
          setIsModalAgentesOpen(!isModalAgentesOpen);
          setT1ModalAgentes('Del Agente'); 
                        }; 
        const onCloseModulos=()=>{
       setIsModalModulosOpen(!isModalModulosOpen);
       setT1ModalModulos('Add Modulo');                   
                      
                     };  
         const onCloseModulosDel=()=>{
          setIsModalModulosOpen(!isModalModulosOpen);
          setT1ModalModulos('Del Modulo'); 
                        };    
       const onCloseCorrelaciones=()=>{
       setIsModalCorrelacionesOpen(!isModalCorrelacionesOpen);
       setT1ModalCorrelaciones('Add Corr');                   
                      
                     };
         const onCloseCorrelacionesDel=()=>{
          setIsModalCorrelacionesOpen(!isModalCorrelacionesOpen);
          setT1ModalCorrelaciones('Del Corr'); 
                        }; 
          const onCloseStartProcs=()=>{
       setIsModalStartProcsOpen(!isModalStartProcsOpen);
       setT1ModalStartProcs('StartProc');                   
                      
                     }; 
         const onCloseStopProcs=()=>{
       setIsModalStopProcsOpen(!isModalStopProcsOpen);
       setT1ModalStopProcs('StopProc');                   
                      
                     };  
        const onCloseHistoricos=()=>{
       setIsModalHistoricosOpen(!isModalHistoricosOpen);
       setT1ModalHistoricos('Historico');                   
                      
                     }; 
       const onCloseConfigs=()=>{
       setIsModalConfigsOpen(!isModalConfigsOpen);
       setT1ModalConfigs('Config');                   
                      
                     }; 
       const onCloseNewAlarmas=()=>{

       setIsModalNewAlarmasOpen(!isModalNewAlarmasOpen);
       setT1ModalNewAlarmas('Add NewAlarma');                   
                      
                     };
const onCloseDelAlarmas=()=>{

       setIsModalDelAlarmasOpen(!isModalDelAlarmasOpen);
       setT1ModalDelAlarmas('Del Alarma');                   
                      
                     };


const onClosecorrActivas=()=>{

       
       setIsModalcorrActivasOpen(!isModalcorrActivasOpen);
       setT1ModalcorrActivas('Edit Corr');                   
                      
                     };                                                                                                                                                               
  return (
    <Fragment>
     <section className="com__toolbar__bp1">
    
     <nav>
    <ul>
    <li><a href="#">Tecnologias</a>
                    <ul>
				    {isModalTecnologiasOpen && <ModalTecnologias onClose={onCloseTecnologias}/>}
				    <li><a onClick={onCloseTecnologias} href="#">Insertar Tecnologia</a>
				    </li>
				     {isModalTecnologiasOpen && <ModalTecnologias onClose={onCloseTecnologiasDel}/>}
				    <li><a onClick={onCloseTecnologiasDel} href="#">Eliminar Tecnologia</a>
				                             
				    </li>
				    </ul>
	</li>                
    <li><a href="#">Agentes</a>
                   <ul>
                   {isModalAgentesOpen && <ModalAgentes onClose={onCloseAgentes}/>}
				    <li><a onClick={onCloseAgentes} href="#">Insertar Agente</a>
				    </li>
				     {isModalAgentesOpen && <ModalAgentes onClose={onCloseAgentesDel}/>}
				    <li><a onClick={onCloseAgentesDel} href="#">Eliminar Agente</a>
				                             
				    </li>
				    </ul>
    </li>
    <li><a href="#">Modulos</a>
                    <ul>
				    {isModalModulosOpen && <ModalModulos onClose={onCloseModulos}/>}
				    <li><a onClick={onCloseModulos} href="#">Insertar Modulo</a>
				    </li>
				     {isModalModulosOpen && <ModalModulos onClose={onCloseModulosDel}/>}
				    <li><a  onClick={onCloseModulosDel} href="#">Eliminar Modulo</a>
				                             
				    </li>
				    </ul>


    </li>
    <li><a href="#">Correlaciones</a>
                  <ul>
                   {isModalCorrelacionesOpen && <ModalCorrelaciones onClose={onCloseCorrelaciones}/>}
				    <li><a onClick={onCloseCorrelaciones} href="#">Insertar Correlacion</a>
				    </li>
				      {isModalCorrelacionesOpen && <ModalCorrelaciones onClose={onCloseCorrelacionesDel}/>}
				    <li><a onClick={onCloseCorrelacionesDel} href="#">Eliminar Correlacion</a>
				                            
				    </li>
				    </ul>

    </li>
    <li><a href="#">Procesos</a>
                 <ul>
                  {isModalStartProcsOpen && <ModalStartProcs onClose={onCloseStartProcs}/>}
				    <li><a onClick={onCloseStartProcs} href="#">Arrancar Procesos</a>
				    </li>
				    {isModalStopProcsOpen && <ModalStopProcs onClose={onCloseStopProcs}/>}
				    <li><a  onClick={onCloseStopProcs} href="#">Parar Procesos</a>
				                             
				    </li>
				    </ul>


    </li>
    <li><a href="#">Historico</a>
                   <ul>
				     {isModalHistoricosOpen && <ModalHistoricos onClose={onCloseHistoricos}/>}
				    <li><a onClick={onCloseHistoricos} href="#">Abrir Historico</a>
				                            
				    </li>
				    </ul>

    </li>
    <li><a href="#">Comandos</a>
                    <ul>
                     {isModalNewAlarmasOpen && <ModalNewAlarmas onClose={onCloseNewAlarmas}/>} 
				    <li><a onClick={onCloseNewAlarmas} href="#">Insertar Alarma</a>
				    </li>
				    {isModalDelAlarmasOpen && <ModalDelAlarmas onCloseDel={onCloseDelAlarmas}/>} 
				    <li><a onClick={onCloseDelAlarmas} href="#">Eliminar Alarma</a>
				                             
				    </li>
				    </ul>
    </li>
    <li><a href="#">Configuraciones</a>
                     <ul>
				     {isModalConfigsOpen && <ModalConfigs onClose={onCloseConfigs}/>}
				    <li><a onClick={onCloseConfigs} href="#">Abrir Configuracion</a>
				                             
				    </li>
				    </ul>

    </li>
    </ul>

    </nav>
   <div className="com__resto__bp1"> 
   <img className="com__windows-logo" src={windows} alt="windows" />
   <div className="com__info__bp1"> 
    {titulo}
    </div > 
   </div> 
   <nav>
    <ul>
			    <li><a href="#">Correlaciones_Activas</a>
			                    <ul>
							     {isModalcorrActivasOpen && <ModalCorrActivas onCloseEdit={onClosecorrActivas}/>} 
							    <li><a  onClick={onClosecorrActivas} href="#"><Sidebar1/></a>
							     
							    </li>
                                
							    </ul>

				</li>                
			    <li><a href="#">Notificaciones_Presentes</a>
			                   <ul>
							    <li><a href="#"><Notificaciones1/></a>
							    </li>
							    </ul>
			    </li>
    </ul>
   </nav>
   </section>
    </Fragment>
  );
};

export default BarraPrincipal1;