import React, { useEffect, useState } from "react";
import Variables from "../molecules/Variables";
import Input from "../molecules/Input";
import "./index.css";

export default function WeatherApp() {
  const API_KEY = "479be88a723f6289ab496d4f48b1fb98";

  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
    setCity(value);
  };

  const fetchData = async (searchCity) => {
    const query = searchCity ? `q=${searchCity}` : `lat=${lat}&lon=${long}`;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${query}&units=metric&appid=${API_KEY}`
      );
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching the weather data:", error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (lat && long) {
      fetchData();
    }
  }, [lat, long]);

  const handleIconClick = () => {
    fetchData(city);
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      fetchData(city);
    }
  };

  return (
    <div className="App">
      <div className="container jumbotron">
        <section className="weather-app">
          <Input
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onIconClick={handleIconClick}
            onEnterKey={handleEnterKey}
          />
          {data.main && data.weather ? (
            <Variables data={data} />
          ) : (
            <h1>
              Você deve aceitar a localização para que possamos te ajudar :)
            </h1>
          )}
        </section>
      </div>
    </div>
  );
}