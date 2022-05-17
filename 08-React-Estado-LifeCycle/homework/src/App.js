import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import env from 'react-dotenv';

export default function App() {

  const [cities, setCities] = useState([]);
  const apiKey= '4ae2636d8dfbdc3044bede63951a019b'
  /* console.log(apiKey) */

  const onSearch= (city)=> {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          /* console.log(recurso); */
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => /* [...oldCities, ciudad] */ {
            if (oldCities.some(city => city.name === ciudad.name)){
              return oldCities
            }else {
              return [...oldCities, ciudad];
            }
          });
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  const onClose= (id)=> {
    setCities(oldCities => oldCities.filter(city => city.id !== id))
  }

  return (
    <div className="App">
      { /* Tu código acá: */ }
      <Nav onSearch={onSearch}/>
      <Cards 
        cities={cities}
        onClose={onClose}
      />
    </div>
  );
}
