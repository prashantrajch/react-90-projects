import { useEffect, useState } from "react";
import LeafletMap from "./components/LeafletMap";

const App = () => {
  const [ipDetails, setIPDetails] = useState("");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const fetchIPGeoDetails = async () => {
    const res = await fetch("http://ip-api.com/json/");
    const data = await res.json();
    setIPDetails(data);
    setLat(data.lat);
    setLon(data.lon);
  };

  useEffect(() => {
    fetchIPGeoDetails();
  }, []);

  return (
    <div className="container">
      <div className="card details">
        {!ipDetails ? (
          <h1 style={{ color: "white" }}>
            Please Wait for loading you data......!
          </h1>
        ) : (
          <>
            <h3>What is my IPv4 address?</h3>
            <h2>{ipDetails?.query}</h2>
            <h3>Approximate location</h3>
            <p className="subtitle">
              {ipDetails?.city},{ipDetails?.regionName},{ipDetails?.country}
            </p>
            <h3>Internat Service Provider(ISP)</h3>
            <p className="subtitle">{ipDetails?.isp}</p>
          </>
        )}
      </div>

      <LeafletMap ipDetails={ipDetails} longitude={lon} latitude={lat} />
    </div>
  );
};

export default App;
