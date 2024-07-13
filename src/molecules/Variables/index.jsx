import React, {useState} from "react";
import "./index.css";
import sunny from "../../assets/images/sunny.png";
import cloudy from "../../assets/images/cloudy.png";
import rainy from "../../assets/images/rainy.png";
import snowy from "../../assets/images/snowy.png";

function Variables({ data }) {
  const [isCelsius, setIsCelsius] = useState(true);

  const weatherImages = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy,
  };

  const weatherImage = data.weather
    ? weatherImages[data.weather[0].main]
    : null;


  const toggleTemperature = () => {
    setIsCelsius(!isCelsius);
  };

  const temperature = isCelsius
  ? `${Math.round(data.main.temp)} ºC`
  : `${Math.round(data.main.temp * 9/5 + 32)} ºF`;


  return (
    <>
      <div className="weather" role="region" aria-labelledby="weather-heading">
        <img src={weatherImage} alt="sunny" />
        <div className="weather-location">
          <h2 className="weather-city" aria-label={`City: ${data.name}`}>{data.name}</h2>{" "}
          <h2 className="weather-country" aria-label={`Country: ${data.sys.country}`}>{data.sys.country}</h2>
        </div>
        <div className="weather-type" aria-label={`Weather type: ${data.weather[0].description}`}>{data.weather[0].description}</div>
        <div className="weather-temp" aria-live="polite">
          {temperature}
          <button onClick={toggleTemperature} className="toggle-button"  aria-pressed={!isCelsius}
          aria-label={`Convert to ${isCelsius ? 'Fahrenheit' : 'Celsius'}`}>
            {isCelsius ? "Convert to ºF" : "Convert to ºC"}
          </button>
        </div>
        <div className="weather-data">
          <div className="humidity" aria-label={`Humidity: ${data.main.humidity}%`}>
            <div className="data-name">Humidity</div>
            <i className="fa-solid fa-droplet" aria-hidden="true"></i>
            <div className="data">{data.main.humidity}%</div>
          </div>
          <div className="wind" aria-label={`Wind speed: ${data.wind.speed} km/h`}>
            <div className="data-name">Wind</div>
            <i className="fa-solid fa-wind" aria-hidden="true"></i>
            <div className="data">{data.wind.speed}km/h</div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Variables;
