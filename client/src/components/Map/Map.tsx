import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Sample locations
const locations = [
  { id: 1, lat: 51.505, lng: -0.09, title: "Location 1" },
  { id: 2, lat: 51.515, lng: -0.1, title: "Location 2" },
  { id: 3, lat: 51.525, lng: -0.11, title: "Location 3" }
];

export const MapComponent: React.FC = () => {
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (map) {
      map.setView([51.505, -0.09], 13); // Initial map view, adjust as necessary
    }
  }, [map]);

  return (
    <MapContainer
      center={[51.505, -0.09]} // Set the initial map center
      zoom={13} // Set the initial zoom level
      style={{ width: "100%", height: "400px" }}
      whenCreated={setMap}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Map tile layer (OpenStreetMap)
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.lat, location.lng]}
          icon={new L.Icon({
            iconUrl: "/path/to/location-icon.png", // Custom icon (ensure path is correct)
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -30]
          })}
        >
          <Popup>{location.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
