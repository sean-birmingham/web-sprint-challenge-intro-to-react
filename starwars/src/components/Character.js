import React, { Fragment } from 'react';
import { CharacterCard } from './CharacterStyles';

const Character = (props) => {
  const { character } = props;
  return (
    <Fragment>
      <CharacterCard>
        <h2>{character.name}</h2>
        <p>{character.birth_year}</p>
      </CharacterCard>
    </Fragment>
  );
};

export default Character;
