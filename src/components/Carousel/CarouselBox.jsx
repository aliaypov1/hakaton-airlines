

import Carousel from 'react-bootstrap/Carousel';

import MyImages from "../Imagess/airlines.jpg";
import MyImage from "../Imagess/air4.jpg";
import MyImg from "../Imagess/air3.jpg";

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
         
          <h2>АТАЙ ВЗЛЕТАЙ</h2>
          <h2>Ilim-Airlines</h2>
          <h2>AliLines</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MyImg}
          alt="Second slide"
        />

        <Carousel.Caption>
         
          <h2>АТАЙ ВЗЛЕТАЙ</h2>
          <h2>Ilim-Airlines</h2>
          <h2>AliLines</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MyImage}
          alt="Third slide"
        />

        <Carousel.Caption>
        
          <h2>
            АТАЙ ВЗЛЕТАЙ
          </h2>
          <h2>Ilim-Airlines</h2>
          <h2>AliLines</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default NoTransitionExample;