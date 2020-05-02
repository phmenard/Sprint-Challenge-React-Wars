import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import axios from "axios";
import CharacterContainer from './components/Character' ;

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // set a state for the data
  const [characters, setCharacters] = useState([]);


  // Grab rick and marty data
  useEffect(() => {  
    axios
        .get(`https://rickandmortyapi.com/api/character/?page=1`)
        .then(response => {
            console.log(response.data.results);
            setCharacters(response.data.results);
        })
        .catch(err => {
            console.log(err);
        }
        );
}, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterContainer characters={characters}/>
    </div>
  );
}

export default App;
