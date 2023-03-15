import { AddNotesButton } from './AddNotesButton'
import './LocationDetails.css'
import { useState } from 'react';
import { AddNotesForm } from './AddNotesForm';

export const LocationDetails = ({setShowLocationDetails, locationDetail}) => {
    const [addNote, setAddNote] = useState(false);

  

    return <section className="details" key={`location--${locationDetail.id}`}>
    <div className="location-details">
        {locationDetail.name}
        <AddNotesButton location={locationDetail} setAddNote={setAddNote} />
        {addNote && <AddNotesForm location={locationDetail} setAddNote={setAddNote} /> }
    </div>
    </section>
}