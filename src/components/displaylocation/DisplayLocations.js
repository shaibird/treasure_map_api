import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { getLocations } from '../../managers/LocationManager'

export const DisplayLocations = () => {
  const [locations, setLocations] = useState([]);

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
