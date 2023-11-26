import { useCallback, useEffect, useState } from 'react';
import { fetchData } from '../../apiService';
import ErrorButton from '../ErrorButton/ErrorButton';
import { useSearchContext } from '../../contexts/SearchContext';
import { useRouter } from 'next/router';

import styles from './Search.module.css';

function Search() {
  const {
    currentPage,
    setCurrentPage,
    searchValue,
    setSearchValue,
    setSearchResults,
    setSearchResultCount,
    isLoading,
    setIsLoading,
  } = useSearchContext();

  const router = useRouter();

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const handleSearch = useCallback(
    async (searchValue: string, page: number, itemsPerPage: number) => {
      setIsLoading(true);
      try {
        const data = await fetchData(searchValue, page, itemsPerPage);

        setSearchResults(data.results);
        setSearchResultCount(data.count);
        setSearchValue(searchValue);
      } catch (error) {
        console.error(error);
        router.push('/not-found'); // Используйте router.push для навигации
      }

      setIsLoading(false);
    },
    [
      setIsLoading,
      setSearchResults,
      setSearchResultCount,
      setSearchValue,
      router,
    ]
  );

  useEffect(() => {
    if (isInitialLoad) {
      const searchParams = new URLSearchParams(router.asPath.split('?')[1]);

      const itemsPerPage = searchParams.get('itemsPerPage');

      const currentPageFromURL = parseInt(searchParams.get('page') || '1', 10);

      setCurrentPage(currentPageFromURL);

      const initialItemsPerPage = itemsPerPage
        ? parseInt(itemsPerPage, 10)
        : 10;

      handleSearch(searchValue, currentPageFromURL, initialItemsPerPage);
      setIsInitialLoad(false);
    }
  }, [
    handleSearch,
    isInitialLoad,
    searchValue,
    router.asPath,
    currentPage,
    setCurrentPage,
  ]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedSearchValue = e.target.value.trim();
    setSearchValue(trimmedSearchValue);
  };

  const handleSearchButtonClick = () => {
    localStorage.setItem('searchTerm', searchValue);
    setCurrentPage(1);
    handleSearch(searchValue, currentPage, 10);

    router.push({
      pathname: '/',
      query: {
        search: searchValue,
        page: '1',
        itemsPerPage: '10',
      },
    });
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Enter character name"
        value={searchValue}
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
