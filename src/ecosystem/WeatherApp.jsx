import React, { useEffect, useState } from "react";
import Variables from "../molecules/Variables";
import NavBar from "../organisms/NavBar";
import Input from "../molecules/Input";
import Button from "../atoms/Button";
import './index.css'

export default function WeatherApp() {
  const API_KEY = "479be88a723f6289ab496d4f48b1fb98";

  const [lat, setLat] = useState();

  const [long, setLong] = useState();

  const [data, setData] = useState([]);

  const [location, setLocation] = useState("");

  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleInputSubmit = () => {
    setSubmittedValue(inputValue);
    alert(`Submitted value: ${inputValue}`);
  };

  const getWeather = () => {
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&WeatherAppid=${API_KEY}`)
    .then(res => res.json)
    .then(json => console.log(json))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);

      setLong(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);

          console.log(result);
        });
    };

    if (lat && long) {
      fetchData();
    }
  }, [lat, long]);

  return (
    <div className="App">
      <div className="container jumbotron">
        {data.main && data.weather ? (
          <section className="weather-app">
            {/* <NavBar /> */}
           
            <h3>Ou insira aqui a cidade desejada:</h3>
            <Input inputValue={inputValue} onInputChange={handleInputChange}/>
            <Button onSubmit={handleInputSubmit}/>
            <Variables data={data} />

          </section>
        ) : (
          <h1>
            Você deve aceitar a localização para que possamos te ajudar :)
          </h1>
        )}
      </div>
    </div>
  );
}
