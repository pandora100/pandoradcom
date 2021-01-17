//ListGrupos.js
import React, { Fragment, useEffect, useState } from "react";
import '@babel/polyfill';
import { ReactTabulator } from "react-tabulator";
import "../dist/css/tabulator.min.css";
import './ListGrupos.css'
const ListGrupos = () => {
  const [grupos, setGrupos] = useState([]);

  const getGrupos = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard/grupos", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });
      const jsonData = await response.json();
      console.log('ListGrupos 2 getGrupos jsonData:',jsonData);
      setGrupos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getGrupos();
  }, []);

  console.log('ListGrupos 3 grupos:',grupos);
  /*
  return (
    <React.Fragment>
      {" "}
      <table className="Grupos">
        <thead>
          <tr>
            <th>Id del Grupo</th>
            <th>Nombre del Grupo</th>
          </tr>
        </thead>
        <tbody>
         
          {grupos.map(grupo => (
            <tr key={grupo.id_grupo}>
              <td>{grupo.id_grupo}</td>
              <td>{grupo.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
 */
 const options = {
    height:"250px",
    pagination:"local", //enable local pagination.
    paginationSize:8, // this option can take any positive integer value (default = 10)
};
 const columns = [
            { title: "Id del Grupo", field: "id_grupo" },
            { title: "Nombre del Grupo", field: "nombre"}
           
        ];
  let datax = [...grupos]; 
   console.log('ListGrupos 4 datax2:',datax);      
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

export default ListGrupos;
