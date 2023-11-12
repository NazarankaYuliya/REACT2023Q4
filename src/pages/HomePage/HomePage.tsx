import styles from './HomePage.module.css';
import Results from '../../components/Results/Results';
import Search from '../../components/Search/Search';
import Pagination from '../../components/Pagination/Pagination';

function HomePage() {
  return (
    <div className={styles.home_page_container}>
      <Search />
      <Pagination />
      <Results />
    </div>
  );
}

export default HomePage;
