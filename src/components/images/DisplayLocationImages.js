import { getImagesByLocation } from "../../managers/ImageManager"
import './DisplayLocationImages.css'
import sprite from './sprite.svg'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const DisplayLocationImages = ({locationImages}) => {
    console.log(locationImages)
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}>
        {locationImages.map((location) => (
          <div className="slide">
            <img alt="sample_file" src={`http://localhost:8000/${location.image}`} key={location.id} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}