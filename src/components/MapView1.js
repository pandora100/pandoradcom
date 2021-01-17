import React, { Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "./MapView.css";
import BannersDCOR3 from '../assets/BannersDCOR3.GIF';
import { toast } from "react-toastify";
import { Map } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const MapView = ({setAuth}) => {
  const [name, setName] = useState([]);
 const [dateTime, setDateTime] = useState(new Date());
 const [state, setState] = useState({
    currentLocation: { lat: 52.52437, lng: 13.41053 },
    zoom: 13,
   
});
 const getProfile = async () => {
    try {
      //const res = await fetch("http://backendpandoragui.herokuapp.com/dashboard/", {
       const res = await fetch("http://localhost:5000/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName([{...parseData}]);
      
      
      console.log('MapView 1 parseRes:',parseData);
      console.log('MapView 2 name:',name);  
      console.log('MapView 3 dateTime:',dateTime);   
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
    <Fragment>
     <div className="contenedor">
        <div className='BannersDCOR3'>
        <img src={BannersDCOR3} alt="BannersDCOR3" />
        </div>
        <h1>MapView1.js 10 de 48</h1>
         <button className="MOVILNETinputButton" onClick={logout}>Logout
         </button>
           {name.map((usuario,index)=>{
         return <h2 key={usuario.user_name}>{`Usuario ${usuario.user_name} conectado desde el ${dateTime.toLocaleDateString()} a las ${dateTime.toLocaleTimeString()}` }</h2>  
        
        })}
					        <div className="leaflet-container">
					        <Map center={state.currentLocation} zoom={state.zoom}>

					        </Map>
                            </div>   
         						
      </div>   
    </Fragment>
  );
};

export default MapView;