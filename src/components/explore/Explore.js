import { Map } from "./Map"
import { SideBar } from "../sidebar/SideBar"
import {useState, useEffect} from 'react'
import "./Explore.css"

export const Explore = () => {
    const [position, setPosition] = useState(null);

    return (
        <div className="explore">
        <div className="sidebar">
            <SideBar position={position}/>
        </div>
        <div className="map-container">
            <Map position={position} setPosition={setPosition}/>
        </div>
        </div>
    )
}