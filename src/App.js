import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [location, setLocation] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (location == false) {
    return (
      <>
        Ahhh, você precisa habilitar a localização no browser pra gente te
        ajudar!
      </>
    );
  } else {
    <ul>
      <li>Temperatura atual: ºC </li>
      <li>Temperatura máxima: ºC </li>
      <li>Temperatura mínima: ºC </li>
      <li>Pressão: x hpa </li>
      <li>Umidade: x% </li>
    </ul>;
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark mb-4"
        aria-label="navbar"
        tabIndex={0}
      >
        <a href="#top" className="navbar-brand text-white">
          Weather Live!
        </a>
      </nav>

      <main className="container">
        <div className="jumbotron">
          <h1>
            Need to go out now? First, take a look on the weatherLive! to see if
            you've got the right outfit.
          </h1>
        </div>
      </main>
    </div>
  );
}

export default App;
