import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { HiLocationMarker } from "react-icons/hi";
import ReactDOMServer from "react-dom/server";
import ModalComponent from "./ModalComponent";
import Golf from "../../assets/img/golf.png";
import Cooking from "../../assets/img/music.png";
import styles from "../../styles/MapModalComponent.module.css";
import { useSelector } from "react-redux";

interface Location {
  id: number;
  name: string;
  image: string;
  lat: number;
  lng: number;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Golf Tournament",
    image: Golf,
    lat: 28.051561,
    lng: 34.715805,
  },
  { id: 2, name: "Cooking", image: Cooking, lat: 28.048796, lng: 34.717427 },
];

const createCustomIcon = () =>
  new L.DivIcon({
    html: ReactDOMServer.renderToString(
      <HiLocationMarker style={{ color: "red", fontSize: "24px" }} />
    ),
    className: "custom-icon",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

const MapComponent: React.FC = () => {
const events = useSelector((state) => state.events.events.events);
  const [selectedLocation, setSelectedLocation] = useState(
    events[0]
  );

  return (
    <div
      style={{
        borderRadius: "0.8rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      
      <MapContainer
        center={[28.047345, 34.713611]}
        zoom={15}
        style={{ height: "30vw", width: "100%" }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
        />

        {events.map((event) => (
          <Marker
            key={event.id}
            position={[event.location[0], event.location[1]]}
            icon={createCustomIcon()}
            eventHandlers={{ click: () => setSelectedLocation(event) }}
          >
            <Popup closeButton={false} className={styles.popup}>
              <div
                style={{
                  width: "16rem",
                  height: "6rem",
                  // padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {selectedLocation && selectedLocation.id === event.id && (
                  <div>
                    <ModalComponent
                      event={event}
                      onClose={() => setSelectedLocation(null)}
                    />
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
