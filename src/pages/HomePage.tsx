import { Outlet } from 'react-router-dom';
import Results from '../components/Results';
import Search from '../components/Search';
import { createContext, useState } from 'react';
import { StarWarsCharacter } from '../types';
import Pagination from '../components/Pagination';

export const CurrentPageContext = createContext<{
  currentPage: number;
  setCurrentPage: (page: number) => void;
}>({
  currentPage: 1,
  setCurrentPage: () => {},
});

function HomePage() {
  const [searchResults, setSearchResults] = useState<StarWarsCharacter[]>([]);
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
        <Search
          setSearchResults={setSearchResults}
          setSearchResultCount={setSearchResultCount}
          setSearchTerm={setSearchTerm}
        />
        <Pagination
          resultCount={searchResultCount}
          searchTerm={searchTerm}
          setSearchResults={setSearchResults}
        />
        <Results searchResults={searchResults} />

        <Outlet />
      </CurrentPageContext.Provider>
    </div>
  );
}

export default HomePage;
