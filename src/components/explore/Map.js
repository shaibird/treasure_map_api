import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import './Map.css';

export const Map = ({ position, setPosition }) => {
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
    </MapContainer>
  );
};
