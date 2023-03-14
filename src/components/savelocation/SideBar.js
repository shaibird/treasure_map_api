import "./SideBar.css"
import { SaveLocation } from "./SaveLocation"
import { DisplayLocations } from "../displaylocation/DisplayLocations"


export const SideBar = ({position}) => {
return <>
    <SaveLocation position={position}/>
    <DisplayLocations />
</>
}
