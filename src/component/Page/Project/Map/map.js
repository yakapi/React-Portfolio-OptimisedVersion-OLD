import * as React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import IconPerso from './pin.svg'
export default () => {

  const L = require('leaflet');

   const myIcon = L.icon({
       iconUrl: IconPerso,
       iconSize: [48,48],
       iconAnchor: [32, 64],
       popupAnchor: null,
       shadowUrl: null,
       shadowSize: null,
       shadowAnchor: null
   });

  return (
    <MapContainer center={[47.663793041124926, 6.884026540288047]} zoom={13} scrollWheelZoom={false} style={{ height: "40%" }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={myIcon} position={[47.663793041124926, 6.884026540288047]}>
      </Marker>
    </MapContainer>
  );
};
