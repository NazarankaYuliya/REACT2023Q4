import styles from './HomePage.module.css';
import Results from '../../components/Results/Results';
import Search from '../../components/Search/Search';
import { createContext, useState } from 'react';
import { StarWarsCharacter } from '../../types';
import Pagination from '../../components/Pagination/Pagination';

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
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.home_page_container}>
      <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
        <Search
          setSearchResults={setSearchResults}
          setSearchResultCount={setSearchResultCount}
          setSearchTerm={setSearchTerm}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <Pagination
          resultCount={searchResultCount}
          searchTerm={searchTerm}
          setSearchResults={setSearchResults}
          setIsLoading={setIsLoading}
        />
        <Results searchResults={searchResults} isLoading={isLoading} />
      </CurrentPageContext.Provider>
    </div>
  );
}

export default HomePage;
