import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './components/CharacterList';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people')
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
