import { useState, useEffect } from 'react'
import { getLocations } from '../../managers/LocationManager'

export const DisplayLocations = ({locations, setLocations, setShowLocationDetails, locationDetail, setLocationDetail}) => {
    
  // useEffect(() => {
  //   const fetchLocations = async () => {
  //     const data = await getLocations();
  //     setLocations(data);
  //   };
  //   fetchLocations();
  // }, []);

  const localUser = localStorage.getItem("tm_token");
  const userObject = JSON.parse(localUser);


  const toggleLocationDetail = () => {
    setShowLocationDetails(true);
  }
console.log(locations)
  return (
    <div className="locations-list">
      {locations.map(location => (
        <p key={location.id} onClick={() => {
          toggleLocationDetail()
          setLocationDetail(location)
        }}>{location.name}</p>
      ))}
    </div>
  );
};
