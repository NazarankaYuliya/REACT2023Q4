import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../apiService';
import { StarWarsCharacter } from '../types';
import { CurrentPageContext } from '../pages/HomePage';

interface PaginationProps {
  resultCount: number;
  searchTerm: string;
  setSearchResults: (results: StarWarsCharacter[]) => void;
}

function Pagination({
  resultCount,
  searchTerm,
  setSearchResults,
}: PaginationProps) {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);

  const navigate = useNavigate();

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(resultCount / itemsPerPage)
  );

  useEffect(() => {
    setTotalPages(Math.ceil(resultCount / itemsPerPage));
    navigate(
      `?search=${searchTerm}&page=${currentPage}&itemsPerPage=${itemsPerPage}`
    );
  }, [currentPage, itemsPerPage, resultCount, searchTerm, navigate]);

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
    fetchNewPage(currentPage, newItemsPerPage);
  };

  const fetchNewPage = (page: number, itemsPerPage: number) => {
    fetchData(searchTerm, page, itemsPerPage)
      .then((data) => {
        setSearchResults(data.results);
        console.log(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="pagination">
      <select onChange={handleItemsPerPageChange}>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <button
        onClick={handlePrevPage}
        className="prev"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <p>{currentPage}</p>
      <p>Total Pages: {totalPages}</p>
      <button
        onClick={handleNextPage}
        className="next"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
