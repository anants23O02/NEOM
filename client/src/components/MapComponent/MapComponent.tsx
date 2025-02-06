import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = [

  { id: 1, name: "Location 1", lat: 28.051561, lng: 34.715805 }, // Example: Delhi, India
  { id: 2, name: "Location 2", lat: 28.048796, lng: 34.717427 },  // Example: Mumbai, India
];

const MapComponent: React.FC = () => {
  return (
    <div style={{borderRadius:'0.8rem',overflow:'hidden'}}>

    <MapContainer
      center={[28.047345, 34.712805]} 
      zoom={16}
      style={{ height: "30vw", width: "100%" ,overflow:"hidden"}}
      >
   
   <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
      />

  
      {locations.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]} style={{color:'red'}}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
      </div>
  );
};

export default MapComponent;
