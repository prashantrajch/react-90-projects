import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { FaUserAlt } from "react-icons/fa";

const LeafletMap = ({ latitude, longitude, ipDetails }) => {
  const mapRef = useRef(null);

  return (
    <div className="card map">
      {!ipDetails ? (
        <h1 style={{ color: "white", textAlign: "center", marginTop: "200px" }}>
          Please Wait for loading your map......!
        </h1>
      ) : (
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          ref={mapRef}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              <FaUserAlt />
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default LeafletMap;
