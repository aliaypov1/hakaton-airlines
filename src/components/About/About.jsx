import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Image from "../Imagess/person.svg";
import Videomodal from "../Videomodal/Videomodal";
import useTimeout from "../Usetimeout/Usetimeout";
import axios from "axios";
import React from "react";


const About = () => {

    const [inpValue, setInpValue] = useState("")
    const [pnr, setPnr] = useState("")
    const [pnrs, setPnrs] = useState([])
    // const convertPnr = async(pnr) => {
    //     console.log(pnr);
    //     const resp = await fetch("https://hakatonforwin.azurewebsites.net/", {
    //         method: "GET"
    //     })
    //     const data = resp.json()
    //     console.log(data);
    // // }

    // async function postPnrToServer(pnr) {
    //     const url = 'https://hakatonforwin.azurewebsites.net/api/Parse';
    //     const options = {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ pnr })
    //     };
    //     try {
    //       const response = await fetch(url, options);
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //       }
    //       const data = await response.json();
    //       console.log(data); // do something with the response data
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   }

    // postPnrToServer("TS 275 J 15OCT 4 LGWYVR HK1 1010 1200 332 E 0")

   

    async function postPnrToServer(pnr){
        console.log(pnr);
            if(pnr){
            const resp = await axios.post(`https://hakatonforwin.azurewebsites.net/api/Parse?pnr=${pnr}`)
            console.log(resp);
            const data = resp
            return data
            }
    
        }

        const handleClick = async (e, pnr) => {
        const data = await postPnrToServer(pnr)
           setInpValue(data.data)
        }

    
    // postPnrToServer("TS 275 J 15OCT 4 LGWYVR HK1 1010 1200 332 E 0")



    
    const [openModal, setOpenModal] = useState(false)
    const data = () => {
        if (setOpenModal == true) {
            setTimeout((e) => {
                return setOpenModal(false)
            }, 3000)
        }
    }
   

    return (
        <>
            <Header />
            <section className="about">
                <div className="about__cards about__grid container">
                    <div className="about__card">
                        <h2 className="about__sm-title">Преобразование туристических услуг и операций на новый уровень</h2>
                        <br />
                        <br />
                        <h2 className="about__sm-text">otti предлагает передовые технологические решения туристическим командам любого размера.</h2>
                        <div className="about__sm-btn">
                            <a href="#start">Начать</a>
                        </div>
                    </div>
                    <div className="about__card">
                        <div className="about__img"><img src={Image} alt="" /></div>
                    </div>
                </div>
                <div className="container">
                    <div className="about__content">
                        <h2 id="start" className="about__title" >Конвертируй PNR в понятный вид для пассажира</h2>
                        <br />
                        <h2 className="about__text">Вставь PNR из любой GDS, мы сконвертируем его в понятный вид для пассажира. Конвертируй варианты за секунды. Экономь своё время.</h2>
                        <div className="about__container">
                            <div className="about__desc">
                                <pre className="about__info">TS 275 J 15OCT 4 LGWYVR HK1         1010 1200   332 E 0</pre>
                                <pre className="about__info">AC 8097 Y 15OCT 4 YVRSEA HK1         1335 1435   DH4 E 0</pre>
                                <pre className="about__info">AS 2254 F 17OCT 6 SEAPDX HK1         1700 1753   E75 E 0</pre>
                                <pre className="about__info">AA 7007 J 17OCT 6 PDXLHR HK1         1845 1210 788 E 0</pre>
                                <div className="icon"><img src="https://cdn-icons-png.flaticon.com/512/3183/3183327.png" width='70px' alt="" /></div>
                            </div>
                            <div className="about__desc">
                                <pre className="about__info">15 окт., 10:10 – 12:00, Лондон (Гатвик) — Ванкувер, TS 275, Air Transat</pre>
                                <pre className="about__info">15 окт., 13:35 – 14:35, Ванкувер — Сиэтл (Такома), AC 8097, Air Canada</pre>
                                <pre className="about__info">17 окт., 17:00 – 17:53, Сиэтл (Такома) — Портленд, AS 2254, Alaska Airlines</pre>
                                <pre className="about__info">17 окт., 18:45 – 12:10, Портленд — Лондон (Хитроу), AA 7007, American Airlines</pre>
                            </div>
                        </div>
                        <div className="about__wrapper">
                            <div className="about__input">
                                <label htmlFor="">
                                    <input name="city" type="text" value={inpValue} className="input" onChange={(e)=>{setInpValue(e.target.value)}}/>

                                </label>

                                <button className="about__btn" onClick={(e)=>{handleClick(e, inpValue)}}>Click</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </section>

            <Videomodal open={openModal} onClose={() => setOpenModal(false)} />

        </>
    )
}
export default About;