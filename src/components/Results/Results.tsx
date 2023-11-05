import styles from './Results.module.css';
import { StarWarsCharacter } from '../../types';
import CharacterCard from '../CharacterCard/CharacterCard';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface ResultsProps {
  searchResults: StarWarsCharacter[];
  isLoading: boolean;
}

function Results({ searchResults, isLoading }: ResultsProps) {
  const [detailsPanelOpen, setDetailsPanelOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = (url: string) => {
    const id = url.split('/').slice(-2, -1)[0];

    navigate(`people/${id}/?details=${id}`);
    setDetailsPanelOpen(true);
  };

  const closeDetailsPanel = (event: React.MouseEvent<HTMLDivElement>) => {
    const detailsParam = new URLSearchParams(location.search).get('details');

    if (detailsParam && event.target instanceof HTMLElement) {
      if (event.target.closest('.character-card')) {
        return;
      }

      navigate('/');
      setDetailsPanelOpen(false);
    }
  };

  return (
    <div className={styles.results_container}>
      <div className={styles.results_panel} onClick={closeDetailsPanel}>
        {isLoading ? (
          <h2 className={styles.loader}>Loading...</h2>
        ) : (
          searchResults.map((character, index) => (
            <CharacterCard
              key={index}
              character={character}
              onClick={onClick}
            />
          ))
        )}
      </div>

      <div
        className={styles.details_panel}
        style={{ display: detailsPanelOpen ? 'block' : 'none' }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Results;
