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



export const EditLocationDetail = ({ fetchLocationNotes, fetchLocationImages, showEditLocationForm, location, fetchLocations, showLocationDetails, locationNotes }) => {
    const [addNote, setAddNote] = useState(false);
    const [addLayer, setAddLayer] = useState(false);
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
                        <section className="top-section"><div className='top'><button className="edit-modal-close"
                            onClick={() => {
                                showEditLocationForm();
                                fetchLocationNotes();
                                fetchUserPins();
                                fetchLocationImages()
                            }}
                            >Close</button>
                        <div className="location-details-edit"></div>
                           <div className="location-name-edit">{location.name}</div> </div>
                        </section>
                        <div className='Location-notes'>Location Notes<AddNotesButton setAddNote={setAddNote} /></div>
                        <div className='notes-container'>
                        {addNote && <AddNotesForm location={location} setAddNote={setAddNote} fetchLocationNotes={fetchLocationNotes} />}
                            {locationNotes.map(
                                (note) => {
                                    return <section className="notes-edit" key={note.id}>
                                        <button className="edit-note-button" onClick={() => {
                                            toggleModal()
                                            setNoteToUpdate(note)
                                        }}>Edit</button>{note.note}

                                    </section>

                                }

                            )}
                                {modal && <EditNoteForm setModal={setModal} noteToUpdate={noteToUpdate} fetchLocationNotes={fetchLocationNotes} />}
                                </div>
                                <div className='layer'><section className='layer-header'><div className="layer-edit">
                                <div className="layer-title">Your Location Layers</div> 
                                <AddLayerToLocationButton location={location} setAddLayer={setAddLayer} /></div></section>
                                {addLayer && <AddLayerForm location={location} setAddPin={setAddLayer} fetchUserPins={fetchUserPins} />}
                                <DisplayLayers location={location} fetchUserPins={fetchUserPins} userLayers={userLayers} /></div>
                                <UploadImageButton setUploadImage={setUploadImage} />
                                <DeleteLocationButton location={location} showLocationDetails={showLocationDetails} fetchLocations={fetchLocations} />

                              
                                {uploadImage && <UploadImageForm location={location} setUploadImage={setUploadImage} />}</div>
                        </div>
                    </div>
                </div>
    )
}