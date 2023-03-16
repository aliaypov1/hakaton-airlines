import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyImage from "../Imagess/travelimg1.webp";
import Image from "../Imagess/img4.jpg"
import Images from "../Imagess/img8.jpg"
import Imagess from "../Imagess/gif3.gif"

function BasicExample() {
  return (
    <div className="cards cards__grid container">
   <div className="cards__card"><div className="cards__img"><img src={MyImage} alt="" /></div></div>
   <div className="cards__card"><div className="cards__img"><img src={Image} alt="" /></div></div>
   <div className="cards__card"><div className="cards__img"><img src={Imagess} alt="" /></div></div>
    </div>
  );
}

export default BasicExample;