import { deleteLocation } from "../../managers/LocationManager";

export const DeleteLocationButton = ({ location, showLocationDetails, fetchLocations }) => {

  const handleDeleteLocation = () => {
    if (location) {
      deleteLocation(location.id)
        .then(() => {
          fetchLocations()
        })
    }
  };

  return (
    <div>
      <button onClick={() => {
        handleDeleteLocation();
        showLocationDetails();
        ;
      }}>Delete Location</button>
    </div>
  );
};
