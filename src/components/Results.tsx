import { Component } from 'react';
import { StarWarsCharacter } from '../types';
import CharacterCard from './CharacterCard';

interface ResultsProps {
  results: StarWarsCharacter[];
  isLoading: boolean;
}

class Results extends Component<ResultsProps> {
  render() {
    const { results, isLoading } = this.props;

    if (isLoading) {
      return <p className="loading">Loading...</p>;
    }

    if (results.length === 0) {
      return <p className="not-found">Not Found</p>;
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
