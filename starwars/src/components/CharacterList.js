import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
  const { characters } = props;
  return (
    <div>
      {characters.map((character) => (
        <Character key={character.name} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
