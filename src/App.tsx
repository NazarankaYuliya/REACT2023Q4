import { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import { StarWarsCharacter } from './types';
import ErrorButton from './components/ErrorButton';

class App extends Component {
  state = {
    searchResults: [],
    isLoading: false,
  };

  updateSearchResults = (results: StarWarsCharacter[]) => {
    this.setState({ searchResults: results, isLoading: false });
  };

  handleLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  render() {
    return (
      <div className="app">
        <ErrorBoundary>
          <Header />
          <Search
            updateResults={this.updateSearchResults}
            setLoading={this.handleLoading}
          />
          <Results
            results={this.state.searchResults}
            isLoading={this.state.isLoading}
          />

          <ErrorButton />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
