import { deleteLocation } from "../../managers/LocationManager";

export const DeleteLocationButton = ({ location }) => {

  const handleDeleteLocation = () => {
    if (location) {
      deleteLocation(location.id);
    }
  };

  return (
    <div>
      <button onClick={handleDeleteLocation}>Delete note</button>
    </div>
  );
};
