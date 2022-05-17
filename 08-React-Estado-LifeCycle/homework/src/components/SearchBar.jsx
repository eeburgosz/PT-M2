import React, { useState } from "react";

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState('');

  const handleInputChange= (e)=> {
    setCity(e.target.value);
  }

  return (
    <form style={{paddingTop: '10px'}} onSubmit={(e) => {
      e.preventDefault();
      onSearch(/* "Cairns" */ city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={handleInputChange}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
