import "./SideBar.css"
import { SaveLocation } from "./SaveLocation"
import { DisplayLocations } from "../displaylocation/DisplayLocations"


export const SideBar = ({position, locations, setLocations}) => {
return <>
    <DisplayLocations locations={locations} setLocations={setLocations}/>
</>
}
