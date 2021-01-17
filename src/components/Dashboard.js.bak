//Dashboard.js
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import '@babel/polyfill';
import './Dashboard.css'; 
import PandoraHeader1 from "./PandoraHeader1.js";
import BarraPrincipal1 from "./BarraPrincipal1.js";
import BarraPrincipal2 from "./BarraPrincipal2.js";
import BarraHerramientas1 from "./BarraHerramientas1.js";
import BarraHerramientasDel1 from "./BarraHerramientasDel1.js";
import BarraHerramientas2 from "./BarraHerramientas2.js";
import BarraHerramientasDel2 from "./BarraHerramientasDel2.js";
import BarraHerramientas3 from "./BarraHerramientas3.js";
import BarraHerramientasDel3 from "./BarraHerramientasDel3.js";
import BarraHerramientas4 from "./BarraHerramientas4.js";
import BarraHerramientasDel4 from "./BarraHerramientasDel4.js";
import BarraHerramientas6 from "./BarraHerramientas6.js";
import BarraHerramientas7 from "./BarraHerramientas7.js";
import BarraHerramientas8 from "./BarraHerramientas8.js";
import BarraHerramientas9 from "./BarraHerramientas9.js";
import Sidebar1 from "./Sidebar1.js";
import Contenido1  from "./Contenido1.js";
import Reviews  from "./Reviews.js";
import Reviews2  from "./Reviews2.js";

 /*
 <BarraHerramientas1 t1="Add/Edit/Delete Evento" />
       <BarraHerramientas1 t1="Add/Edit/Delete Correlacion" />
       <BarraHerramientas1 t1="Configuraciones" />
       <BarraHerramientas1 t1="Historico de Alarmas" />
*/
const Dashboard = ({setAuth}) => {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const getProfile = async () => {
    try {
      const res = await fetch("http://backendpandoragui.herokuapp.com/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.user_name);
      console.log('Dashboard 1 parseRes:',parseData); 
      console.log('Dashboard 2 name:',name); 
      console.log('Dashboard 3 localStorage.token:',localStorage.token);  
      console.log('Dashboard 4 setAuth:',setAuth);
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
  return (
    <div className="Dashboard-box">
            <div className="Dashboard-box-header-container" >
     
     <PandoraHeader1/>
     
      <button onClick={e => logout(e)} className="btn-btn-primary">
        Logout
      </button>
      

           </div>
         <div className="Dashboard-Div">
          <BarraPrincipal1 titulo={`Modulo de Gestion de Correlaciones           Usuario: ${name} conectado el ${dateTime.toLocaleDateString()} a las ${dateTime.toLocaleTimeString()}`}/>
        <div className="Dashboard-Div-Barra-Container">
       
      
       <BarraHerramientas1 t1="Add Grupo" />
       <BarraHerramientasDel1 t1="Del Grupo" />
       <BarraHerramientas2 t1="Add Agente" />
       <BarraHerramientasDel2 t1="Del Agente" />
       <BarraHerramientas3 t1="Add Modulo" />
       <BarraHerramientasDel3 t1="Del Modulo" />
       <BarraHerramientas4 t1="Add Corr" />
       <BarraHerramientasDel4 t1="Del Corr" />
       <BarraHerramientas6 t1="StartProc" />
       <BarraHerramientas7 t1="StopProc" />
       <BarraHerramientas8 t1="Historico" />
       <BarraHerramientas9 t1="Config" />
        </div>
       

        <Reviews/> 
                        <div className="com__content__container">
                        <div className="com__content">
                        <div className="com__content__inner__left">
                        <Sidebar1/> 
                        </div>
                        <div className="com__content__inner">
                        <Contenido1/> 
                        
                        </div>

                        </div>
                       </div>
                       <Reviews2/>
                       <BarraPrincipal2 style={{"height" : "30px"}} titulo={`Modulo de desarrollado por la Coordinación de Integración de Redes y Sistemas de Movilnet de la Gerencia de Sistemas de Monitoreo`}/>  
                 </div>
                      
      </div>
  );
};

export default Dashboard;

