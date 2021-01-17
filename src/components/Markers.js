import React, { Fragment, useState, useEffect  } from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";
import {ErbLocationIcon} from './ErbLocationIcon';
///
import MarkerPopup from "./MarkerPopup";
import "./Markers.css";
///
const Markers = (props) => {
	
   const { venues } = props;
    //let name = props.nombreuser;
    console.log('Markers 1 props:',venues);
    const markers = venues.map((venue, i) => {
    console.log('Markers 2 venue.name.indexOf("ERB:"):',venue.name.indexOf("ERB:"));
    //venue.nombre.indexOf("ERB:");
  	if(venue.name.indexOf("ERB:")===0){
  		
    return <Marker key={i} position={venue.geometry} icon={ErbLocationIcon}>
      <MarkerPopup data={venue} />
    </Marker>
   }
   return <Marker key={i} position={venue.geometry} icon={VenueLocationIcon} className="profund">
      <MarkerPopup data={venue}/>
    </Marker>
  }
);
 ///
 
  return <Fragment>
  
   {markers}
  </Fragment>;
};

export default Markers;