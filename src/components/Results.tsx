import { StarWarsCharacter } from '../types';
import CharacterCard from './CharacterCard';

interface ResultsProps {
  searchResults: StarWarsCharacter[];
}

function Results({ searchResults }: ResultsProps) {
  return (
    <div className="results">
      {searchResults.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </div>
  );
}

export default Results;
