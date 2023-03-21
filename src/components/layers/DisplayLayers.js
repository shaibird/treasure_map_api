import { getLayersByUser, getPinsByLayerID, getPinsByLocationId } from "../../managers/LayerManager";
import { useEffect, useState } from "react";

export const DisplayLayers = ({location, fetchUserPins, userLayers}) => {

  const localUser = localStorage.getItem("tm_token");
  const userObject = JSON.parse(localUser);



  useEffect(() => {
    fetchUserPins();
  }, [location]);

     console.log(userLayers)
  if (userLayers.length === 0) {
    return <p>No layers found.</p>;
  } else if (userLayers.length === 1) {
    const layer = userLayers[0];
    return (
      <div>
        <p key={layer.id} onClick={() => {}}>
          {layer.layer.name}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        {userLayers.map((layer) => (
          <p key={layer.id} onClick={() => {}}>
            {layer.layer.name}
          </p>
        ))}
      </div>
    );
  }
};
