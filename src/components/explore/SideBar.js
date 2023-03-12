import "./SideBar.css"
import { useState, useEffect } from "react"

export const SideBar = ({position}) => {
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)

  useEffect(() => {
    if (position) {
      setLat(position.lat)
      setLon(position.lng)
    }
  }, [position])

  return (
    <div className="sidebar">
      {position ? (
        <>
          <div>Latitude: {lat}</div>
          <div>Longitude: {lon}</div>
        </>
      ) : (
        <div>No position selected</div>
      )}
    </div>
  )
}
