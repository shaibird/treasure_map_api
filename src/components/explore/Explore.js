import { Map } from "./Map"
import { SideBar } from "../savelocation/SideBar"
import { useState, useEffect } from 'react'
import { SaveLocation } from "../savelocation/SaveLocation"
import "./Explore.css"

export const Explore = () => {
    const [position, setPosition] = useState(null);
    const [locations, setLocations] = useState([])
    const [showSaveLocation, setShowSaveLocation] = useState(false);

    const handleSaveLocationClick = () => {
      setShowSaveLocation(true);
    }

    return (
        <div className="explore">
          <div className="sidebar">
              <button onClick={handleSaveLocationClick}>Save a New Location</button>
              <SideBar position={position} locations={locations} setLocations={setLocations}/>
          </div>
          <div className="map-container">
              <Map position={position} setPosition={setPosition} locations={locations}/>
          </div>
          {showSaveLocation && <SaveLocation setShowSaveLocation={setShowSaveLocation} position={position} setPosition={setPosition}/>}
        </div>
    )
}
