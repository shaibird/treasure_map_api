import { DeleteNotesButton } from "./DeleteNotesButton";
import { useState } from "react";
import { Toggle } from "../savelocation/ToggleButton";
import { updateNote } from "../../managers/LocationManager";
import './EditNoteForm.css'

export const EditNoteForm = ({ setModal, noteToUpdate, fetchLocationNotes }) => {
    const localUser = localStorage.getItem("tm_token");
    const userObject = JSON.parse(localUser);

    const noteId = noteToUpdate.id

    const [note, setNote] = useState({
        note: noteToUpdate.note,
        location: noteToUpdate.location,
        user: userObject.id,
        private: noteToUpdate.private,
        date: new Date(),
    });

    const updateExistingNote = (event) => {
        event.preventDefault();

        const noteToSendToAPI = {
            ...note,
            date: new Date(),
        };

        updateNote(noteToSendToAPI, noteId)
            .then((savedNote) => {
                console.log("Note updated:", savedNote);
                // Do something with the savedLocation, e.g. update state or redirect to another page
            })
            .catch((error) => {
                console.error("Failed to update note:", error);
                // Do something with the error, e.g. show an error message
            })
            .then(() => {
                handleCloseClick()
            })
            .then(() => {
                fetchLocationNotes()
            })
    };

    const handleCloseClick = () => {
        setModal(false);
    }

    const handleSubmit = (event) => {
        updateExistingNote(event);
    }

    const handleNoteChange = (event) => {
        setNote({
            ...note,
            note: event.target.value,
        });
    }

    const handleToggle = (isToggled) => {
        setNote({
            ...note,
            private: isToggled,
        });
    };

    return (
        <div className="edit">
            <div className="edit-note-form">
                <DeleteNotesButton noteToUpdate={noteToUpdate} handleCloseClick={handleCloseClick} />
                <form className="edit-note-form" onSubmit={handleSubmit}>
                    <fieldset className="notes">
                        <div className="form-group-note">
                            <label className="edit-note" htmlFor="name">Note:</label>
                            <textarea
                                rows="5" cols="25"
                                required autoFocus
                                type="text"
                                className="edit-form"
                                value={note.note}
                                onChange={handleNoteChange}
                            />
                        </div>
                        <Toggle label="Private" toggled={note.private} onToggle={handleToggle} />
                    </fieldset>
                    <button type="button" onClick={updateExistingNote}>Update Note</button>
                    <button type="button" onClick={handleCloseClick}>Close</button>
                </form>
            </div></div>
    );
};