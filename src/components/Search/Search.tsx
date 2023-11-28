import { useCallback, useEffect, useState } from 'react';
import { fetchData } from '../../apiService';
import ErrorButton from '../ErrorButton/ErrorButton';
import { useRouter } from 'next/router';

import styles from './Search.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentPage,
  setIsLoading,
  setSearchResultCount,
  setSearchResults,
  setSearchValue,
} from '../../store/searchSlice';
import { RootState } from '../../store/store';

function Search() {
  const dispatch = useDispatch();
  const router = useRouter();

  const searchValue = useSelector(
    (state: RootState) => state.search.searchValue
  );
  const currentPage = useSelector(
    (state: RootState) => state.search.currentPage
  );
  const isLoading = useSelector((state: RootState) => state.search.isLoading);

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const handleSearch = useCallback(
    async (searchValue: string, page: number, itemsPerPage: number) => {
      dispatch(setIsLoading(true));
      try {
        const data = await fetchData(searchValue, page, itemsPerPage);

        dispatch(setSearchResults(data.results));
        dispatch(setSearchResultCount(data.count));
        dispatch(setSearchValue(searchValue));
      } catch (error) {
        console.error(error);
        router.push('/not-found');
      }

      dispatch(setIsLoading(false));
    },
    [dispatch, router]
  );

  useEffect(() => {
    if (isInitialLoad) {
      const searchParams = new URLSearchParams(router.asPath.split('?')[1]);

      const itemsPerPage = searchParams.get('itemsPerPage');

      const currentPageFromURL = parseInt(searchParams.get('page') || '1', 10);

      dispatch(setCurrentPage(currentPageFromURL));

      const initialItemsPerPage = itemsPerPage
        ? parseInt(itemsPerPage, 10)
        : 10;

      handleSearch(searchValue, currentPageFromURL, initialItemsPerPage);
      setIsInitialLoad(false);
    }
  }, [handleSearch, isInitialLoad, searchValue, router.asPath, dispatch]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedSearchValue = e.target.value.trim();
    dispatch(setSearchValue(trimmedSearchValue));
  };

  const handleSearchButtonClick = () => {
    localStorage.setItem('searchTerm', searchValue);
    dispatch(setSearchValue(searchValue));
    dispatch(setCurrentPage(1));
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
