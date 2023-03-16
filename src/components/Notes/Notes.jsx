import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Notes = () =>{
    return(
        <>
        <Header/>
        <div className="notes">
            <div className="notes__grid">
                <div className="notes__title"><div className="notes__text">Для чего нужен заметки?
В «Заметках» можно вести списки дел и покупок — или записывать туда идеи и мысли, которые важно не забыть. Если заметка нужна постоянно, закрепите её вверху — так она всегда будет на виду. А ещё к заметкам можно прикладывать фотографии: например, снимки квитанций или объявлений.</div></div>
            <div className="notes__img"><img src="https://cdn3d.iconscout.com/3d/premium/thumb/notes-7042559-5728147.png" alt="" width='600px' /></div>
            </div>
           
            <div className="notes__container">
                <div className="notes__inputs">
                    <label htmlFor="">
                        <input type="text" />
                        <button className="notes__btn">Сохранить</button>
                    </label>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Notes;
