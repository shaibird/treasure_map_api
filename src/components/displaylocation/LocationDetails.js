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
import { getImagesByLocation } from "../../managers/ImageManager"
import { DisplayLocationImages } from '../images/DisplayLocationImages';



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
    const [locationImages, setLocationImages] = useState([])
    const [editLocationModal, setEditLocationModal] = useState()
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

    const fetchLocationImages = async () => {
        const data = await getImagesByLocation(locationDetail.id);
        setLocationImages(data)
    }

    useEffect(() => {
        fetchLocationImages();
      }, []);

    useEffect(() => {
        fetchLocationNotes();
      }, []);


    return <section className="details" key={`location--${locationDetail.id}`}>
    <div className="images" ><DisplayLocationImages locationImages={locationImages}/></div>
    <div className="location-details">
        
        <div className="name">{locationDetail.name}</div>
        <div className='user-notes'>Your Notes</div>
        {locationNotes.map(
            (note) => {
                return <section className="notes" key={note.id}>
            <li className="note">{note.note}</li>
                </section>
            }
        )}
        {addNote && <AddNotesForm location={locationDetail} setAddNote={setAddNote} fetchLocationNotes={fetchLocationNotes}/> }
        <DisplayLayers location={locationDetail} fetchUserPins={fetchUserPins} userLayers={userLayers}/>
        <button className="close-button-explore" onClick={showLocationDetails}>Close</button>
        <EditLocationButton showEditLocationForm={showEditLocationForm} />
        {modal && <EditNoteForm setModal={setModal} noteToUpdate={noteToUpdate} fetchLocationNotes={fetchLocationNotes} />} 
        {addLayer && <AddLayerForm location={locationDetail} setAddPin={setAddLayer} fetchUserPins={fetchUserPins}/>}
        {uploadImage && <UploadImageForm location={locationDetail} setUploadImage={setUploadImage} fetchLocationImages={fetchLocationImages}/>}
        
        {editLocation && <EditLocationDetail location={locationDetail} showLocationDetails={showLocationDetails} showEditLocationForm={showEditLocationForm} fetchLocationNotes={fetchLocationNotes} fetchLocationImages={fetchLocationImages} fetchUserPins={fetchUserPins}/>}
    </div>
    </section>
}