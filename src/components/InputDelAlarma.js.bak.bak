//InputDelAlarma.js
import React, { Fragment, useState, useEffect,useContext } from "react";
import '@babel/polyfill';
import { toast } from "react-toastify";
const InputDelAlarma = ({onCloseDel}) => {
  const [description, setDescription] = useState("");
   console.log('InputDelAlarma 0000 description:',description);
  
 const handleChange= evt=>{
  console.log('1 InputDelAlarma 02 handleChange evt.target.value:', evt.target.value); 
  setDescription(evt.target.value);
};

  const handleSubmit = async evt => {
   console.log('InputDelAlarma 00 evt:',evt);
    evt.preventDefault();
    console.log('InputDelAlarma 01 evt.target.value:',evt.target.value);
    console.log('InputDelAlarma 02 [evt.target.name]:',[evt.target.name]);
    console.log('InputDelAlarma 03 evt.currentTarget.value:',evt.currentTarget.value);
    console.log('InputDelAlarma 04 evt.currentTarget.name:',evt.currentTarget.name);
    console.log('InputDelAlarma 05 evt.target:',evt.target.name);
    console.log('InputDelAlarma 06 evt.currentTarget:',evt.currentTarget);
    console.log('InputDelAlarma 07 evt.target.grupo.value:',evt.target.grupo.value);
    console.log('InputDelAlarma 08 evt.target.grupo.name:',evt.target.grupo.name);
    //con esto vuelvo a dashboard 
    //window.location = "/";
    // headers: { jwt_token: localStorage.token },
    //{ jwt_token: localStorage.token }
     try {
      console.log('InputDelAlarma 0009 description:',description);
      const body = { description };
      console.log('InputDelAlarma 10 body:',body);
      const response = await fetch("http://localhost:5000/dashboard/eventos", {
        method: "DELETE",
          headers: {
            "Content-type": "application/json",
             jwt_token: localStorage.token
          },
       
        body: JSON.stringify(body)
      });
    
     const parseRes = await response.json();
     toast.success("Alarma deleted Successfully:");
     console.log('InputDelAlarma 11 parseRes:',parseRes);
     //window.location = "/dashboard";
     onCloseDel();

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
          placeholder="Introduzca id de evento"
        />
        <button type="submit">Eliminar Alarma</button>
      </form>
    </React.Fragment>
  );
};

export default InputDelAlarma;

