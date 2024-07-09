import React from 'react'

function Variables({data}) {
  return (
    <>
    <h2>{data.name}</h2>
    <ul>
    <li>Temperatura atual: {data.main.temp}ºC </li>
    <li>Temperatura máxima: {data.main.temp_max}ºC </li>
    <li>Temperatura mínima: {data.main.temp_min}ºC </li>
    <li>Descrição do tempo: {data.weather[0].description} </li>
    <li>Temperatura mínima: {data.main.temp_min}ºC </li>
    <li>Pressão: {data.main.pressure} hpa </li>
    <li>Umidade: {data.main.humidity}% </li>
    <li>Velocidade do Vento: {data.wind.speed}km/h </li>
  </ul>
  </>
  )
}

export default Variables
