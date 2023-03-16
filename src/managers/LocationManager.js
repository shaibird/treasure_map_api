import { fetchIt } from "../components/auth/fetchit";

export const getLocations = () => {
    return fetchIt(`http://localhost:8000/locations`
    )
}

export const createLocation = (event) => {
    return fetchIt(`http://localhost:8000/locations`, {
        method:"POST",
        body:JSON.stringify(event)
      })
  }

export const saveNote = (event) => {
    return fetchIt(`http://localhost:8000/locationnotes`,{
        method:"POST",
        body:JSON.stringify(event)
    })
}

export const getLocationNotes = (id) => {
    return fetchIt(`http://localhost:8000/locationnotes?location_id=${id}`)
}

export const deleteNote = (id) => {
    return fetchIt(`http://localhost:8000/locationnotes/${id}`, {
      method: "DELETE"
    })
  }

  export const updateNote = (comment, id) => {
    return fetchIt(`http://localhost:8000/locationnotes/${id}`, {
      method: "PUT",
      body: JSON.stringify(comment),
    })
  }

  export const deleteLocation = (id) => {
    return fetchIt(`http://localhost:8000/locations/${id}`, {
      method: "DELETE"
    })
  }

  export const createNewLayer = (event) => {
    return fetchIt(`http://localhost:8000/layers`, {
        method:"POST",
        body:JSON.stringify(event)
      })
  }

  export const addPinToLayer = (event) => {
    return fetchIt(`http://localhost:8000/pins`, {
        method:"POST",
        body:JSON.stringify(event)
      })
  }

  export const getPinsByLayer = (layer) => {
    const encodedLayer = layer.replace(/\s/g, '%20');
    return fetchIt(`http://localhost:8000/pins?layernames=${encodedLayer}`);
  }
  