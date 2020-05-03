import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import axios from "axios";
import CharacterContainer from './components/Character';
import { Button } from 'reactstrap';

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // set a state for the data
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchString, setSearchString] = useState();

  let searchStringState = "";

  function handleSubmit(event) {
    console.log(searchStringState)
    setSearchString(searchStringState);
    setCurrentPage(1);
    event.preventDefault();
  }

  function handleChange(event) {
    searchStringState = event.target.value;

  }

  // Grab rick and marty data
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      //.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
        window.scrollTo(0, 0);
      })
      .catch(err => {
        console.log(err);
      }
      );
  }, [currentPage, searchString])

  function getNextPage(){
    setCurrentPage(currentPage + 1);
  }

  function getPrevPage(){
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input className="searchImput" type="text" onChange={handleChange} placeholder="Search" />
        
        <Button className='searchButton' color="secondary" size="sm" type="submit">Search</Button>
      </form>

      <CharacterContainer className="characters" characters={characters} searchString={searchString} setCurrentPage={setCurrentPage} />

      <div className="paganation">
        <Button className='button' color="secondary" size="sm" onClick={getPrevPage}>Prev</Button>
        <Button className='button' color="secondary" size="sm" onClick={getNextPage}>Next</Button>

      </div>


    </div>

  );
}

export default App;
