import { useState, useEffect } from 'react';
import { getAllImages } from '../../managers/ImageManager';
import defaultImage from './defaultImage.svg';
import './CommunityGrid.css'
import { useNavigate } from 'react-router-dom';



export const CommunityGrid = ({locations, locationDetail, showLocationDetails, setShowLocationDetails, fetchLocations, setLocationDetail}) => {
  const [imageData, setImageData] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    getAllImages()
      .then((data) => setImageData(data))
      .catch((err) => setError(err.message));
  }, []);

  const toggleLocationDetail = () => {
    setShowLocationDetails(true);
  };

  const navigateExplore = () => {
    navigate('/explore')
  }
  return ( 
    <div className="community-grid">
  <div className="grid-header">New and Noteworthy in the Community</div>
    <div className="locations-grid">
       
        {locations.slice(0, 10).map((location) => {
        // Filter the imageData array based on the location's id
        const locationImageData = imageData.filter((imgData) => imgData.location.id === location.id);
        return (
          <div className="one-location-grid" key={location.id} onClick={() => {
            toggleLocationDetail();
            setLocationDetail(location);
            navigateExplore()
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
    </div></div>
  );
};
