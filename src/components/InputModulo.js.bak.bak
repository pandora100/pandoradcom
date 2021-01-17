//InputModulo.js
import React, { Fragment, useState, useEffect } from "react";
import '@babel/polyfill';
import { toast } from "react-toastify";

const InputModulo = ({onClose}) => {
  const [description, setDescription] = useState("");
  const [grupo, setGrupo] = useState([]);
  const [grupoSeleccionado, setGrupoSeleccionado] = useState("");
   console.log('InputModulo 01 description:',description);
   console.log('InputModulo 02 grupo:',grupo);
  
 const handleChange= evt=>{
  console.log('1 InputModulo 03 handleChange evt.target.value:', evt.target.value); 
  setDescription(evt.target.value);
};

  const handleSubmit = async evt => {
   console.log('InputModulo 04 evt:',evt);
    evt.preventDefault();
  
    console.log('InputModulo 05 evt.target.Modulo.value:',evt.target.Modulo.value);
    console.log('InputModulo 06 evt.target.Modulo.name:',evt.target.Modulo.name);
  
     try {
      console.log('InputModulo 07 description:',description);
      const body = { description,grupoSeleccionado };
      console.log('InputModulo 08 body:',body);
      const response = await fetch("http://localhost:5000/dashboard/modulos", {
        method: "POST",
          headers: {
            "Content-type": "application/json",
             jwt_token: localStorage.token
          },
       
        body: JSON.stringify(body)
      });
    
     const parseRes = await response.json();
     
     //toast.success("Modulo add Successfully");
     toast.success("Modulo add Successfully:");
     console.log('InputModulo 09 parseRes:',parseRes );
     //window.location = "/dashboard";
     onClose();

    } catch (err) {
      console.error(err.message);
       toast.error(parseRes);
    }

  };

  const obtenerInfoInicial= async ()=>{
  console.log('InputModulo A obtenerInfoInicial ejecutandose.'); 
  try {
      const response = await fetch("http://localhost:5000/dashboard/grupos", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });
      const jsonData = await response.json();
      console.log('InputModulo B obtenerInfoInicial jsonData:',jsonData);
      
       const gifs=jsonData.map(obj=>{
        console.log('InputModulo C obtenerInfoInicial obj:',obj);
        let nombre = obj.nombre;
        
       return nombre;

       
       });
       console.log('InputModulo E obtenerInfoInicial gifs:',gifs);
       setGrupo(gifs);
       console.log('InputModulo F obtenerInfoInicial grupo:',grupo);
    } catch (err) {
      console.error(err.message);
    }
};

const handleTypeChange = (e) => {
console.log('InputModulo handleTypeChange value:',e.target.value);
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
          name="Modulo"
          value={description}
          onChange={handleChange}
          placeholder="Introduzca nombre del modulo"
          style={{ "width" : "200px"}}
        />
       <select onChange={handleTypeChange}>
        {grupo.map((grup, key) => <option key={key} value={grup}>{grup}</option>)}

          </select>
        <button type="submit">Nuevo Modulo</button>
      </form>

    </React.Fragment>
  );
};

export default InputModulo;
