import { useCallback, useEffect, useState } from 'react';
import { StarWarsCharacter } from '../types';

interface SearchProps {
  setSearchResults: (results: StarWarsCharacter[]) => void;
}

function Search({ setSearchResults }: SearchProps) {
  const [searchItem, setSearchItem] = useState(
    localStorage.getItem('searchTerm') || ''
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const handleSearch = useCallback(
    async (searchItem: string) => {
      setIsLoading(true);
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${searchItem}`
      );
      const data = await response.json();

      setSearchResults(data.results);

      setIsLoading(false);
    },
    [setSearchResults]
  );

  useEffect(() => {
    if (isInitialLoad) {
      handleSearch(searchItem);
      setIsInitialLoad(false);
    }
  }, [handleSearch, isInitialLoad, searchItem]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedSearchItem = e.target.value.trim();
    setSearchItem(trimmedSearchItem);
  };

  const handleSearchButtonClick = () => {
    localStorage.setItem('searchTerm', searchItem);
    handleSearch(searchItem);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter character name"
        value={searchItem}
        onChange={handleSearchInput}
      />
      <button onClick={handleSearchButtonClick} disabled={isLoading}>
        Search
      </button>
    </div>
  );
}

export default Search;
