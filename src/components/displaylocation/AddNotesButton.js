

export const AddNotesButton = ({setAddNote}) => {
    const handleAddNoteForm = () => {
        setAddNote(true);
      }
    return <>
    <div>
    <><button onClick={handleAddNoteForm}>Add a note</button></>
   </div>

  
    </>
}