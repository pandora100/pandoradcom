//InputCorrelacionDel.js
import React, { Fragment, useState, useEffect } from "react";
import '@babel/polyfill';
import { toast } from "react-toastify";

const InputCorrelacionDel = ({onClose}) => {
  const [description, setDescription] = useState("");
  const [grupo, setGrupo] = useState([]);
  const [grupoSeleccionado, setGrupoSeleccionado] = useState("");
   console.log('InputCorrelacionDel 01 description:',description);
   console.log('InputCorrelacionDel 02 grupo:',grupo);
  
 const handleChange= evt=>{
  console.log('1 InputCorrelacionDel 03 handleChange evt.target.value:', evt.target.value); 
  setDescription(evt.target.value);
};

  const handleSubmit = async evt => {
   console.log('InputCorrelacionDel 04 evt:',evt);
    evt.preventDefault();
  
    console.log('InputCorrelacionDel 05 evt.target.Correlacion.value:',evt.target.Correlacion.value);
    console.log('InputCorrelacionDel 06 evt.target.Correlacion.name:',evt.target.Correlacion.name);
  
     try {
      console.log('InputCorrelacionDel 07 description:',description);
      const body = { description,grupoSeleccionado };
      console.log('InputCorrelacionDel 08 body:',body);
      const response = await fetch("http://localhost:5000/dashboard/correlaciones", {
        method: "DELETE",
          headers: {
            "Content-type": "application/json",
             jwt_token: localStorage.token
          },
        body: JSON.stringify(body)
      });
    
     const parseRes = await response.json();
     
     //toast.success("Correlacion add Successfully");
     toast.success("Correlacion deleted Successfully:");
     console.log('InputCorrelacionDel 09 parseRes:',parseRes );
     //window.location = "/dashboard";
     onClose();

    } catch (err) {
      console.error(err.message);
       toast.error(parseRes);
    }

  };

  const obtenerInfoInicial= async ()=>{
  console.log('InputCorrelacionDel A obtenerInfoInicial ejecutandose.'); 
  try {
      const response = await fetch("http://localhost:5000/dashboard/grupos", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });
      const jsonData = await response.json();
      console.log('InputCorrelacionDel B obtenerInfoInicial jsonData:',jsonData);
      
       const gifs=jsonData.map(obj=>{
        console.log('InputCorrelacionDel C obtenerInfoInicial obj:',obj);
        let nombre = obj.nombre;
        
       return nombre;

       
       });
       console.log('InputCorrelacionDel E obtenerInfoInicial gifs:',gifs);
       setGrupo(gifs);
       console.log('InputCorrelacionDel F obtenerInfoInicial grupo:',grupo);
    } catch (err) {
      console.error(err.message);
    }
};

const handleTypeChange = (e) => {
console.log('InputCorrelacionDel handleTypeChange value:',e.target.value);
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
          name="Correlacion"
          value={description}
          onChange={handleChange}
          placeholder="Introduzca nombre de correlacion"
           style={{ "width" : "200px"}}
        />
       <select onChange={handleTypeChange}>
        {grupo.map((grup, key) => <option key={key} value={grup}>{grup}</option>)}

          </select>
        <button type="submit">Eliminar Correlacion</button>
      </form>

    </React.Fragment>
  );
};

export default InputCorrelacionDel;
