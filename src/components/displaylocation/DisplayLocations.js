import { useState, useEffect } from 'react';
import { getAllImages } from '../../managers/ImageManager';
import defaultImage from './defaultImage.svg';
import './displayLocations.css';

export const DisplayLocations = ({ locations, setLocations, setShowLocationDetails, locationDetail, setLocationDetail }) => {
  const [imageData, setImageData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllImages()
      .then((data) => setImageData(data))
      .catch((err) => setError(err.message));
  }, []);

  const toggleLocationDetail = () => {
    setShowLocationDetails(true);
  };

  return (
    <div className="locations-list">
      {locations.map((location) => {
        // Filter the imageData array based on the location's id
        const locationImageData = imageData.filter((imgData) => imgData.location.id === location.id);
        return (
          <div className="one-location" key={location.id} onClick={() => {
            toggleLocationDetail();
            setLocationDetail(location);
          }}>
            {locationImageData.length > 0 ? (
              <img className="side-img" src={`http://localhost:8000/${locationImageData[0].image}`} alt={location.name} />
            ) : (
              <img className="side-img" src={defaultImage} alt="Default" />
            )}
            <div className="location-name">{location.name}</div>
          </div>
        );
      })}
      {error && <div className="error">{error}</div>}
    </div>
  );
};
