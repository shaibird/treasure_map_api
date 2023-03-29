import { HomeImage } from "./HomeImage"
import { CommunityGrid } from "./CommunityGrid"

export const Home = ({setLocationDetail, locations, locationDetail, showLocationDetails, setShowLocationDetails, fetchLocations}) => {
    return <section className="home">
        <HomeImage />
        <CommunityGrid setLocationDetail={setLocationDetail} locations={locations} locationDetail={locationDetail} showLocationDetails={showLocationDetails} setShowLocationDetails={setShowLocationDetails} fetchLocations={fetchLocations}/>
    </section>

}