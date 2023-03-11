import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import "./Map.css"
import { Modal } from './SaveModal'

export const Map = ({position, setPosition}) => {
    const [showModal, setShowModal] = useState(false);

    
  const handleClick = (e) => {
    setPosition(e.latlng);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

    
  const handleSaveClick = () => {
    setShowModal(false);
}

  const LocationMarker = () => {
    useMapEvents({
      click: handleClick,
    });

    return position === null ? null : (
      <Marker position={position}>
        {showModal && (
          <Modal onClose={handleModalClose}>
            <div>
              <p>Do you want to save this location?</p>
              <button onClick={handleSaveClick}>Save</button>
            </div>
          </Modal>
        )}
      </Marker>
    );
  };

  return (
    <MapContainer center={[35.0458, -85.3094]} zoom={13} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {showModal && <div className="modal-overlay" onClick={handleModalClose}></div>}
      <LocationMarker />
    </MapContainer>
  );
};