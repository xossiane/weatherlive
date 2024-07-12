import React, { useEffect, useState } from "react";
import Variables from "../molecules/Variables";
import Input from "../molecules/Input";
import "./index.css";
import loadingGif from "../assets/images/loading.gif";

export default function WeatherApp() {
  const API_KEY = "479be88a723f6289ab496d4f48b1fb98";

  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const backgroundImages = {
    Clear: "linear-gradient(to right, #f3b07c, #fcd283)",
    Clouds: "linear-gradient(to right, #57d6d4, #71eeec)",
    Rain: "linear-gradient(to right, #5bc8fb, #80eaff)",
    Snow: "linear-gradient(to right, #aff2ff, #fff)",
    Haze: "linear-gradient(to right, #57d6d4, #71eeec)",
    Mist: "linear-gradient(to right, #57d6d4, #71eeec)",
  };

  const backgroundImage = data.weather
    ? backgroundImages[data.weather[0].main]
    : "linear-gradient(to right, #f3b07c, #fcd283)";

  const handleInputChange = (value) => {
    setInputValue(value);
    setCity(value);
  };

  const fetchData = async (searchCity) => {
    const query = searchCity ? `q=${searchCity}` : `lat=${lat}&lon=${long}`;
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${query}&units=metric&appid=${API_KEY}`
      );
      setLoading(false);
      const result = await response.json();
      if (result.cod !== 200) {
        setData({ notFound: true });
      } else {
        setData(result);
        console.log(result);
        setInputValue(""); // Clear the input after fetching data
      }
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
    setLoading(true);
    fetchData(city);
    setLoading(false);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      fetchData(city);
    }
  };

  return (
    <div className="App">
      <div className="container " style={{ backgroundImage }}>
        <section className="weather-app" style={{ backgroundImage }}>
          <Input
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onIconClick={handleIconClick}
            onEnterKey={handleEnterKey}
          />
          {loading ? (
            <img className="loader" src={loadingGif} alt="loading" />
          ) : data.main && data.weather ? (
            <Variables data={data} />
          ) : (
            <h1>
              {loading ? (
                <img className="loader" src={loadingGif} alt="loading" />
              ) : (
                  data.notFound ? (<span className="not-found">Data not found 🤹 <br /> Hit refresh and try again</span>) : (<span className="not-found">
                  You must accept the pop-up location from browser so we can
                  help you
                </span>) 
                
              )}
            
    
            </h1>
          )}
        </section>
      </div>
    </div>
  );
}
