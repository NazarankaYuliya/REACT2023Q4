import styles from './Results.module.css';
import CharacterCard from '../CharacterCard/CharacterCard';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function Results() {
  const { searchResults, isLoading } = useSelector(
    (state: RootState) => state.search
  );

  const [detailsPanelOpen, setDetailsPanelOpen] = useState(false);
  const router = useRouter();

  const closeDetailsPanel = () => {
    const detailsParam = new URLSearchParams(router.asPath.split('?')[1]).get(
      'details'
    );
    if (detailsParam) {
      router.push('/');
      setDetailsPanelOpen(false);
    }
  };

  return (
    <div className={styles.results_container}>
      <div className={styles.results_panel} onClick={closeDetailsPanel}>
        {isLoading ? (
          <h2 className={styles.loader}>Loading...</h2>
        ) : searchResults.length === 0 ? (
          <p className={styles.no_results}>No results found for the query</p>
        ) : (
          searchResults.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))
        )}
      </div>

      <div
        className={styles.details_panel}
        style={{ display: detailsPanelOpen ? 'block' : 'none' }}
      ></div>
    </div>
  );
}

export default Results;
