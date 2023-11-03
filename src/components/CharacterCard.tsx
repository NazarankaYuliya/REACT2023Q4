import { StarWarsCharacter } from '../types';

interface CharacterCardProps {
  character: StarWarsCharacter;
}

function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="character-card">
      <div className="card-title">
        <h2>{character.name}</h2>
      </div>

      <div className="card-description">
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
    </div>
  );
}

export default CharacterCard;
