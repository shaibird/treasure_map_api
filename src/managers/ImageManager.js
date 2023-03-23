import { fetchIt } from "../components/auth/fetchit"

export const getAllImages = () => {
    return fetchIt(`http://localhost:8000/images`)
  }
  

export const addImage = (event) => {
    return fetchIt(`http://localhost:8000/images`,{
        method:"POST",
        body:JSON.stringify(event)
    })
}

export const getImagesByLocation = (id) => {
    return fetchIt(`http://localhost:8000/images?location=${id}`)
}
