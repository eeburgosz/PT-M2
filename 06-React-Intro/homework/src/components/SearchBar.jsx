
import React, { useState } from "react";
import styles from '../styles/SearchBar.module.css';
//import React, { useState } from 'react';
//import {AiOutlineSearch} from 'react-icons/ai';

//export default function SearchBar({onSearch}) {
  // acá va tu código

//  return (
    //<div className={styles.searchBar}>
      /* <FcSearch className={styles.icon} /> */
      //<input type="text" 
        //     placeholder='Buscar ciudad'
          //   className={styles.input}
      ///>
      //<button onClick={()=> onSearch('Buscando ciudad')} className={styles.btn}><AiOutlineSearch className={styles.icon} /></button>
    //</div>
 // )
//};

export default function SearchBar({onSearch}) {

  
  const [city, setCity] = useState('');

  const handleInputChange= (e)=> {
    setCity(e.target.value);
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        type="text"
        placeholder="Buscar ciudad."
        className={styles.input}
        onChange={handleInputChange}
      />
      <input type="submit" value="Agregar" className={styles.btn} />
    </form>
  );
}
