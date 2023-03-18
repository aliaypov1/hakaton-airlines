import React, { useEffect, useState } from "react";
import useTimeout from "../Usetimeout/Usetimeout";


const Modal = ({open,onClose}) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPaswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('заполните это поле')
    const [passwordError, setPasswordError] = useState('заполните это поле')
    const [formValid, setFormValid] = useState(false)

    useEffect(()=>{
        if(emailError|| passwordError){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    },[emailError,passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('емаил не коректен')
        } else {
            setEmailError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPaswordDirty(true)
                break

        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError('пароль должен быть не менее 8 ')

            if (!e.target.value) {
                setPasswordError('заполните это поле')
            }
        } else if (e.target.value.length > 16) {
            setPasswordError('пароль должен быть не более 16 ')
        } else {
            setPasswordError('')
        }
    }
    if (!open) return null
    return(
        <>
        <div className="modal">
            <div className="modal__content">
                <div className="modal__cards">
                <div className="modal__img"><img src="https://cdn.dribbble.com/users/284789/screenshots/1783651/90-news-icons-animation.gif" alt="" /></div>
                <div className="modal-close__body">
                <button className="modal-close" onClick={onClose}>Close</button>
                </div>
                </div>
                <div className="modal__cards"> <div className="modal__inputs">
                    <label htmlFor="">
                    {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                <input onChange={e => emailHandler(e)}value={email} onBlur={e => blurHandler(e)} name="email" type="email" placeholder="email" />
                </label>
                <label htmlFor="">
                {(passwordError && passwordDirty) && <div style={{ color: 'red' }}>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="password" />
                </label>
               

                
                </div>
                
                <div className="modal__button">
                    <button onClick={onClose} disabled={!formValid} className="modal-submit">Submit</button>
                </div></div>
               
                
            </div>
        </div>
        </>
    )
}
export default Modal;