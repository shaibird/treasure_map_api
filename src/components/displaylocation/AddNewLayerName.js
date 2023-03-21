import { useState, useEffect } from "react";
import { createNewLayer, getLayersByUser } from "../../managers/LayerManager";
import { Toggle } from "../savelocation/ToggleButton";
import './AddNotesForm.css'

export const AddNewLayerName = ({setAddNewLayer, fetchUserLayers}) => {
     const localUser = localStorage.getItem("tm_token");
    const userObject = JSON.parse(localUser);


    const saveNewLayer = (event) => {
        event.preventDefault();

        const LayerToSendToAPI = {
            ...layer,
        };

        createNewLayer(LayerToSendToAPI)
            .then((savedLayer) => {
                console.log("layer saved:", savedLayer);
                // Do something with the savedLocation, e.g. update state or redirect to another page
            })
            .catch((error) => {
                console.error("Failed to save layer:", error);
                // Do something with the error, e.g. show an error message
            })
            .then(() => {
                handleCloseClick()
            })
            .then(() => {
                fetchUserLayers()
            })
    };

    const [layer, setLayer] = useState({
        name: "",
        user: userObject.id,
    });


    const handleCloseClick = () => {
        setAddNewLayer(false);
    }

    const handleSubmit = (event) => {
        saveNewLayer(event);
    }

    return (
        <div className="new-layer">
            <form className="save-layer" onSubmit={handleSubmit}>
                <fieldset className="newlayer">
                    <div className="">
                        <label htmlFor="name">Layer Name:</label>
                        <input
                            required autoFocus
                            type="text"
                            className=""
                            placeholder="name your layer"
                            value={layer.name}
                            onChange={(event) => setLayer(prevLayer => ({ ...prevLayer, name: event.target.value }))}
                        />
                    </div>

                </fieldset>
                <button type="button" onClick={handleSubmit}>Save New Layer</button>
                <button type="button" onClick={handleCloseClick}>Close</button>
            </form>
        </div>
    );
};
