import { Outlet } from 'react-router-dom';
import Results from '../components/Results';
import Search from '../components/Search';
import { useState } from 'react';
import { StarWarsCharacter } from '../types';

function HomePage() {
  const [searchResults, setSearchResults] = useState<StarWarsCharacter[]>([]);

  return (
    <div>
      <Search setSearchResults={setSearchResults} />
      <Results searchResults={searchResults} />

      <Outlet />
    </div>
  );
}

export default HomePage;
