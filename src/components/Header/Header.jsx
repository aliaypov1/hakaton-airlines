import { NavLink, Link, Outlet } from "react-router-dom"
import React,{useState} from "react";
import Modal from "../Modal/Modal";
import Footer from "../Footer/Footer";
const Header = () =>{
    const [openModal,setOpenModal] = useState(false)
    return(
        <>
        <header className="header">
            <Link href="#" className="header__logo"> Airlines</Link>
            <nav className="header__nav">
     
                <NavLink to='/Content' className="header__link">Главная</NavLink>
                <NavLink to='/About' className="header__link">Конвертер</NavLink>
                <NavLink to='/Notes' className="header__link">Заметки</NavLink>
                <Link onClick={() => setOpenModal(true)} className="header__link">Зарегистрироваться</Link>
                <Link to='/' className="header__link">Выйти</Link>

            
            </nav>
            <div class="burger">
				<input type="checkbox" id="burger" hidden/>
				<label for="burger" class="burger__btn"> </label>
				<nav class="burger__nav">
					<Link to='/Content' class="burger__link">Главная</Link>
					<Link to='/About' class="burger__link">Конвертер</Link>
                    <Link onClick={() => setOpenModal(true)} className="header__links">Зарегистрироваться</Link>
				</nav>
			</div>
        </header>
        <Modal open={openModal}  onClose={() => setOpenModal(false)}/>
        
        </>
        
    )
}
export  default Header;