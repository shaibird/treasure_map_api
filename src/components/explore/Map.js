import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap, Popup } from 'react-leaflet';
import './Map.css';

export const Map = ({ position, setPosition, locations }) => {
    
  const LocationMarker = () => {
    useMapEvents({
      click: (e) => setPosition(e.latlng),
    });

    return position === null ? null : <Marker position={position} />;
  };

  return (
    <MapContainer center={[35.0458, -85.3094]} zoom={13} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker />
      {locations.map(location => (
        <Marker key={location.id} position={[location.latitude, location.longitude]}>
          <Popup>
            <div>
              <h3>{location.name}</h3>
              <p>{location.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
