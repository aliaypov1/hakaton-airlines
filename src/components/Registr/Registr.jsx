import { NavLink, Link, Outlet } from "react-router-dom"
import React, { useEffect, useState } from "react";
const Registr = () => {
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
    return (
        <>
        
         
            <div className="registr">
            <header className="registr__header">
        <h2 className="registr__title">Зарегистрируйся чтобы продолжить🙂!</h2>
        </header>
                <div className="registr__content">
                    <h2>Login</h2>
                    <div className="registr__inputs">
                        <label htmlFor="">
                        {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                            <input  onChange={e => emailHandler(e)}value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="login" />
                        </label>
                        <label htmlFor="">
                        {(passwordError && passwordDirty) && <div style={{ color: 'red' }}>{passwordError}</div>}
                            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type="password" name="password" placeholder="Password" />
                        </label>
                    </div>
                
                    <div  className="registr__button">
                    <NavLink to='/content' ><button  disabled={!formValid} className="registr-sub" >Submit</button></NavLink>
                    </div>
                    <NavLink to='/Authofex' className="registr__titles">Registr</NavLink>
                </div>
            </div>
        </>
    )
}
export default Registr;
