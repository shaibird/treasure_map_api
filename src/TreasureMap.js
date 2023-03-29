import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { Register } from "./components/auth/Register"
import { Explore } from "./components/explore/Explore"
import { Login } from "./components/auth/Login"
import { Home } from "./components/home/Home"
import { useState, useEffect } from "react"
import { getLocations } from "./managers/LocationManager"



export const TreasureMap = () => {
  const [locations, setLocations] = useState([])
  const [locationDetail, setLocationDetail] = useState([])
  const [showLocationDetails, setShowLocationDetails] = useState(false)

  const fetchLocations = async () => {
    const data = await getLocations();
    setLocations(data);
  }

  console.log(locationDetail)

  useEffect(() => {
    fetchLocations()
  },
    []
  )

	return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/explore" element={<Explore locations={locations} locationDetail={locationDetail} showLocationDetails={showLocationDetails} setShowLocationDetails={setShowLocationDetails} setLocations={setLocations} setLocationDetail={setLocationDetail} fetchLocations={fetchLocations}/>} />
      <Route path="/home" element={<Home setLocationDetail={setLocationDetail} locations={locations} locationDetail={locationDetail} showLocationDetails={showLocationDetails} setShowLocationDetails={setShowLocationDetails} fetchLocations={fetchLocations}/>} />
      <Route
        path="*"
        element={
          <Authorized>
            <>
              <ApplicationViews />
            </>
          </Authorized>
        }
      />
    </Routes>
  );
}

