import { Map } from "./Map"
import { SideBar } from "./SideBar"
import {useState, useEffect} from 'react'
import "./SideBar.css"

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