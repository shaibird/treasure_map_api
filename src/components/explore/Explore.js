import { Map } from "./Map"
import { SideBar } from "../savelocation/SideBar"
import { useState, useEffect } from 'react'
import { SaveLocation } from "../savelocation/SaveLocation"
import "./Explore.css"
import { LocationDetails } from "../displaylocation/LocationDetails"
import { getLocations } from "../../managers/LocationManager"
import { getAllImages } from "../../managers/ImageManager"

export const Explore = () => {
  const [position, setPosition] = useState(null);
  const [locations, setLocations] = useState([]);
  const [showSaveLocation, setShowSaveLocation] = useState(false);
  const [showLocationDetails, setShowLocationDetails] = useState(false);
  const [locationDetail, setLocationDetail] = useState([])

  const handleSaveLocationClick = () => {
    setShowSaveLocation(true);
  }

  const fetchLocations = async () => {
    const data = await getLocations();
    setLocations(data);
  }


  useEffect(() => {
    fetchLocations()
  },
    []
  )

  return (
    <div className="explore">
      <div className="sidebar">
        <button className="save-button" onClick={handleSaveLocationClick}>Save a New Location</button>
        <SideBar position={position} locations={locations} setLocations={setLocations} setShowLocationDetails={setShowLocationDetails} setLocationDetail={setLocationDetail} locationDetail={locationDetail} fetchLocations={fetchLocations} />
      </div>
      <div className="map-container">
        <Map position={position} setPosition={setPosition} locations={locations} setShowLocationDetails={setShowLocationDetails} setLocationDetail={setLocationDetail} />
      </div>
      {showSaveLocation && <SaveLocation setShowSaveLocation={setShowSaveLocation} position={position} setPosition={setPosition} fetchLocations={fetchLocations} />}
      {showLocationDetails && <LocationDetails setShowLocationDetails={setShowLocationDetails} setLocationDetail={setLocationDetail} locationDetail={locationDetail} fetchLocations={fetchLocations} />}
    </div>
  )
}
