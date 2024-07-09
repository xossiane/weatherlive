import React, { useEffect, useState } from "react";
import Variables from "./molecules/Variables";
import NavBar from "./organisms/NavBar";

export default function App() {
  const API_KEY = "479be88a723f6289ab496d4f48b1fb98";

  const [lat, setLat] = useState();

  const [long, setLong] = useState();

  const [data, setData] = useState([]);

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
      {data.main && data.sys && data.weather ? <><NavBar/><Variables data={data}/></> : <h1>You must accept it</h1>}
    </div>
  );
}