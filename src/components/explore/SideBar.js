import "./SideBar.css"
import { useState, useEffect } from "react"

export const SideBar = ({position}) => {
    const [location, setLocation] = useState()

    
    useEffect(() => {
        setLocation(position)
    }, [position])

    return <>
    <div classname="sidebar">
        lat=
    </div>
    </>
}