import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Ciudad from './components/Ciudad';
import Nav from './components/Nav';
//import SearchBar from './components/SearchBar.jsx';
//import data from './data.js';

function App() {

  const [cities, setCities] = useState([]);
  const apiKey= '4ae2636d8dfbdc3044bede63951a019b'
  /* console.log(apiKey) */

  const onSearch= (city)=> {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          
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
          setCities(oldCities => { // oldCities => [...oldCities, ciudad] 
            if (oldCities.some(city => city.name === ciudad.name)){  // Si ya existe la ciudad, solo cargo las ciudades anteriores
              return oldCities
            }else {   // Si no existe la ciudad, cargo las ciudades anteriores y agrego la nueva
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

  const onFilter= (cityId)=> {
    const ciudad= cities.find( city => city.id === parseInt(cityId)); // El parseInt es porque en la respuesta, el id llega como string
    //console.log(ciudad);
    return ciudad;
  }

  return (
    <>
      <div className="App">
        <Nav onSearch={onSearch} /> {/* Se renderiza en todas las rutas, por eso no va envuelto en <Route /> */}
        <Route exact path='/'>
          <Cards 
            cities={cities}
            onClose={onClose} 
          />
        </Route>

        <Route 
          render={ ({match})=> <Ciudad city={onFilter(match.params.id)}/> } //match={match}
          exact
          path='/ciudad/:id'
        />

        <Route
          exact
          path='/about'
          component={About} 
        />

      </div>
    </>
  )
  
}

export default App;


    /* <>

    <Nav onSearch={onSearch} />
      
      <Route 
        path='/about'
        component={About}
      />
      <Route
        exact
        path='/'
        render={ ()=> <Cards onClose={onClose} cities={cities}/> }
      />
      <Route
        exact path='/ciudad/:ciudadId'
        render={ ({match})=> <Ciudad city={city} />} />
      
      
      
    </> */

    /*
    return (
      
  );
  */