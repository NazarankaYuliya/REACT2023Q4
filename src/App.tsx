import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import { StarWarsCharacter } from './types';
import ErrorButton from './components/ErrorButton';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateSearchResults = (results: StarWarsCharacter[]) => {
    setSearchResults(results);
    setIsLoading(false);
  };

  const handleLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  return (
    <div className="app">
      <ErrorBoundary>
        <Header />
        <Search
          updateResults={updateSearchResults}
          setLoading={handleLoading}
        />
        <Results results={searchResults} isLoading={isLoading} />

        <ErrorButton />
      </ErrorBoundary>
    </div>
  );
}

export default App;
