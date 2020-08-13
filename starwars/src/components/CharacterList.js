import React from 'react';
import Character from './Character';
import { CharacterContainer } from './CharacterStyles';

const CharacterList = (props) => {
  const { characters } = props;
  return (
    <CharacterContainer>
      {characters.map((character) => (
        <Character key={character.name} character={character} />
      ))}
    </CharacterContainer>
  );
};

export default CharacterList;
