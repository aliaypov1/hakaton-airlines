import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Modal from './components/Modal/Modal'
import './assets/styles/style.scss'
import './assets/styles/media.css'
import CarouselBox from './components/Carousel/CarouselBox';
import About from "./components/About/About";
import Cards from './components/Cards/Cards'
import Registr from "./components/Registr/Registr";
import Authofex from "./components/Authofex/Authofex";
import Videomodal from "./components/Videomodal/Videomodal";
import Notes from "./components/Notes/Notes";
import useTimeout from "./components/Usetimeout/Usetimeout";
import Wheater from "./Wheater/Wheater";

const App = () => {

 

  return (
    <BrowserRouter>

      {/* <Header /> */}
      <Routes>
        <Route path='/Footer' element={<Footer />} />
        <Route path='/content' element={<Content/>}/>
        <Route path='/' element={<Registr/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Registr' element={<Registr/>}/>
        <Route path='/Authofex' element={<Authofex/>}/>
        <Route path='/Notes' element={<Notes/>}/>
        <Route path='/Wheater' element={<Wheater/>}/>
      </Routes>

    </BrowserRouter>
  );
};
export default App;