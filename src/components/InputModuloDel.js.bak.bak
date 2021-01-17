//InputModuloDel.js
import React, { Fragment, useState, useEffect } from "react";
import '@babel/polyfill';
import { toast } from "react-toastify";

const InputModuloDel = ({onClose}) => {
  const [description, setDescription] = useState("");
  const [grupo, setGrupo] = useState([]);
  const [grupoSeleccionado, setGrupoSeleccionado] = useState("");
   console.log('InputModuloDel 01 description:',description);
   console.log('InputModuloDel 02 grupo:',grupo);
  
 const handleChange= evt=>{
  console.log('1 InputModuloDel 03 handleChange evt.target.value:', evt.target.value); 
  setDescription(evt.target.value);
};

  const handleSubmit = async evt => {
   console.log('InputModuloDel 04 evt:',evt);
    evt.preventDefault();
  
    console.log('InputModuloDel 05 evt.target.Modulo.value:',evt.target.Modulo.value);
    console.log('InputModuloDel 06 evt.target.Modulo.name:',evt.target.Modulo.name);
  
     try {
      console.log('InputModuloDel 07 description:',description);
      const body = { description,grupoSeleccionado };
      console.log('InputModuloDel 08 body:',body);
      const response = await fetch("http://localhost:5000/dashboard/modulos", {
        method: "DELETE",
          headers: {
            "Content-type": "application/json",
             jwt_token: localStorage.token
          },
        body: JSON.stringify(body)
      });
    
     const parseRes = await response.json();
     
     //toast.success("Modulo add Successfully");
     toast.success("Modulo deleted Successfully:");
     console.log('InputModuloDel 09 parseRes:',parseRes );
     //window.location = "/dashboard";
     onClose();

    } catch (err) {
      console.error(err.message);
       toast.error(parseRes);
    }

  };

  const obtenerInfoInicial= async ()=>{
  console.log('InputModuloDel A obtenerInfoInicial ejecutandose.'); 
  try {
      const response = await fetch("http://localhost:5000/dashboard/grupos", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });
      const jsonData = await response.json();
      console.log('InputModuloDel B obtenerInfoInicial jsonData:',jsonData);
      
       const gifs=jsonData.map(obj=>{
        console.log('InputModuloDel C obtenerInfoInicial obj:',obj);
        let nombre = obj.nombre;
        
       return nombre;

       
       });
       console.log('InputModuloDel E obtenerInfoInicial gifs:',gifs);
       setGrupo(gifs);
       console.log('InputModuloDel F obtenerInfoInicial grupo:',grupo);
    } catch (err) {
      console.error(err.message);
    }
};

const handleTypeChange = (e) => {
console.log('InputModuloDel handleTypeChange value:',e.target.value);
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
        <button type="submit">Eliminar Modulo</button>
      </form>

    </React.Fragment>
  );
};

export default InputModuloDel;
