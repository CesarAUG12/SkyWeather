import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/weatherinformation/WeatherInformations'
import WeatherInformations5days from './components/weatherinformation/WeatherInformations5days/WeatherInformations5days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5days, setWeather5days] = useState()
  const inputRef = useRef()

  async function searchCity(){
    console.log(inputRef.current.value)

    const city = inputRef.current.value
    const key = "b0ec2a6c757991548efc38c66b696b60"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5days = await axios.get(url5days)

    setWeather(apiInfo.data)
    setWeather5days(apiInfo5days.data)

    
  }

  return (
    <>
    <div className='container'>
      <h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tAaWmvkfVUpJCiYnter1K2IKtccMUvWRSRSTKqPfRgNS9agKl-uQKOZRSM8tZkWvXZU&usqp=CAU" alt="" />
      </h1>
      {/* <h1>Seja Bem-vindo ao <span>SkyWeather</span></h1> */}

      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather}/>}

      {weather5days && <WeatherInformations5days weather5days={weather5days}/>}
    </div>
    </>
  )
}

export default App
