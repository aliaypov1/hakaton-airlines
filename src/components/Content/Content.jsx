
import CarouselBox from "../Carousel/CarouselBox";
import Footer from "../Footer/Footer";
import MyImage from "../Imagess/gif.gif";
import MyImages from "../Imagess/gif2.gif";
import MyImagess from "../Imagess/bg.svg";
import Cards from "../Cards/Cards"
import Headers from "../Header/Header";



const Content = () =>{
    return(
        <>
    <Headers />
    <section className="content">
        <div className="container">
            <div className="wrapper">
                <div className="wrapper__img"><img src={MyImagess} alt="" /></div>
            </div>
            <div className="cards grids">
                <div className="content__card" >
                    <h2 className="content__title">Конвертируй PNR в понятный вид для пассажира</h2>
                    <p className="content__text">Вставь PNR из любой GDS, мы сконвертируем его в понятный вид для пассажира. Конвертируй варианты за секунды. Экономь своё время.</p>
                    <p className="content__text">Скопируйте и вставьте контент прямо из GDS в PNR Converter, и через несколько секунд он будет декодирован, создавая полностью настраиваемый, удобный для клиента маршрут, который можно отправить в Outlook или Mail или скопировать в буфер обмена одним нажатием кнопки.</p>
                </div>
                <div className="content__card">
                    <div className="img"><img src={MyImage} alt="dawdwd" /></div>
                </div>
                <div className="content__card">
                    <div className="img"><img src={MyImages} alt="" /></div>
                </div>
                <div className="content__card" >
                    <h2 className="content__title">Конвертируй PNR в понятный вид для пассажира</h2>
                    <p className="content__text">Вставь PNR из любой GDS, мы сконвертируем его в понятный вид для пассажира. Конвертируй варианты за секунды. Экономь своё время.</p>
                    <p className="content__text">Скопируйте и вставьте контент прямо из GDS в PNR Converter, и через несколько секунд он будет декодирован, создавая полностью настраиваемый, удобный для клиента маршрут, который можно отправить в Outlook или Mail или скопировать в буфер обмена одним нажатием кнопки.</p>
                </div>
                
            </div>
            
        </div>
    </section>
    
    <CarouselBox></CarouselBox>
    <Cards></Cards>
    <Footer></Footer>
        </>
    )
}
export default Content;
