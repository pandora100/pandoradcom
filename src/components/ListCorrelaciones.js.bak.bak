//ListCorrelaciones.js
import React, { Fragment, useEffect, useState } from "react";
import '@babel/polyfill';
import { ReactTabulator } from "react-tabulator";
import "../dist/css/tabulator.min.css";
import './ListCorrelaciones.css'
const ListCorrelaciones = () => {
  const [Correlaciones, setCorrelaciones] = useState([]);

  const getCorrelaciones = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard/Correlaciones", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });
      const jsonData = await response.json();
      console.log('ListCorrelaciones 2 getCorrelaciones jsonData:',jsonData);
      setCorrelaciones(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCorrelaciones();
  }, []);

  console.log('ListCorrelaciones 3 Correlaciones:',Correlaciones);
  
 const options = {
    height:"250px",
    pagination:"local", //enable local pagination.
    paginationSize:8, // this option can take any positive integer value (default = 10)
};
 const columns = [
             { title: "Id", field: "id" , width:40},
             { title: "Nombre del Correlacion", field: "nombre_correlacion", width:240 },
            { title: "Nombre del Grupo", field: "nombre_grupo",width:120}
        ];
  let datax = [...Correlaciones]; 
   console.log('ListCorrelaciones 4 datax22:',datax);      
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

export default ListCorrelaciones;