import React, { Component } from 'react';
//import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
//import './Nav.css';
import {Link} from 'react-router-dom';


function Nav({onSearch}) {

  return (

    <div style={{display: "flex", justifyContent: "space-evenly", backgroundColor: "black"}}>
      <div style={{display: "flex"}}>
        <h2>
          <Link to='/'>Weather App</Link>
        </h2>
      </div>
      <SearchBar onSearch={onSearch} />
        <h2>
          <Link to='/about'>About</Link>
        </h2>
    </div> 

    
  );
};

export default Nav;



