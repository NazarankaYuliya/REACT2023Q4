import styles from './Search.module.css';
import { useCallback, useContext, useEffect, useState } from 'react';
import { StarWarsCharacter } from '../../types';
import { fetchData } from '../../apiService';
import { useLocation, useNavigate } from 'react-router-dom';
import { CurrentPageContext } from '../../pages/HomePage/HomePage';
import ErrorButton from '../ErrorButton/ErrorButton';

interface SearchProps {
  setSearchResults: (results: StarWarsCharacter[]) => void;
  setSearchResultCount: (count: number) => void;
  setSearchTerm: (searchTerm: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

function Search({
  setSearchResults,
  setSearchResultCount,
  setSearchTerm,
  isLoading,
  setIsLoading,
}: SearchProps) {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [searchItem, setSearchItem] = useState(
    localStorage.getItem('searchTerm') || ''
  );

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const handleSearch = useCallback(
    async (searchItem: string, page: number, itemsPerPage: number) => {
      setIsLoading(true);
      try {
        const data = await fetchData(searchItem, page, itemsPerPage);

        setSearchResults(data.results);
        setSearchResultCount(data.count);
        setSearchTerm(searchItem);
        setCurrentPage(1);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    },
    [
      setIsLoading,
      setSearchResults,
      setSearchResultCount,
      setSearchTerm,
      setCurrentPage,
    ]
  );

  useEffect(() => {
    if (isInitialLoad) {
      const itemsPerPage = new URLSearchParams(location.search).get(
        'itemsPerPage'
      );
      const initialItemsPerPage = itemsPerPage
        ? parseInt(itemsPerPage, 10)
        : 10;

      handleSearch(searchItem, currentPage, initialItemsPerPage);
      setIsInitialLoad(false);
    }
  }, [handleSearch, isInitialLoad, searchItem, location.search, currentPage]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedSearchItem = e.target.value.trim();
    setSearchItem(trimmedSearchItem);
  };

  const handleSearchButtonClick = () => {
    localStorage.setItem('searchTerm', searchItem);

    handleSearch(searchItem, 1, 10);
    navigate(`?search=${searchItem}&page=${1}&itemsPerPage=${10}`);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Enter character name"
        value={searchItem}
        onChange={handleSearchInput}
      />
      <button
        className={styles.search_button}
        onClick={handleSearchButtonClick}
        disabled={isLoading}
      >
        Search
      </button>
      <ErrorButton />
    </div>
  );
}

export default Search;
