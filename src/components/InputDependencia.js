//InputDependencia.js
import React, { Fragment, useState, useEffect,useContext } from "react";
import '@babel/polyfill';
import { toast } from "react-toastify";
import {RemoteContext} from "../context/RemotosContext.js";
import moment from "moment";
import './InputDependencia.css'
const InputDependencia = ({onClose}) => {
 
  const {tecnologias,agentes,modulos} = useContext(RemoteContext);
  const [tecnologiasSeleccionado, setTecnologiasSeleccionado] = useState(-1);
  const [agentesSeleccionado, setAgentesSeleccionado] = useState(-1);
  const [modulosSeleccionado, setModulosSeleccionado] = useState(-1);
 
  const [criticity, setCriticity] = useState([
             { "level": "1"},
             { "level": "2"},
             { "level": "3"},
             { "level": "4"},
             { "level": "5"}
        ]);
      /*  */
  const [criticitySeleccionado, setCriticitySeleccionado] = useState(-1);
  const estado = [
             { "estado": "0"},
             { "estado": "1"}
        ];
  const [estadoSeleccionado, setEstadoSeleccionado] = useState(-1);
  const [timestamp, setTimestamp] = useState('');
  const [utimestamp, setUtimestamp] = useState('');
  const [usercomment, setUsercomment] = useState('');
  /*
  //console.log('InputDependencia 01 tecnologias:',tecnologias);
  //console.log('InputDependencia 02 agentes:',agentes);
  //console.log('InputDependencia 03 modulos:',modulos);
  //console.log('InputDependencia 04 criticity:',criticity);
  //console.log('InputDependencia 05 estado:',estado);
  //console.log('InputDependencia 06 timestamp:',timestamp);
  //console.log('InputDependencia 07 utimestamp:',utimestamp);
 */
 console.log('InputDependencia 07.5 Usercomment:',usercomment);
  

  const handleSubmit = async evt => {
  
    evt.preventDefault();
    // //console.log('InputDependencia 08 handleSubmit evt:',evt);
    //////
     try {
    
      const body = { tecnologiasSeleccionado,agentesSeleccionado,modulosSeleccionado,criticitySeleccionado,estadoSeleccionado,timestamp,utimestamp,user_comment};
      //console.log('InputDependencia 12 body:',body);
      const response = await fetch("http://localhost:5000/dashboard/eventos", {
        method: "POST",
          headers: {
            "Content-type": "application/json",
             jwt_token: localStorage.token
          },
       
        body: JSON.stringify(body)
      });
    
     //const parseRes = await response.json();
     
     //toast.success("agentes add Successfully");
     toast.success("Alarma add Successfully:");
     ////console.log('InputDependencia 13 parseRes:',parseRes );
     //window.location = "/dashboard";
     onClose();

    } catch (err) {
      console.error(err.message);
       toast.error(parseRes);
    }
  };
  
 const handleTimestamp = (e) => {
////console.log('InputDependencia handleTimestamp value:',e.target.value);

timestamp[e.target.value];
setTimestamp(e.target.value);
} 
 const handleUtimestamp = (e) => {
////console.log('InputDependencia handleUtimestamp value:',e.target.value);

utimestamp[e.target.value];
setUtimestamp(e.target.value);
} 
const handleUsercomment = (e) => {
////console.log('InputDependencia handleUsercomment value:',e.target.value);

usercomment[e.target.value];
setUsercomment(e.target.value);
} 
const handleTypeChangeTecnologias = (e) => {
////console.log('InputDependencia handleTypeChangeTecnologias value:',e.target.value);

tecnologias[e.target.value];
setTecnologiasSeleccionado(e.target.value);
}
const handleTypeChangeAgentes = (e) => {
////console.log('InputDependencia handleTypeChangeAgentes value:',e.target.value);
agentes[e.target.value];
setAgentesSeleccionado(e.target.value);
}
const handleTypeChangeModulos = (e) => {
////console.log('InputDependencia handleTypeChangeModulos value:',e.target.value);
modulos[e.target.value];
setModulosSeleccionado(e.target.value);
}
const handleTypeChangeCriticity = (e) => {
////console.log('InputDependencia handleTypeChangeCriticity value:',e.target.value);
criticity[e.target.value];
setCriticitySeleccionado(e.target.value);
}
const handleTypeChangeEstado = (e) => {
////console.log('InputDependencia handleTypeChangeEstado value:',e.target.value);
estado[e.target.value];

setEstadoSeleccionado(e.target.value);
}

useEffect (()=>{
let CurrentDate = moment().format('YYYY-MM-DD HH:mm:ss');
//let CurrentDate = moment().format('LLL');
////console.log('InputDependencia useEffect CurrentDate:',CurrentDate);
//let CurrentDate = moment().format('DD-MM-YYYY HH:mm:ss');
//console.log('InputDependencia useEffect CurrentDate:',CurrentDate);
moment().valueOf()
 setTimestamp(CurrentDate);
 setUtimestamp(moment().unix());
 },[]);

/*
 const grupo = [
             { "id_grupo" :"1" ,"nombre": "HUAWEI_GSM"},
             { "id_grupo" :"2" ,"nombre": "FLEXENT"}
        ];
const agentes = [
             { "id_agente" :"5","nombre": "HUAWEI_GSM_BTS_275_ACARIGUA","id_grupo" :"1"},
             { "id_agente" :"6","nombre": "FLEXENT_LC2_BASE_STATION_1","id_grupo" :"2" }
        ];
 const modulos = [
             {  "id_modulo" :"7" ,"nombre": "ABIS_SIGNALING_LINK","id_grupo" :"1"},
             {  "id_modulo" :"8" ,"nombre": "FALLA DE FUERZA AC","id_grupo" :"2"}
        ];       
 const criticity = [
             { "level": "1"},
             { "level": "2"},
             { "level": "3"},
             { "level": "4"},
             { "level": "5"}
        ];

 const estados = [
             { "estado": "0"},
             { "estado": "1"}
        ];
     */   
  
  return (
    <React.Fragment>
       <div className='new-container-ch'> 
      <form onSubmit={handleSubmit}>
       
         <select onChange={handleTypeChangeTecnologias}>
        <option value={-1}>Seleccione grupo</option>
        {tecnologias.map((grup, key) => <option key={grup.id_grupo} value={grup.nombre}>{grup.nombre}</option>)}
          </select>
        <br/>
        <br/>  
       <select onChange={handleTypeChangeAgentes}>
        <option value={-1}>Seleccione agente</option>
        {agentes.map((agen, key) => <option key={agen.id_agente} value={agen.nombre}>{agen.nombre}</option>)}
          </select> 
        <select onChange={handleTypeChangeModulos}>
        <option value={-1}>Seleccione modulo</option>
        {modulos.map((modu, key) => <option key={modu.id_modulo} value={modu.nombre}>{modu.nombre}</option>)}
          </select> 
       
        <br/>
        <br/>
         <select onChange={handleTypeChangeCriticity}>
        <option value={-1}>Seleccione Criticidad</option>
        {criticity.map((critic, key) => <option key={key} value={critic.level}>{critic.level}</option>)}
        </select>  
         <select onChange={handleTypeChangeEstado}>
        <option value={-1}>Seleccione Estado</option>
        {estado.map((esta, key) => <option key={key} value={esta.estado}>{esta.estado}</option>)}
        </select>
        <br/>
        <br/>
       
         <input
          type="text"
          name="timestamp"
          value={timestamp}
          onChange={handleTimestamp}
          style={{ "width" : "150px"}}
        />
        <input
          type="text"
          name="utimestamp"
          value={utimestamp}
          onChange={handleUtimestamp}
           style={{ "width" : "75px"}}
        /> 
        <input
          type="text"
          name="utimestamp"
          value={usercomment}
          onChange={handleUsercomment}
          placeholder="Añadir comentario"
           style={{ "width" : "175px"}}
        /> 
        
        <br/>
        <br/>        
        <button type="submit">Insertar Alarma</button>
        </form> 
        </div>
    </React.Fragment>
  );
};

export default InputDependencia;

