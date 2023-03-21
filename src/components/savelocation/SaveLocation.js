import { useState, useEffect } from "react";
import { createLocation, getLocations } from "../../managers/LocationManager";
import { Toggle } from "./ToggleButton";
import './SaveLocation.css'

export const SaveLocation = ({ position, setShowSaveLocation, fetchLocations }) => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [locations, setLocations] = useState([]);

  const localUser = localStorage.getItem("tm_token");
  const userObject = JSON.parse(localUser);


  const saveNewLocation = (event) => {
    event.preventDefault();
  
    const locationToSendToAPI = {
      ...pin,
      date: new Date(),
    };
  
    createLocation(locationToSendToAPI)
      .then((savedLocation) => {
        console.log("Location saved:", savedLocation);
      })
      .catch((error) => {
        console.error("Failed to save location:", error);
      })
      .then(() => {
        handleCloseSaveLocationClick()
      })
      .then(() => {
        fetchLocations()
      })
    };
  
  const [pin, setPin] = useState({
    name: "",
    latitude: null,
    longitude: null,
    user: userObject.id,
    private: false,
    date: new Date(),
  });

  const handleNameChange = (event) => {
    const name = event.target.value;
    setPin((prevState) => ({
      ...prevState,
      name: name,
    }));
  };

  const handleToggle = (isToggled) => {
    setPin({ ...pin, private: isToggled })
  };
  
  const handleCloseSaveLocationClick = () => {
    setShowSaveLocation(false);
  }

  useEffect(() => {
    if (position) {
      setLat(position.lat);
      setLon(position.lng);
      setPin((prevPin) => ({
        ...prevPin,
        latitude: position.lat,
        longitude: position.lng,
      }));
    }
  }, [position]);


  return (
    <div className="sidebar">
      <form className="save-location">
        <h2 className="save-location-title">Save Location</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              required autoFocus
              type="text"
              className="form-control"
              placeholder="Location Title"
              value={pin.name}
              onChange={(event) => setPin(prevPin => ({ ...prevPin, name: event.target.value }))}
            />
          </div>
          <div className="save-labels">Latitude: {lat}</div>
          <div className="save-labels">Longitude: {lon}</div>
          <Toggle label="Private" toggled={pin.private} onToggle={handleToggle} />
        </fieldset>
        <button type="submit" onClick={saveNewLocation}>Save Location</button>
        <button className="close-button" type="close"onClick={handleCloseSaveLocationClick}>Close</button>
      </form>
    </div>
  );
};
