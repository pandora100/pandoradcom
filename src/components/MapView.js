import React, { Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "./MapView.css";
import BannersDCOR3 from '../assets/BannersDCOR3.GIF';
import { toast } from "react-toastify";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import data from "../assets/data.json";
////
import { useLocation, useHistory } from "react-router-dom";
////
const MapView = ({setAuth}) => {
  const [name, setName] = useState([]);
 const [dateTime, setDateTime] = useState(new Date());
 const [state, setState] = useState({
    currentLocation: { lat: 10.4859, lng: -66.8643 },
    zoom: 15,
    data,
});
////
const location = useLocation();
const history = useHistory();

 const getProfile = async () => {
    try {
      const res = await fetch("http://backendpandoragui.herokuapp.com/dashboard/", {
       
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

  

  useEffect(() => {
    getProfile();
  }, []);
//  
////
			useEffect(() => {
			    if (location.state != undefined && location.state.latitude && location.state.longitude ) {
			      const currentLocation = {
			        lat: location.state.latitude,
			        lng: location.state.longitude,
			      };
			     
			      setState({
			        ...state,
			        data: {
			          venues: state.data.venues.concat({
			            name:localStorage.getItem("nombre"),
			            geometry: [currentLocation.lat, currentLocation.lng],
			          }),
			        },
			        currentLocation,
			      });
			      history.replace({
			        pathname: "/mapas",
			        state: {},
			      });
			       console.log('MapView state!!!!:',state);
			    }
			}, [location]);
	////		
  return (
    <Fragment>
     <div className="contenedor">
        <div className='BannersDCOR3'>
        <img src={BannersDCOR3} alt="BannersDCOR3" />
        </div>
       
       <div>  
      
      <Link className="MOVILNETinputButtonx"
        to={{
          pathname: "/home"
        }}
      >home
</Link>
      <br/>
      
</div>





					        <div className="leaflet-container">
					        <Map center={state.currentLocation}
						        zoom={state.zoom}
	                            attributionControl={true}
				                zoomControl={true}
				                doubleClickZoom={true}
				                scrollWheelZoom={true}
				                dragging={true}
				                animate={true}
				                easeLinearity={0.35}
					         >
                            <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                             <Markers venues={state.data.venues} />
					        </Map>
                            </div>   
         						
      </div>   
    </Fragment>
  );
};

export default MapView;