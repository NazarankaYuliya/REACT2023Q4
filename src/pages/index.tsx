import styles from '../styles/HomePage.module.css';
import Results from '../components/Results/Results';
import Search from '../components/Search/Search';
import Pagination from '../components/Pagination/Pagination';
import RootLayout from '../layouts/RootLayout/RootLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setIsLoading, setSearchResults } from '../store/searchSlice';
import { fetchData } from '../apiService';
import { RootState } from '../store/store';

function HomePage() {
  const dispatch = useDispatch();

  const { searchValue } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    const fetchDataOnPageLoad = async () => {
      try {
        dispatch(setIsLoading(true));

        const searchItem = searchValue;
        const page = 1;
        const itemsPerPage = 10;
        const data = await fetchData(searchItem, page, itemsPerPage);

        dispatch(setSearchResults(data.results));
      } catch (error) {
        console.error('Error fetching data on page load:', error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchDataOnPageLoad();
  }, [dispatch]);

  return (
    <RootLayout>
      <div className={styles.home_page_container}>
        <Search />
        <Pagination />
        <Results />
      </div>
    </RootLayout>
  );
}

export default HomePage;
