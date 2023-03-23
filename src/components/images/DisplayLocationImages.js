import { getImagesByLocation } from "../../managers/ImageManager"
import './DisplayLocationImages.css'
import sprite from './sprite.svg'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import defaultImage from './defaultImage.svg'

export const DisplayLocationImages = ({locationImages}) => {
  if (locationImages.length > 0) {
    return (
      <div className="box">
        <Carousel useKeyboardArrows={true}>
          {locationImages.map((location) => (
            <div className="slide" key={location.id}>
              <img alt="sample_file" src={`http://localhost:8000/${location.image}`} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  } else {
    return (
      <div className="box">
        <img className="default" alt="default_image" src={defaultImage} />
      </div>
    );
  }
}
