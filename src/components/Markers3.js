import React, { Fragment } from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";

const Markers = (props) => {
  
 
 
  return <Fragment>
  
    <Marker  position={{ lat: 52.52436, lng: 13.41052 }}  icon={VenueLocationIcon}>
   
    </Marker>
  </Fragment>;
};

export default Markers;