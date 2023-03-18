import React, { useState } from "react";
import useTimeout from "../Usetimeout/Usetimeout";
const Videomodal =({open,onClose})=>{

    const img ={
        img:'https://media.tenor.com/TaPrrolZusQAAAAC/%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0-%D0%B4%D0%B8%D0%BC%D0%B0%D0%BC%D0%B0%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2.gif',
        img:'https://media.tenor.com/68whAcFy11cAAAAC/%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0.gif',
        img:'https://media3.giphy.com/media/SqNI2pZQ5sd0UtwDVD/giphy.gif',
    }
    if (!open) return null
    if(open){
      
   
    return(
        <>
            <div className="modal">
                <div className="modal__content">
                   <img src={img.img} alt="" />
                    <button onClick={onClose} className='btn' >x</button>
                </div>
            </div>
         
        </>
    )
}
}
export default Videomodal;