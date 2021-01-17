//InputAgenteDel.js
import React, { Fragment, useState, useEffect } from "react";
import '@babel/polyfill';
import { toast } from "react-toastify";

const InputAgenteDel = ({onClose}) => {
  const [description, setDescription] = useState("");
  const [grupo, setGrupo] = useState([]);
  const [grupoSeleccionado, setGrupoSeleccionado] = useState("");
   console.log('InputAgenteDel 01 description:',description);
   console.log('InputAgenteDel 02 grupo:',grupo);
  
 const handleChange= evt=>{
  console.log('1 InputAgenteDel 03 handleChange evt.target.value:', evt.target.value); 
  setDescription(evt.target.value);
};

  const handleSubmit = async evt => {
   console.log('InputAgenteDel 04 evt:',evt);
    evt.preventDefault();
  
    console.log('InputAgenteDel 05 evt.target.Agente.value:',evt.target.Agente.value);
    console.log('InputAgenteDel 06 evt.target.Agente.name:',evt.target.Agente.name);
  
     try {
      console.log('InputAgenteDel 07 description:',description);
      const body = { description,grupoSeleccionado };
      console.log('InputAgenteDel 08 body:',body);
      const response = await fetch("http://localhost:5000/dashboard/agentes", {
        method: "DELETE",
          headers: {
            "Content-type": "application/json",
             jwt_token: localStorage.token
          },
        body: JSON.stringify(body)
      });
    
     const parseRes = await response.json();
     
     //toast.success("Agente add Successfully");
     toast.success("Agente deleted Successfully:");
     console.log('InputAgenteDel 09 parseRes:',parseRes );
     //window.location = "/dashboard";
     onClose();

    } catch (err) {
      console.error(err.message);
       toast.error(parseRes);
    }

  };

  const obtenerInfoInicial= async ()=>{
  console.log('InputAgenteDel A obtenerInfoInicial ejecutandose.'); 
  try {
      const response = await fetch("http://localhost:5000/dashboard/grupos", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });
      const jsonData = await response.json();
      console.log('InputAgenteDel B obtenerInfoInicial jsonData:',jsonData);
      
       const gifs=jsonData.map(obj=>{
       	console.log('InputAgenteDel C obtenerInfoInicial obj:',obj);
        let nombre = obj.nombre;
        
       return nombre;

       
       });
       console.log('InputAgenteDel E obtenerInfoInicial gifs:',gifs);
       setGrupo(gifs);
       console.log('InputAgenteDel F obtenerInfoInicial grupo:',grupo);
    } catch (err) {
      console.error(err.message);
    }
};

const handleTypeChange = (e) => {
console.log('InputAgenteDel handleTypeChange value:',e.target.value);
grupo[e.target.value];
setGrupoSeleccionado(e.target.value);
}

 useEffect (()=>{

 obtenerInfoInicial();

 },[]);

   
  return (
    <React.Fragment>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Agente"
          value={description}
          onChange={handleChange}
          placeholder="Introduzca nombre del agente"
           style={{ "width" : "200px"}}
        />
       <select onChange={handleTypeChange}>
        {grupo.map((grup, key) => <option key={key} value={grup}>{grup}</option>)}

          </select>
        <button type="submit">Eliminar Agente</button>
      </form>

    </React.Fragment>
  );
};

export default InputAgenteDel;

