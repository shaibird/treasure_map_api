import { getLayersByUser, getPinsByLayerID, getPinsByLocationId } from "../../managers/LayerManager";
import { useEffect, useState } from "react";
import './Layers.css'

export const DisplayLayers = ({location, fetchUserPins, userLayers}) => {

  const localUser = localStorage.getItem("tm_token");
  const userObject = JSON.parse(localUser);



  useEffect(() => {
    fetchUserPins();
  }, [location]);

  if (userLayers.length === 0) {
    return <section>
    <div className="userlayers">Your Location Layers</div><p></p></section>
  } else if (userLayers.length === 1) {
    const layer = userLayers[0];
    return (
      <section>
      <div className="userlayers">Your Location Layers</div>
      <div>
        <p key={layer.id} onClick={() => {}}>
          {layer.layer.name}
        </p>
      </div></section>
    );
  } else {
    return (
      <section>
      <div className="userlayers">Your Location Layers</div>
      <div>
        {userLayers.map((layer) => (
          <p key={layer.id} onClick={() => {}}>
            {layer.layer.name}
          </p>
        ))}
      </div></section>
    );
  }
};
