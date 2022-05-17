import styles from '../styles/Card.module.css';
import {Link} from 'react-router-dom'

export default function Card({max, min, name, img, onClose, id}) {
  // acá va tu código

  return (
    <>
      <div className={styles.card}>
        <button onClick={onClose} className={styles.btn}> <strong>X</strong> </button>
          <Link to={`/ciudad/${id}`}>
            <h2>{name}</h2>
          </Link>
        <div className={styles.info}>
          <div className={styles.temp}>
            <p>Min</p>
            <span>{min}</span>
          </div>
          <div className={styles.temp}>
            <p>Max</p>
            <span>{max}</span>
          </div>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imagen"/>
      </div>
    </>
  )
};