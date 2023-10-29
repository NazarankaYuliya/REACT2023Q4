import React from 'react';
import { StarWarsCharacter } from '../types';

const CharacterCard = ({ character }: { character: StarWarsCharacter }) => {
  return (
    <div className="character-card">
      <h2>{character.name}</h2>
      <p>
        <strong>Gender:</strong> {character.gender}
      </p>
      <p>
        <strong>Birth Year:</strong> {character.birth_year}
      </p>
      <p>
        <strong>Height:</strong> {character.height} cm
      </p>
      <p>
        <strong>Mass:</strong> {character.mass} kg
      </p>
      <p>
        <strong>Hair Color:</strong> {character.hair_color}
      </p>
      <p>
        <strong>Skin Color:</strong> {character.skin_color}
      </p>
      <p>
        <strong>Eye Color:</strong> {character.eye_color}
      </p>
    </div>
  );
};

export default CharacterCard;
