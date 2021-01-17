import React, { Fragment } from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";
///
import MarkerPopup from "./MarkerPopup";
///
const Markers = (props) => {
   const { venues } = props;
  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIcon}>
      <MarkerPopup data={venue} />
    </Marker>
    
));
 ///
 
  return <Fragment>
  
   {markers}
  </Fragment>;
};

export default Markers;