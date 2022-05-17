import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div style={{display: "flex", justifyContent: "space-evenly"}}>
      <div style={{display: "flex"}}>
        <img src={Logo} alt="Logo Henry"/>
        <h2>Weather App</h2>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
