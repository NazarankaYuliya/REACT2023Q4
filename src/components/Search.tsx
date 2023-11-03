import { useState, useEffect } from 'react';
import { StarWarsCharacter } from '../types';

interface SearchProps {
  updateResults: (results: StarWarsCharacter[]) => void;
  setLoading: (isLoading: boolean) => void;
}

function Search(props: SearchProps) {
  const [searchItem, setSearchItem] = useState<string>(
    localStorage.getItem('searchTerm') || ''
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    setIsLoading(true);

    const trimmedSearchItem = searchItem.trim();

    const response = await fetch(
      `https://swapi.dev/api/people/?search=${searchItem}`
    );
    const data = await response.json();
    props.updateResults(data.results);
    localStorage.setItem('searchTerm', trimmedSearchItem);

    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter character name"
        value={searchItem}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} disabled={isLoading}>
        Search
      </button>
    </div>
  );
}

export default Search;
