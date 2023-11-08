import styles from './Pagination.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../../apiService';
import { useSearchContext } from '../../contexts/SearchContext';

function Pagination() {
  const {
    currentPage,
    setCurrentPage,
    searchValue,
    setSearchResults,
    searchResultCount,
    isLoading,
    setIsLoading,
  } = useSearchContext();

  const navigate = useNavigate();

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(searchResultCount / itemsPerPage)
  );

  useEffect(() => {
    setTotalPages(Math.ceil(searchResultCount / itemsPerPage));
    navigate(
      `?search=${searchValue}&page=${currentPage}&itemsPerPage=${itemsPerPage}`
    );
  }, [
    currentPage,
    itemsPerPage,
    searchResultCount,
    searchValue,
    navigate,
    setCurrentPage,
  ]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchNewPage(nextPage, itemsPerPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      fetchNewPage(prevPage, itemsPerPage);
    }
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
    fetchNewPage(currentPage, newItemsPerPage);
  };

  const fetchNewPage = (page: number, itemsPerPage: number) => {
    setIsLoading(true);
    fetchData(searchValue, page, itemsPerPage)
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      className={styles.pagination}
      style={{ display: isLoading ? 'none' : 'flex' }}
    >
      <select onChange={handleItemsPerPageChange}>
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
