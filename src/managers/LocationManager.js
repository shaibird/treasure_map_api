import { fetchIt } from "../components/auth/fetchit";

export const getLocations = () => {
    return fetchIt(`http://localhost:8000/locations`
        .then(response => response.json())
    )
}

export const createLocation = (event) => {
    return fetchIt(`http://localhost:8000/locations`, {
        method:"POST",
        body:JSON.stringify(event)
      })
  }