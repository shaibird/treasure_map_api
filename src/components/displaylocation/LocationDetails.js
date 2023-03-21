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
import { EditLocationButton } from './EditLocationButton';
import { EditLocationDetail } from './EditLocationDetail';



export const LocationDetails = ({setShowLocationDetails, locationDetail, fetchLocations}) => {
    const [addNote, setAddNote] = useState(false);
    const [addLayer, setAddLayer] = useState(false);
    const [locationNotes, setLocationNotes] = useState([])
    const [modal, setModal] = useState()
    const [noteToUpdate, setNoteToUpdate] = useState([])
    const [uploadImage, setUploadImage] = useState(false)
    const [userLayers, setUserLayers] = useState([]);
    const [addPin, setAddPin] = useState(false)
    const [editLocation, setEditLocation] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    const fetchLocationNotes = async () => {
        const data = await getLocationNotes(locationDetail.id);
        setLocationNotes(data);
      };

    const showLocationDetails = () => {
        setShowLocationDetails(false)
    }

    const showEditLocationForm = () => {
        setEditLocation(!editLocation)
    }

    const fetchUserPins = async () => {
        const data = await getPinsByLocationId(locationDetail.id);
        setUserLayers(data);
      };

    useEffect(() => {
        fetchLocationNotes();
      }, []);

        console.log(locationNotes)

    return <section className="details" key={`location--${locationDetail.id}`}>
    <button className="close-button-explore" onClick={showLocationDetails}>x</button>
    <div className="location-details">
        {locationDetail.name}
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
        <AddLayerToLocationButton location={locationDetail} setAddLayer={setAddLayer} />
        <DisplayLayers location={locationDetail} fetchUserPins={fetchUserPins} userLayers={userLayers}/>
        <UploadImageButton setUploadImage={setUploadImage} />
        <DeleteLocationButton location={locationDetail} showLocationDetails={showLocationDetails} fetchLocations={fetchLocations}/>
        <EditLocationButton showEditLocationForm={showEditLocationForm} />
        {addNote && <AddNotesForm location={locationDetail} setAddNote={setAddNote} fetchLocationNotes={fetchLocationNotes}/> }
        {modal && <EditNoteForm setModal={setModal} noteToUpdate={noteToUpdate} fetchLocationNotes={fetchLocationNotes} />} 
        {addLayer && <AddLayerForm location={locationDetail} setAddPin={setAddLayer} fetchUserPins={fetchUserPins}/>}
        {uploadImage && <UploadImageForm location={locationDetail} setUploadImage={setUploadImage} />}
        {editLocation && <EditLocationDetail location={locationDetail} showLocationDetails={showLocationDetails}/>}
    </div>
    </section>
}