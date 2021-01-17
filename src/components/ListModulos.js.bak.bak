//ListModulos.js
import React, { Fragment, useEffect, useState } from "react";
import '@babel/polyfill';
import { ReactTabulator } from "react-tabulator";
import "../dist/css/tabulator.min.css";
import './ListModulos.css'
const ListModulos = () => {
  const [Modulos, setModulos] = useState([]);

  const getModulos = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard/modulos", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });
      const jsonData = await response.json();
      console.log('ListModulos 2 getModulos jsonData:',jsonData);
      setModulos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getModulos();
  }, []);

  console.log('ListModulos 3 Modulos:',Modulos);
  
 const options = {
    height:"250px",
    pagination:"local", //enable local pagination.
    paginationSize:8, // this option can take any positive integer value (default = 10)
};
 const columns = [
             { title: "Id", field: "id" , width:40},
             { title: "Nombre del Modulo", field: "nombre_modulo", width:240 },
            { title: "Nombre del Grupo", field: "nombre_grupo",width:120}
        ];
  let datax = [...Modulos]; 
   console.log('ListModulos 4 datax22:',datax);      
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

export default ListModulos;