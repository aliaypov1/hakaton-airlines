

import Carousel from 'react-bootstrap/Carousel';

import MyImages from "../Imagess/photo.jpg";
import MyImage from "../Imagess/photo2.jpg";
import MyImg from "../Imagess/photo3.jpg";

const  NoTransitionExample=()=> {
  return (
    <div className='slider'>
    <Carousel slide={false}>
      <Carousel.Item>
        
        <img
          className="d-block w-100"
          src={MyImages}
          alt="First slide"
        />
        <Carousel.Caption>
         
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MyImg}
          alt="Second slide"
        />

        <Carousel.Caption>
         
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MyImage}
          alt="Third slide"
        />

        <Carousel.Caption>
        
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default NoTransitionExample;