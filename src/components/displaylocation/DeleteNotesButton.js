import { deleteNote } from "../../managers/LocationManager";

export const DeleteNotesButton = ({ noteToUpdate }) => {
  const handleDeleteNote = () => {
    if (noteToUpdate) {
      deleteNote(noteToUpdate.id);
    }
  };

  return (
    <div>
      <button onClick={handleDeleteNote}>Delete note</button>
    </div>
  );
};
