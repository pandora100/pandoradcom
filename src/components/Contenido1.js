//Contenido1.js
import React, { Fragment, useState, useContext,useEffect,useRef } from "react";

import './Contenido1.css'
import { ReactTabulator } from "react-tabulator";
import "../dist/css/tabulator.min.css";
import {RemoteContext} from "../context/RemotosContext.js";
import { Link, Redirect } from "react-router-dom";
import {ModalContext} from "../context/ModalesContext.js";
import ModalEditAlarmas from "./ModalEditAlarmas";
import moment from "moment";

const Contenido1 = ({t1,onClose}) => {
  //console.log('!!!!!!!!!!!!!Contenido1 01 RemoteContext:',RemoteContext);
   const {gifs} = useContext(RemoteContext); 
   const { isModalEditAlarmasOpen,setIsModalEditAlarmasOpen,t1ModalEditAlarmas,setT1ModalEditAlarmas} = useContext(ModalContext); 
   let [fila,setFila] = useState(1);  
   //console.log('!!!!!!!!!!!!!Contenido1145 fila :',fila);
   const referencia = useRef(); 
   console.log('!!!!!!!!!!!!!Contenido1 11 gifs:',gifs);
   //console.log('!!!!!!!!!!!!!Contenido1 22 gifs.msg:',gifs.msg);
   // referencia.download("xlsx", "data.xlsx", {
   //   sheetName: "Export to Excel"
   //     }); 
    
   if (gifs.msg ==="Token is not valid"){
   console.log('!!!!!!!!!!!!!Contenido1 33 jwt malformed...');
   useEffect(() => {
  return <Redirect to="/login" className="irALogin">Login</Redirect>
   
  }, []);



  return <div><h1 style={{"color" : "yellow","fontSize" : "30px","textAlign" : "center"}} >{"     "}Por razones de seguridad refresque la pagina </h1></div>

   }
   else{
   
    

    const onCloseEdit=(e,row)=>{
      
    
      let tmprow=row.getData();
      
     
      setFila(tmprow.id_evento);
      onClose();
                      
                     };  
    
    const onClose=()=>{
      setIsModalEditAlarmasOpen(!isModalEditAlarmasOpen);
      setT1ModalEditAlarmas('Edit Alarm');                   
                      
                     };  
   
 
 
   
    
     const columns = [
            { title: "id", field: "id_evento", width: 60 },
            { title: "agente", field: "nombreag", width: 300 },
            { title: "grupo", field: "nombregr", width: 125},
            { title: "criticity", field: "criticity",width: 100,cellHozAlign: "center", formatter: "star" },
            { title: "evento", field: "nombremo", width: 300 },
           
            {title: "duracion", field: "utimestamp", width: 125, formatter:function(cell, formatterParams, onRendered){
                        var value = cell.getValue();
                        ////console.log('111 value:',value)
                        var now = moment().unix();  
                        ////console.log('112 now:',now)
                        var duration = now - value ;                      
                        ////console.log('113 duration:',duration);
                        var horas = duration/3600;
                        var dias = duration/86400;
                        var minutos = duration/60;
                       // //console.log('114 horas:',horas);
                       // //console.log('115 dias:',dias);
                       // //console.log('116 minutos:',minutos);
                        if(horas<1){
                        return minutos.toFixed(2) + " minutos atrás";
                        }
                         if(horas>1 && horas<24){
                        return horas.toFixed(2) + " horas atrás";
                        }
                         if(horas>24 ){
                        return dias.toFixed(2) + " dias atrás";
                        }
                    }},
           
             { title: "timestamp", field: "timestamp",cellHozAlign: "leftr",  formatter:function(cell, formatterParams, onRendered){
                        var value = cell.getValue();
                        value = moment(value).format("DD/MM/YYYY HH:mm:ss");
                        return value;
                    }}, 
            {title: "utimestamp", field: "utimestamp", width: 125  },               
            { title: "est", field: "estado",width: 50,align:"center", formatter: "tickCross" },
            {title: "comentarios", field: "user_comment", width: 125  }, 
            
        ];

      var data = gifs;
      const options = {
      tooltips:true,
      autoResize:true,
      movableRows: true,
      resizableRows:true,
      resizableColumns:true,
     height:"385px",
     pagination:"local", //enable local pagination.
     paginationSize:10 // this option can take any positive integer value (default = 10)
};

  

  return (
    <React.Fragment>
    
    <div className="com__content__right__card">
                 <div className="com__content__right__card__header">
                   
                   <div className="miTabla10">
                    <ReactTabulator
                    data={gifs}
                    columns={columns}
                    tooltips={true}
                    layout={"fitData"}
                    options={options}
                    ref={referencia}
                    rowClick={onCloseEdit}
  


                />
            </div > 

                  </div>
                   {isModalEditAlarmasOpen && <ModalEditAlarmas onClose={onClose} fila={fila}/>} 
             <div className="com__content__right__card__content">
             </div>
    </div>   
    </React.Fragment>
  );
};
};

export default Contenido1;