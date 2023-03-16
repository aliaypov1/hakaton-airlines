import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Image  from "../Imagess/person.svg";
import Videomodal from "../Videomodal/Videomodal";

const About = () => {
   

    const [openModal,setOpenModal] = useState(false)
    
    
    return (
        <>
        <Header/>
            <section className="about">
                <div className="about__cards abou__grid container">
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
                                <pre className="about__info">1  TS 275 J 15OCT 4 LGWYVR HK1         1010 1200   332 E 0</pre>
                                <pre className="about__info">2  AC8097 Y 15OCT 4 YVRSEA HK1         1335 1435   DH4 E 0</pre>
                                <pre className="about__info">3  AS2254 F 17OCT 6 SEAPDX HK1         1700 1753   E75 E 0</pre>
                                <pre className="about__info">4  AA7007 J 17OCT 6 PDXLHR HK1         1845 1210+1 788 E 0</pre>
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
                                    <input type="text" className="input" />
                                   
                                </label>
                                
                                <button  onClick={() => setOpenModal(true)   } className="about__btn">Click</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Footer></Footer>
            </section>
            
            <Videomodal open={openModal}  onClose={() => setOpenModal(false)}/>
           
        </>
    )
}
export default About;