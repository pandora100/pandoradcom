//InputCorrelacion.js
import React, { Fragment, useState, useEffect } from "react";
import '@babel/polyfill';
import { toast } from "react-toastify";

const InputCorrelacion = ({onClose}) => {
  const [description, setDescription] = useState("");
  const [grupo, setGrupo] = useState([]);
  const [grupoSeleccionado, setGrupoSeleccionado] = useState("");
   console.log('InputCorrelacion 01 description:',description);
   console.log('InputCorrelacion 02 grupo:',grupo);
  
 const handleChange= evt=>{
  console.log('1 InputCorrelacion 03 handleChange evt.target.value:', evt.target.value); 
  setDescription(evt.target.value);
};

  const handleSubmit = async evt => {
   console.log('InputCorrelacion 04 evt:',evt);
    evt.preventDefault();
  
    console.log('InputCorrelacion 05 evt.target.Correlacion.value:',evt.target.Correlacion.value);
    console.log('InputCorrelacion 06 evt.target.Correlacion.name:',evt.target.Correlacion.name);
  
     try {
      console.log('InputCorrelacion 07 description:',description);
      const body = { description,grupoSeleccionado };
      console.log('InputCorrelacion 08 body:',body);
      const response = await fetch("http://localhost:5000/dashboard/Correlaciones", {
        method: "POST",
          headers: {
            "Content-type": "application/json",
             jwt_token: localStorage.token
          },
       
        body: JSON.stringify(body)
      });
    
     const parseRes = await response.json();
     
     //toast.success("Correlacion add Successfully");
     toast.success("Correlacion add Successfully:");
     console.log('InputCorrelacion 09 parseRes:',parseRes );
     //window.location = "/dashboard";
     onClose();

    } catch (err) {
      console.error(err.message);
       toast.error(parseRes);
    }

  };

  const obtenerInfoInicial= async ()=>{
  console.log('InputCorrelacion A obtenerInfoInicial ejecutandose.'); 
  try {
      const response = await fetch("http://localhost:5000/dashboard/grupos", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });
      const jsonData = await response.json();
      console.log('InputCorrelacion B obtenerInfoInicial jsonData:',jsonData);
      
       const gifs=jsonData.map(obj=>{
        console.log('InputCorrelacion C obtenerInfoInicial obj:',obj);
        let nombre = obj.nombre;
        
       return nombre;

       
       });
       console.log('InputCorrelacion E obtenerInfoInicial gifs:',gifs);
       setGrupo(gifs);
       console.log('InputCorrelacion F obtenerInfoInicial grupo:',grupo);
    } catch (err) {
      console.error(err.message);
    }
};

const handleTypeChange = (e) => {
console.log('InputCorrelacion handleTypeChange value:',e.target.value);
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
        <button type="submit">Nueva Correlacion</button>
      </form>

    </React.Fragment>
  );
};

export default InputCorrelacion;
