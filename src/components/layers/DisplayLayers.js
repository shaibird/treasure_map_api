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
    <div className="userlayers"></div><p></p></section>
  } else if (userLayers.length === 1) {
    const layer = userLayers[0];
    return (
      <section>
      <div className="userlayers"></div>
      <div>
        <li key={layer.id} onClick={() => {}}>
          {layer.layer.name}
        </li>
      </div></section>
    );
  } else {
    return (
      <section>
      <div className="userlayers"></div>
      <div>
        {userLayers.map((layer) => (
          <li key={layer.id} onClick={() => {}}>
            {layer.layer.name}
          </li>
        ))}
      </div></section>
    );
  }
};
