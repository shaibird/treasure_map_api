import { AddNotesForm } from "./AddNotesForm"

export const AddNotesButton = ({addNote, setAddNote, location, }) => {
    const handleAddNoteForm = () => {
        setAddNote(true);
      }
    return <>
    <div>
    <><button onClick={handleAddNoteForm}>Add a note</button></>
   </div>

  
    </>
}