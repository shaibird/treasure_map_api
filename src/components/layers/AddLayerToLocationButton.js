
export const AddLayerToLocationButton = ({location, setAddLayer}) => {

    const handleLayer = () => {
        setAddLayer(true);
      }
    return <>
    <div className="layer-button">
    <><button onClick={handleLayer}>Add Layer to Location</button></>
   </div>

  
    </>
}