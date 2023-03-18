import { NavLink, Link, Outlet } from "react-router-dom"
import React, { useEffect, useState } from "react";
const Registr = () => {
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    const Login = async (userName, password) => {
        
        const req = {
            userName: userName,
            password: password,
            rememberMe: true
        }
        console.log(userName, password);
        const resp = await fetch("https://hakatonforwin.azurewebsites.net/api/Auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(req)
        }
        )
        const data = await resp.json()
        console.log(data);
        

        // end login
    }

   

    
    
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const userNameHandler = (e) => {
        setUserName(e.target.value)
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
                            <input  onChange={e => userNameHandler(e)}value={userName}  name="userName" type="text" placeholder="username" />
                        </label>
                        <label htmlFor="">
                            <input onChange={e => passwordHandler(e)} value={password}  type="password" name="password" placeholder="password" />
                        </label>
                    </div>
                
                    <div  className="registr__button">
                    <NavLink to='/content' ><button  className="registr-sub" onClick={()=>{Login(userName,password)}}>Submit</button></NavLink>
                    </div>
                    <NavLink to='/Authofex' className="registr__titles">Register</NavLink>
                </div>
            </div>
        </>
    )
}
export default Registr;
