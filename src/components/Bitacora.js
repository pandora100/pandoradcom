import React, { Fragment, useState, useEffect } from "react";
import "./Bitacora.css";
import BannersDCOR3 from '../assets/BannersDCOR3.GIF';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '@babel/polyfill';
import { toast } from "react-toastify";
/////////////////
import { ReactTabulator } from "react-tabulator";
import "../dist/css/tabulator.min.css";
/////////////////////////
import moment from "moment";


function Bitacora({setAuth}) {
 const [name, setName] = useState("");
 const [dateTime, setDateTime] = useState(new Date());
 const getProfile = async () => {
    try {
      //const res = await fetch("http://backendpandoragui.herokuapp.com/dashboard/", {
       const res = await fetch("http://localhost:5000/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.user_name);
      console.log('Dashboard 1 parseRes:',parseData); 
      //console.log('Dashboard 2 name:',name); 
      //console.log('Dashboard 3 localStorage.token:',localStorage.token);  
      //console.log('Dashboard 4 setAuth:',setAuth);
       //console.log('Dashboard 5 onCloseModal:',onCloseModal); 
       // console.log('Dashboard 6 isModalOpen:',isModalOpen);       
    } catch (err) {
      console.error(err.message);
       toast.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
//  
 
////////77
 const [gifs, setGifs] = useState([]);
 const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());
 const [filtro1, setFiltro1] = useState("grupo");
 const [filtro2, setFiltro2] = useState("agente");
 const [filtro3, setFiltro3] = useState("modulo");
 const [valorfiltro1, setValorFiltro1] = useState('');
 const [valorfiltro2, setValorFiltro2] = useState('');
 const [valorfiltro3, setValorFiltro3] = useState('');
 ////////77

  const handleSubmit = async evt => {
  
    evt.preventDefault();
    // console.log('InputDependencia 08 handleSubmit evt:',evt);
    //////


     try {
    
      //////const body = { tecnologiasSeleccionado,agentesSeleccionado,modulosSeleccionado,criticitySeleccionado,estadoSeleccionado,timestamp,utimestamp,usercomment};
      const body = { startDate,endDate,filtro1,filtro2,filtro3,valorfiltro1,valorfiltro2,valorfiltro3};
      console.log('Bitacora 10 body:',body);
      
      const response = await fetch("http://localhost:5000/dashboard/bitacoras", {
        method: "POST",
          headers: {
            "Content-type": "application/json",
              jwt_token: localStorage.token
          },
       
        body: JSON.stringify(body)
      });
    
     const parseRes = await response.json();
     
     toast.success("Peticion realizada Exitosamente");
     ////////////////////////////////////toast.success("Peticion Exitosa:");
     console.log('Bitacora 11 parseRes:',parseRes );
     //window.location = "/dashboard";
      ////////////////////////////////////onClose();
     setGifs(parseRes);
     
    } catch (err) {
      console.error(err.message);
     //////////////////////////////////// 
     toast.error(parseRes); 
    }
  };

const handleTypeChangeFiltro1 = (e) => {
filtro1[e.target.value];
setFiltro1(e.target.value);
}
const handleTypeChangeFiltro2 = (e) => {
filtro2[e.target.value];
setFiltro2(e.target.value);
}
const handleTypeChangeFiltro3 = (e) => {
filtro3[e.target.value];
setFiltro3(e.target.value);
}
const handleTypeChangeValorFiltro1 = (e) => {
valorfiltro1[e.target.value];
setValorFiltro1(e.target.value);
}
const handleTypeChangeValorFiltro2 = (e) => {
valorfiltro2[e.target.value];
setValorFiltro2(e.target.value);
}
const handleTypeChangeValorFiltro3 = (e) => {
valorfiltro3[e.target.value];
setValorFiltro3(e.target.value);
}


  console.log('Bitacora 11 gifs:',gifs ); 

 //////////
  return (
    

    <React.Fragment>
     <div className="contenedor">
        <div className='BannersDCOR3'>
        <img src={BannersDCOR3} alt="BannersDCOR3" />
         </div>
          <div className="contenedortablas">   
          <div className="tmasafuera">
                       <form name="frmTemip" method="post" onSubmit={handleSubmit}>

                       
                      
                  <div className="titulocajitas" >Criterio de busqueda de alarmas
                  
                        </div>
                        <div className="SGITexto" >
                          <div className="barra1" >
                  
                        
                        <div className="datepick1" >{" "}Desde:
                          <DatePicker
                 selected={startDate}
                 selectsStart
                 startDate={startDate}
                 endDate={endDate}
                 onChange={date => setStartDate(date)}
               />
                
               </div>
               <div className="datepick2" >{" "}Hasta:
               <DatePicker
                 selected={endDate}
                 selectsEnd
                 startDate={startDate}
                 endDate={endDate}
               
                 minDate={startDate}
                 onChange={date => setEndDate(date)}
               />
                
                        </div>
                        </div>
                        
                                        
                                        <div className="barra3" >
                                          <select name="filtro1" style={{"width" : "110px"}} size="1" className="MOVILNETListBox" onChange={handleTypeChangeFiltro1}>
                                   
                                     <option value="grupo">Grupo</option>
                                   
                                    
                                </select>
                                <input type="text"  className="MOVILNETinputBox"
                                         name="valorfiltro1"
                         value={valorfiltro1}
                         onChange={handleTypeChangeValorFiltro1}
                                         >
                                   
                                </input>
                                        </div>
                                        <div className="barra4" >
                                        <select name="filtro2" size="1" style={{"width" : "110px"}} className="MOVILNETListBox" onChange={handleTypeChangeFiltro2}>
                                     <option value="agente">Agente</option> 

                                    
                                   
                                </select>
                                <input type="text"  className="MOVILNETinputBox"
                                          name="valorfiltro2"
                          value={valorfiltro2}
                          onChange={handleTypeChangeValorFiltro2}

                                >
                                   
                                </input>
                                        </div>
                                          <div className="barra5" >
                                    <select name="filtro3" size="1" style={{"width" : "110px"}} className="MOVILNETListBox" onChange={handleTypeChangeFiltro3}>
                                  
                                    <option value="modulo">Modulo</option>
                                    
                                   
                                </select>
                                <input type="text"
                                 className="MOVILNETinputBox"
                                         name="valorfiltro3"
                         value={valorfiltro3}
                         onChange={handleTypeChangeValorFiltro3}
                                 >
                                   
                                </input>
                                        </div>
                                         <div className="MOVILNETButton" >.El usuario debe seleccioner al menos un criterio de búsqueda                          .
                                       
                                <button type="submit" className="MOVILNETinputButton">Aceptar
                                   
                                </button>
                                
                                <button className="MOVILNETinputButton" onClick={logout}>Logout
                                   
                                </button>
                                .Pulse en Aceptar para buscar histórico y Logout para deslogear.
                                        </div>
                                        

                  
                        
                        
                        </div>

                        </form>
                        
          </div>


          </div>

          </div>
                            
                            <div className="count11container" >Total de registros encontrados:{gifs.length} 
                            </div > 
                              <div className="miTabla11container" >
                            <table className="table-box">
                                    <thead>
                                      <tr>
                                        <th>id</th>
                                        <th>grupo</th>
                                        <th>agente</th>
                                        <th>evento</th>
                                        <th>estado</th>
                                        <th>timestamp</th>
                                        <th>usercomment</th>
                                        <th>utimestamp</th>
                                      </tr>
                                    </thead>
                                   
                                    <tbody>
                                    {gifs.map((kit, i) => (
                                    <tr key={i}>
                                   <td>
                                   <div>
                                   {kit.id_evento}
                                   </div>
                                   </td>
                                   <td>
                                   <div>
                                   {kit.nombregr}
                                   </div>
                                   </td>
                                   <td>
                                   <div>
                                   {kit.nombreag}
                                   </div>
                                   </td>
                                   <td>
                                   <div>
                                   {kit.nombremo}
                                   </div>
                                   </td>
                                   <td>
                                   <div>
                                   {kit.criticity}
                                   </div>
                                   </td>
                                   <td>
                                   <div>
                                   {kit.timestamp}
                                   </div>
                                   </td>
                                   <td>
                                   <div>
                                   {kit.user_comment}
                                   </div>
                                   </td>
                                   <td>
                                   <div>
                                   {kit.utimestamp}
                                   </div>
                                   </td>
                                   </tr>
                                   ))}
                                  </tbody>
                                  
                                  </table>
  

                            
                            
                            
                            </div > 
     
    </React.Fragment>
    

  );
}

export default Bitacora;