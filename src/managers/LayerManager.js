import { fetchIt } from "../components/auth/fetchit"

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

    //not sure I actually need this one, really just need to get pins by layer ID
export const getPinsByLayerName = (layer) => {
    const encodedLayer = layer.replace(/\s/g, '%20');
    return fetchIt(`http://localhost:8000/pins?layernames=${encodedLayer}`);
    }

export const getPinsByLayerID = (id) => {
    return fetchIt(`http://localhost:8000/pins?layer=${id}`)
}

export const getLayersByUser = (id) => {
    return fetchIt(`http://localhost:8000/layers?user=${id}`)
}

export const getPinsByLocationId=(id) => {
    return fetchIt(`http://localhost:8000/pins?location=${id}`)
}