import "./SideBar.css"
import { SaveLocation } from "./SaveLocation"
import { DisplayLocations } from "../displaylocation/DisplayLocations"
import { LocationDetails } from "../displaylocation/LocationDetails"


export const SideBar = ({position, locations, setLocations, showLocationDetails, locationDetails, setShowLocationDetails, setLocationDetail, fetchLocations }) => {
return <>
    <DisplayLocations locations={locations} setLocations={setLocations} setShowLocationDetails={setShowLocationDetails} setLocationDetail={setLocationDetail} fetchLocations={fetchLocations}/>
</>
}
