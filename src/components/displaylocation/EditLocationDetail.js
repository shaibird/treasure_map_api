import { AddNotesButton } from './AddNotesButton'
import './EditLocationDetails.css'
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



export const EditLocationDetail = ({ fetchLocationNotes, fetchLocationImages, showEditLocationForm, location, fetchLocations, showLocationDetails }) => {
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
                    <div className="details-edit-form" key={`location--${location.id}`}>
                        <button className="edit-modal-close"
                            onClick={() => {
                                showEditLocationForm();
                                fetchLocationNotes();
                                fetchUserPins();
                                fetchLocationImages()
                            }}
                            >Close</button>
                        <div className="location-details-edit">
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
                            <div className='edit-location-modal'>
                                {modal && <EditNoteForm setModal={setModal} noteToUpdate={noteToUpdate} fetchLocationNotes={fetchLocationNotes} />}
                                <AddNotesButton setAddNote={setAddNote} />
                                <AddLayerToLocationButton location={location} setAddLayer={setAddLayer} />
                                {addLayer && <AddLayerForm location={location} setAddPin={setAddLayer} fetchUserPins={fetchUserPins} />}
                                <DisplayLayers location={location} fetchUserPins={fetchUserPins} userLayers={userLayers} />
                                <UploadImageButton setUploadImage={setUploadImage} />
                                <DeleteLocationButton location={location} showLocationDetails={showLocationDetails} fetchLocations={fetchLocations} />

                                {addNote && <AddNotesForm location={location} setAddNote={setAddNote} fetchLocationNotes={fetchLocationNotes} />}
                                {uploadImage && <UploadImageForm location={location} setUploadImage={setUploadImage} />}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}