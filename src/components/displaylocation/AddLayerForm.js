import { useState, useEffect } from "react";
import './AddNotesForm.css'
import { addPinToLayer, getLayersByUser } from "../../managers/LayerManager";
import { AddNewLayerName } from "./AddNewLayerName";

export const AddLayerForm = ({ location, setAddPin, fetchUserPins }) => {
    const [userLayers, setUserLayers] = useState([]);
    const [checkedState, setCheckedState] = useState([]);
    const [addNewLayer, setAddNewLayer] = useState(false)

    const localUser = localStorage.getItem("tm_token");
    const userObject = JSON.parse(localUser);

    console.log(userObject)

    const fetchUserLayers = async () => {
        const data = await getLayersByUser(userObject.id);
        setUserLayers(data);
        setCheckedState(data.map(layer => false))
    };

    useEffect(() => {
        fetchUserLayers()
    }, []);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };

    //function for adding a pin to a layer to open and close on click
    const handleCloseClick = () => {
        setAddPin(false);
    };

    //function for the new layer NAME to open and close on click
    const handleCloseNewLayer = () => {
        setAddNewLayer(true);
    }

    const savePinToLayer = (event) => {
        event.preventDefault();
      
        const selectedLayers = userLayers.filter((layer, index) => checkedState[index]);
        const pinsToSendToAPI = selectedLayers.map(layer => ({
          layer: layer.id,
          location: location.id
        }));        
      
        pinsToSendToAPI.forEach((pin) => {
          addPinToLayer(pin)
            .then((savedPin) => {
              console.log("Pin saved:", savedPin);
              // Do something with the savedPin, e.g. update state or redirect to another page
            })
            .catch((error) => {
              console.error("Failed to save pin:", error);
              // Do something with the error, e.g. show an error message
            })
            .then(() => {
                handleCloseClick()
            })
            .then(() => {
                fetchUserPins()
            })
        });
      };
      
    

    return (
        <div className="sidebar">
            <div className="modal">
                <div className="overlay">
                    <div className="modal-content">
                       <button onClick={handleCloseNewLayer}>Add a new layer</button>
                       {addNewLayer && <AddNewLayerName setAddNewLayer={setAddNewLayer} fetchUserLayers={fetchUserLayers}/>}
                        <ul className="layer-list">
                            {userLayers.map(({ id, name }, index) => (
                                <li key={id}>
                                    <div className="layer-item">
                                        <div className="left-section">
                                            <input
                                                type="checkbox"
                                                id={`layer-${index}`}
                                                name={name}
                                                value={name}
                                                checked={checkedState[index]}
                                                onChange={() => handleOnChange(index)}
                                            />
                                            <label htmlFor={`layer-${index}`}>{name}</label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button type="button" onClick={savePinToLayer}>Add Layer</button>
                        <button type="button" onClick={handleCloseClick}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
