import { deleteNote } from "../../managers/LocationManager";

export const DeleteNotesButton = ({ noteToUpdate, handleCloseClick, fetchLocationNotes }) => {
  const handleDeleteNote = () => {
    if (noteToUpdate) {
      deleteNote(noteToUpdate.id);
    }
  };

  return (
    <div>
      <button onClick={()=> {
        handleDeleteNote();
        handleCloseClick();
        fetchLocationNotes()
      }}>Delete note</button>
    </div>
  );
};
