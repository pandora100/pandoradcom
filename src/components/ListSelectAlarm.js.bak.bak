//ListSelectAlarm.js
import React, { Fragment, useEffect, useState } from "react";
import '@babel/polyfill';
import { ReactTabulator } from "react-tabulator";
import "../dist/css/tabulator.min.css";
import './ListSelectAlarm.css'
const ListSelectAlarm = ({fila}) => {
  const [selectAlarm, setSelectAlarm] = useState({fila});

  const getSelectAlarm = async () => {
    try {
      
        const response = await fetch(`http://localhost:5000/dashboard/eventos/${fila}`, {
        method: "GET",
          headers: {jwt_token: localStorage.token}
      });
      const jsonData = await response.json();
      console.log('ListSelectAlarm 2 getSelectAlarm jsonData:',jsonData);
      setSelectAlarm(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getSelectAlarm();
  }, []);

  console.log('ListSelectAlarm 3 selectAlarm:',selectAlarm);
  
 const options = {
    height:"100px"
    
};
 
             const columns = [
            { title: "id", field: "id_evento", width: 50 },
            { title: "agente", field: "nombreag", width: 275 },
            { title: "grupo", field: "nombregr", width: 100 },
            { title: "evento", field: "nombremo", width: 200 },
            { title: "estado", field: "estado",width: 50,cellHozAlign: "center", formatter: "tickCross" },
            { title: "timestamp", field: "timestamp",cellHozAlign: "leftr", formatter: "progress" },
            {title: "utimestamp", field: "utimestamp", width: 100  },
            { title: "criticity", field: "criticity",width: 100,cellHozAlign: "center", formatter: "star" }
           

        ];
  let datax = [...selectAlarm]; 
   console.log('ListSelectAlarm 4 datax22:',datax);      
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

export default ListSelectAlarm;