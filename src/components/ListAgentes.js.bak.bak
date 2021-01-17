//ListAgentes.js
import React, { Fragment, useEffect, useState } from "react";
import '@babel/polyfill';
import { ReactTabulator } from "react-tabulator";
import "../dist/css/tabulator.min.css";
import './ListAgentes.css'
const ListAgentes = () => {
  const [Agentes, setAgentes] = useState([]);

  const getAgentes = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard/agentes", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });
      const jsonData = await response.json();
      console.log('ListAgentes 2 getAgentes jsonData:',jsonData);
      setAgentes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAgentes();
  }, []);

  console.log('ListAgentes 3 Agentes:',Agentes);
  
 const options = {
    height:"250px",
    pagination:"local", //enable local pagination.
    paginationSize:8, // this option can take any positive integer value (default = 10)
};
 const columns = [
             { title: "Id", field: "id" , width:40},
             { title: "Nombre del Agente", field: "nombre_agente", width:240 },
            { title: "Nombre del Grupo", field: "nombre_grupo",width:120}
        ];
  let datax = [...Agentes]; 
   console.log('ListAgentes 4 datax22:',datax);      
 return (
   <React.Fragment>
             
                   <div className="miTabla0">
                    <ReactTabulator
                    data={datax}
                    columns={columns}
                    tooltips={true}
                    layout={"fitData"}
                    options={options}
                />
            </div >          
   </React.Fragment>
);
};

export default ListAgentes;
