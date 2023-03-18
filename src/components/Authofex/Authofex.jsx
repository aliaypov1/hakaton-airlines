import { NavLink, Link, Outlet } from "react-router-dom"
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Registration = async (userName,password,confirmPasseord,email) =>{
    console.log(userName, password, confirmPasseord, email);

    const resp = await fetch("https://hakatonforwin.azurewebsites.net/api/Auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userName,
            password,
            confirmPasseord,
            email
        })
        })
    // const resp = await axios.post(`https://hakatonforwin.azurewebsites.net/api/Auth/register`,{
    //     userName,
    //     password,
    //     confirmPasseord,
    //     email
    // })
    const data = await resp.json()
    console.log(data);
}
const Authofex = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [confirmPasseord, setConfirmPassword] = useState('')
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

    const userNameHandler = (e) => {
        setUserName(e.target.value)

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

    const cofirmHandler = (e) => {
        setConfirmPassword(e.target.value)
    }

    return (
        <>
        
            <div className="registr">
            <header className="registr__header">
        <h2 className="registr__title">Зарегистрируйся чтобы продолжить🙂!</h2>
        </header>
                <div className="registr__content">
                    <h2>Register</h2>
                    <div className="registr__inputs">
                        <label htmlFor="">
                            <input onChange={e => userNameHandler(e)}value={userName} onBlur={e => blurHandler(e)} name="userName" type="text" placeholder="userName" />
                        </label>
                        <label htmlFor="">
                            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name="email" placeholder="email" />
                        </label>
                        <label htmlFor="">
                            <input  onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type="password" name="password" placeholder="Password" />
                        </label>
                        <label htmlFor="">
                            <input onChange={e => cofirmHandler(e)}  onBlur={e => blurHandler(e)} type="password" name="confirmPasseord" placeholder="Password" />
                        </label>
                    </div>
                
                    <div  className="registr__button">
                    <NavLink to='/content' ><button  onClick={  ()=>Registration(userName,password,confirmPasseord,email)} className="registr-sub" >Submit</button></NavLink>
                    
                    

                    </div>
                    <NavLink to='/Registr' className="registr__titles">Login</NavLink>
                </div>
            </div>
        </>
    )
}
export default Authofex;
