import { AddNotesButton } from './AddNotesButton'
import './LocationDetails.css'
import { useState, useEffect } from 'react';
import { AddNotesForm } from './AddNotesForm';
import { getLocationNotes } from '../../managers/LocationManager';
import { deleteNote } from '../../managers/LocationManager';
import { EditNoteForm } from './EditNoteForm';
import { AddLayerToLocationButton } from '../layers/AddLayerToLocationButton';
import { DeleteLocationButton } from './DeleteLocationButton';
import { AddLayerForm } from './AddLayerForm';
import { UploadImageButton } from '../images/UploadImageButton';
import { UploadImageForm } from '../images/UploadImageForm';
import { DisplayLayers } from '../layers/DisplayLayers';
import { getPinsByLocationId } from '../../managers/LayerManager';



export const EditLocationDetail = ({ setShowLocationDetails, location, fetchLocations, showLocationDetails }) => {
    const [addNote, setAddNote] = useState(false);
    const [addLayer, setAddLayer] = useState(false);
    const [locationNotes, setLocationNotes] = useState([])
    const [modal, setModal] = useState()
    const [noteToUpdate, setNoteToUpdate] = useState([])
    const [uploadImage, setUploadImage] = useState(false)
    const [userLayers, setUserLayers] = useState([]);
    const [addPin, setAddPin] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    const fetchLocationNotes = async () => {
        const data = await getLocationNotes(location.id);
        setLocationNotes(data);
    };


    const fetchUserPins = async () => {
        const data = await getPinsByLocationId(location.id);
        setUserLayers(data);
    };

    useEffect(() => {
        fetchLocationNotes();
    }, []);

    console.log(locationNotes)

    return (
        <div className="modal-edit">
            <div className="overlay-edit">
                <div className="modal-content-edit">
                    <div className="details" key={`location--${location.id}`}>
                        <button onClick={showLocationDetails}>x</button>
                        <div className="location-details">
                            {location.name}
                            {locationNotes.map(
                                (note) => {
                                    return <section className="notes" key={note.id}>
                                        <button onClick={() => {
                                            toggleModal()
                                            setNoteToUpdate(note)
                                        }}>Edit</button>{note.note}
                                    </section>
                                }
                            )}
                            <AddNotesButton setAddNote={setAddNote} />
                            <AddLayerToLocationButton location={location} setAddLayer={setAddLayer} />
                            <DisplayLayers location={location} fetchUserPins={fetchUserPins} userLayers={userLayers} />
                            <UploadImageButton setUploadImage={setUploadImage} />
                            <DeleteLocationButton location={location} showLocationDetails={showLocationDetails} fetchLocations={fetchLocations} />

                            {addNote && <AddNotesForm location={location} setAddNote={setAddNote} fetchLocationNotes={fetchLocationNotes} />}
                            {modal && <EditNoteForm setModal={setModal} noteToUpdate={noteToUpdate} fetchLocationNotes={fetchLocationNotes} />}
                            {addLayer && <AddLayerForm location={location} setAddPin={setAddLayer} fetchUserPins={fetchUserPins} />}
                            {uploadImage && <UploadImageForm location={location} setUploadImage={setUploadImage} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}