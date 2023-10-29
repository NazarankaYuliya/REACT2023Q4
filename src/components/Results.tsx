import { Component } from 'react';
import { StarWarsCharacter } from '../types';
import CharacterCard from './CharacterCard';

interface ResultsProps {
  results: StarWarsCharacter[];
}

class Results extends Component<ResultsProps> {
  render() {
    const { results } = this.props;

    if (results.length === 0) {
      return <p>Not Found</p>;
    }

    return (
      <div className="results">
        {results.map((character, index) => (
          <div key={index} className="card">
            <CharacterCard key={index} character={character} />
          </div>
        ))}
      </div>
    );
  }
}

export default Results;
