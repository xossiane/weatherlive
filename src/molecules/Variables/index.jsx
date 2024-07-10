import React from 'react'
import './index.css'
import sunny from "../../assets/images/sunny.png"
import cloudy from "../../assets/images/cloudy.png"
import rainy from "../../assets/images/rainy.png"
import snowy from "../../assets/images/snowy.png"

function Variables({data}) {
    
  return (
    <>
    <div className="weather">
                <img src={sunny} alt="sunny" />
                <h2 className="weather-city">{data.name}</h2>
                <div className="weather-type">{data.weather[0].description}</div>
                <div className="weather-temp">{Math.round(data.main.temp)} ºC</div>
                <div className="weather-data">
                    <div className="humidity">
                        <div className="data-name">Humidity</div>
                        <i  className="fa-solid fa-droplet"></i>
                        <div className="data">{data.main.humidity}%</div>
                    </div>
                    <div className="wind">
                        <div className="data-name">Wind</div>
                        <i  className="fa-solid fa-wind"></i>
                        <div className="data">{data.wind.speed}km/h</div>
                    </div>
                </div>
            </div>
    
    {/* <ul>
    <li>Temperatura atual: {data.main.temp}ºC </li>
    <li>Temperatura máxima: {data.main.temp_max}ºC </li>
    <li>Temperatura mínima: {data.main.temp_min}ºC </li>
    <li>Descrição do tempo: {data.weather[0].description} </li>
    <li>Temperatura mínima: {data.main.temp_min}ºC </li>
    <li>Pressão: {data.main.pressure} hpa </li>
    <li>Umidade: {data.main.humidity}% </li>
    <li>Velocidade do Vento: {data.wind.speed}km/h </li>
  </ul> */}
  </>
  )
}

export default Variables
