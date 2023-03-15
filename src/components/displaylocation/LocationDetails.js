import './LocationDetails.css'

export const LocationDetails = ({setShowLocationDetails, locationDetail}) => {
console.log(locationDetail)

    return <section className="details" key={`location--${locationDetail.id}`}>
    <div className="details">
        {locationDetail.name}
    </div>
    </section>
}