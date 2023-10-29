import { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';
import ErrorBoundary from './components/ErrorBoundary';
import { StarWarsCharacter } from './types';
import ErrorButton from './components/ErrorButton';

class App extends Component {
  state = {
    searchResults: [],
  };

  updateSearchResults = (results: StarWarsCharacter[]) => {
    this.setState({ searchResults: results });
  };

  render() {
    return (
      <div className="app">
        <ErrorBoundary>
          <Search updateResults={this.updateSearchResults} />
          <Results results={this.state.searchResults} />
          <ErrorButton />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
