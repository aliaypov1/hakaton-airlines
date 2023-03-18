import { useState } from "react"
import Header from "../components/Header/Header"



const Wheater = () =>{
    // const bttn = document.querySelector
    
    const [wts, setWts] = useState([])
    const [inpValue, setInpValue] = useState("")
    // const inp = document.querySelector('.inp')
    const API_KEY = 'c644a844dce44111b5b134331231703'
    const gettingWeather = async(e)=>{
        const city = inpValue
        try{
        const api_url = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
        const data = await api_url.json();
        console.log(data)
        setWts(wts => [...wts, data])
        console.log(wts);
        } catch(error){
            console.log(error);
        }
    }
    
    return(
        <>
        <Header/>
        <div className="wheater">
        <input type="value" className="inp"  onChange={(e)=>{setInpValue(e.target.value)}} />
        <button onClick={e=> gettingWeather()} className='btns'>click</button>
        <button class='btns' onClick={()=> window.location.reload()}>clear</button>
        </div>
        {wts.map(item => (
            
            <div className="conts"><div className="block"><img src={item.current.condition.icon}/>{item.location.country + ' - страна'}<br/><br/>{item.location.name+' - город'}<br/>{item.location.localtime +' дата-время'}<br/>{item.current.temp_c +' - градусов'}<br/></div></div>
        ))}

        </>
    )
}

export default Wheater;