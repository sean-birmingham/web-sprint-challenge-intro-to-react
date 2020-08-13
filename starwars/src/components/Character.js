import React from 'react';

const Character = (props) => {
  const { character } = props;
  return (
    <div>
      <h1>{character.name}</h1>
    </div>
  );
};

export default Character;
