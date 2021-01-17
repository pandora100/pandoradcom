//InputGrupo.js
import React, { Fragment, useState, useEffect } from "react";
import '@babel/polyfill';
import { toast } from "react-toastify";

const InputGrupo = ({onClose}) => {
  const [description, setDescription] = useState("");
   console.log('InputGrupo 0000 description:',description);
  
 const handleChange= evt=>{
  console.log('1 InputGrupo 02 handleChange evt.target.value:', evt.target.value); 
  setDescription(evt.target.value);
};

  const handleSubmit = async evt => {
   console.log('InputGrupo 00 evt:',evt);
    evt.preventDefault();
    console.log('InputGrupo 01 evt.target.value:',evt.target.value);
    console.log('InputGrupo 02 [evt.target.name]:',[evt.target.name]);
    console.log('InputGrupo 03 evt.currentTarget.value:',evt.currentTarget.value);
    console.log('InputGrupo 04 evt.currentTarget.name:',evt.currentTarget.name);
    console.log('InputGrupo 05 evt.target:',evt.target.name);
    console.log('InputGrupo 06 evt.currentTarget:',evt.currentTarget);
    console.log('InputGrupo 07 evt.target.grupo.value:',evt.target.grupo.value);
    console.log('InputGrupo 08 evt.target.grupo.name:',evt.target.grupo.name);
    //con esto vuelvo a dashboard 
    //window.location = "/";
    // headers: { jwt_token: localStorage.token },
    //{ jwt_token: localStorage.token }
     try {
      console.log('InputGrupo 0009 description:',description);
      const body = { description };
      console.log('InputGrupo 10 body:',body);
      const response = await fetch("http://localhost:5000/dashboard/grupos", {
        method: "POST",
          headers: {
            "Content-type": "application/json",
             jwt_token: localStorage.token
          },
       
        body: JSON.stringify(body)
      });
    
     const parseRes = await response.json();
     toast.success("Grupo add Successfully:");
     console.log('InputGrupo 11 parseRes:',parseRes);
     //window.location = "/dashboard";
     onClose();

    } catch (err) {
      console.error(err.message);
       toast.error(parseRes);
    }

  };
 

  return (
    <React.Fragment>
       

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="grupo"
          value={description}
          onChange={handleChange}
          placeholder="Introduzca nombre"
        />
        <button type="submit">Nuevo Grupo</button>
      </form>
     
    </React.Fragment>
  );
};

export default InputGrupo;

