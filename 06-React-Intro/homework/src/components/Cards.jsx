import React from 'react';
import Card from './Card';
import styles from '../styles/Cards.module.css';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map

  //console.log({cities});

  if (!cities){
    return 'No hay ciudades para mostrar'
  }
  return (
    <div className={styles.container} style={{"paddingTop": "40px"}}>
      {
        cities && cities.map(city => (
          <Card 
            key={city.id}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
            id={city.id}
          />
        ))
      }
    </div>
  )
};