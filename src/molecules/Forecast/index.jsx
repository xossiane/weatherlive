import React, { useState, useEffect } from 'react';
import "./index.css";
import loadingGif from "../../assets/images/loading.gif";

function Forecast({ lat, lon, API_KEY }) {
  const [forecastData, setForecastData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      // Extract data for the next 4 days
      const dailyData = data.list.filter((reading) => reading.dt_txt.includes("12:00:00")).slice(0, 4);
      setForecastData(dailyData);
    };
    if (lat && lon && API_KEY) {
      fetchData();
    }
  }, [lat, lon, API_KEY]);

  const toggleTemperature = () => {
    setIsCelsius(!isCelsius);
  };

  if (!forecastData) {
    return <div className="loader-container">
    <img className="loader" src={loadingGif} alt="loading" />
  </div>;
  }

  return (
    <>
      <div className="forecast">
        {forecastData.map((day, index) => {
          const temperature = isCelsius
            ? `${Math.round(day.main.temp)} ºC`
            : `${Math.round(day.main.temp * 9 / 5 + 32)} ºF`;
            const date = new Date(day.dt_txt);
  const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
          return (
            <div key={index} className="forecast-container" role="region" aria-labelledby={`forecast-heading-${index}`}>
              <div className="forecast-date" aria-label={`Date: ${formattedDate}`}>{formattedDate}</div>
              <div className="forecast-type" aria-label={`Weather type: ${day.weather[0].description}`}>{day.weather[0].description}</div>
              <div className="forecast-temp" aria-live="polite">
                {temperature}
                
              </div>
              <div className="forecast-data">
                <div className="humidity" aria-label={`Humidity: ${day.main.humidity}%`}>
                  <div className="data-name">Humidity</div>
                  <i className="fa-solid fa-droplet" aria-hidden="true"></i>
                  <div className="data">{day.main.humidity}%</div>
                </div>
                <div className="wind" aria-label={`Wind speed: ${day.wind.speed} km/h`}>
                  <div className="data-name">Wind</div>
                  <i className="fa-solid fa-wind" aria-hidden="true"></i>
                  <div className="data">{day.wind.speed} km/h</div>
                </div>
              </div>
              
            </div>
            
          );
        })}
        
      </div>
      <button onClick={toggleTemperature} className="toggle-button-temperature" aria-pressed={!isCelsius}
                  aria-label={`Convert to ${isCelsius ? 'Fahrenheit' : 'Celsius'}`}>
                  {isCelsius ? "Convert to ºF" : "Convert to ºC"}
                </button>
    </>
  );
}

export default Forecast;
