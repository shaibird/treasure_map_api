import "./SideBar.css"
import { SaveLocation } from "./SaveLocation"
import { DisplayLocations } from "../displaylocation/DisplayLocations"
import { LocationDetails } from "../displaylocation/LocationDetails"


export const SideBar = ({position, locations, setLocations, showLocationDetails, locationDetails, setShowLocationDetails, setLocationDetail}) => {
return <>
    <DisplayLocations locations={locations} setLocations={setLocations}/>
    {/* {showLocationDetails && <LocationDetails setShowLocationDetails={setShowLocationDetails} setLocationDetail={setLocationDetail} locationDetails={locationDetails}/>} */}
</>
}
