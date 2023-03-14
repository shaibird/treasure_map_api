import { useState, useEffect } from 'react'
import { getLocations } from '../../managers/LocationManager'

export const DisplayLocations = ({locations, setLocations}) => {
    
  useEffect(() => {
    const fetchLocations = async () => {
      const data = await getLocations();
      setLocations(data);
    };
    fetchLocations();
  }, []);

  return (
    <div>
      {locations.map(location => (
        <p key={location.id}>{location.name}</p>
      ))}
    </div>
  );
};
