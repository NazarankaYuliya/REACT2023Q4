import styles from './Pagination.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from '../../apiService';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  setCurrentPage,
  setIsLoading,
  setItemsPerPage,
  setSearchResults,
  setTotalPages,
} from '../../store/searchSlice';

function Pagination() {
  const dispatch = useDispatch();

  const router = useRouter();
  const {
    searchResultCount,
    searchValue,
    currentPage,
    totalPages,
    itemsPerPage,
    isLoading,
  } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    dispatch(setItemsPerPage(10));
    dispatch(setTotalPages(Math.ceil(searchResultCount / itemsPerPage)));
    setTotalPages(totalPages);

    router.push({
      pathname: '/',
      query: {
        search: searchValue,
        page: currentPage,
        itemsPerPage: itemsPerPage,
      },
    });
  }, [
    currentPage,
    itemsPerPage,
    searchResultCount,
    searchValue,
    router,
    dispatch,
    totalPages,
  ]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      dispatch(setCurrentPage(nextPage));
      fetchNewPage(nextPage, itemsPerPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      dispatch(setCurrentPage(prevPage));
      fetchNewPage(prevPage, itemsPerPage);
    }
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    dispatch(setItemsPerPage(newItemsPerPage));
    dispatch(setCurrentPage(1));
    fetchNewPage(currentPage, newItemsPerPage);
  };

  const fetchNewPage = (page: number, itemsPerPage: number) => {
    dispatch(setIsLoading(true));
    fetchData(searchValue, page, itemsPerPage)
      .then((data) => {
        dispatch(setSearchResults(data.results));
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  return (
    <div
      className={styles.pagination}
      style={{ display: isLoading ? 'none' : 'flex' }}
    >
      <select className="select" onChange={handleItemsPerPageChange}>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <button
        onClick={handlePrevPage}
        className={styles.button_prev}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <div className={styles.current_page}>{currentPage}</div>

      <button
        onClick={handleNextPage}
        className={styles.button_next}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
