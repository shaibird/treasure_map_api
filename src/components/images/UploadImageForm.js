import React, { useState } from 'react';
import { addImage } from '../../managers/ImageManager';

export const UploadImageForm = ({ location, setUploadImage }) => {
  const localUser = localStorage.getItem('tm_token');
  const userObject = JSON.parse(localUser);
  const [image, setImage] = useState("")

  const [userImage, setUserImage] = useState({
    user: userObject.id,
    location: location.id,
    private: false,
    image: image,
    date: new Date().toISOString()
  });
  
  console.log(userImage)

  const getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
  }

  const createLocationImageString = (event) => {
    getBase64(event.target.files[0], (base64ImageString) => {
      console.log("Base64 of file is", base64ImageString);
      setImage(base64ImageString);
      setUserImage({
        ...userImage,
        image: base64ImageString,
      });
    });
  };

  const handleUploadImageForm = () => {
    setUploadImage(false);
}


  const handleSubmit = (event) => {
    saveNewImage(event);
  }


  const handleChange = (e) => {
    const { id, checked } = e.target;
    const value = checked;
    setUserImage({ ...userImage, [id]: value });
  };


  const saveNewImage = (event) => {
    event.preventDefault();
  
    const imageToSendToAPI = {
      ...userImage,
      date: new Date().toISOString() // add a default value for the date field
    };
  
    addImage(imageToSendToAPI)
      .then((savedImage) => {
        console.log('Image saved:', savedImage);
        // Do something with the savedImage, e.g. update state or redirect to another page
      })
      .catch((error) => {
        console.error('Failed to save image:', error);
        // Do something with the error, e.g. show an error message
      })
      .then(() => {
        handleUploadImageForm()
      })
  };
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="checkbox"
            id="private"
            name="private"
            checked={userImage.private}
            onChange={handleChange}
          />
          <label htmlFor="private">Private</label>
        </p>
        <p>
          <input
            type="file"
            id="uploadedImage"
            accept="image/*"
            onChange={createLocationImageString}
            required
          />
        </p>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};
