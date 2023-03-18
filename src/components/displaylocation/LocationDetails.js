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


export const LocationDetails = ({setShowLocationDetails, locationDetail}) => {
    const [addNote, setAddNote] = useState(false);
    const [addLayer, setAddLayer] = useState(false);
    const [locationNotes, setLocationNotes] = useState([])
    const [modal, setModal] = useState()
    const [noteToUpdate, setNoteToUpdate] = useState([])
    const [addPin, setAddPin] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    const showLocationDetails = () => {
        setShowLocationDetails(false)
    }

    useEffect(() => {
        const fetchLocationNotes = async () => {
          const data = await getLocationNotes(locationDetail.id);
          setLocationNotes(data);
        };
        fetchLocationNotes();
      }, []);

        console.log(locationNotes)

    return <section className="details" key={`location--${locationDetail.id}`}>
    <button onClick={showLocationDetails}>x</button>
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
        <AddNotesButton location={locationDetail} setAddNote={setAddNote} />
        <AddLayerToLocationButton location={locationDetail} setAddLayer={setAddLayer} />
        <DeleteLocationButton location={locationDetail}/>
        {addNote && <AddNotesForm location={locationDetail} setAddNote={setAddNote} /> }
        {modal && <EditNoteForm setModal={setModal} noteToUpdate={noteToUpdate} />} 
        {addLayer && <AddLayerForm location={locationDetail} setAddPin={setAddPin}/>}
    </div>
    </section>
}