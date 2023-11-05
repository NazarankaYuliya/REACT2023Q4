import styles from './CharacterDetails.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCharacterData } from '../../apiService';
import { useEffect, useState } from 'react';
import { StarWarsCharacter } from '../../types';

export default function CharacterDetails() {
  const { id } = useParams();
  const characterId = id ? parseInt(id, 10) : 0;
  const [characterData, setCharacterData] = useState<StarWarsCharacter | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const closeDetails = () => {
    navigate('/');
  };

  useEffect(() => {
    if (characterId) {
      setIsLoading(true);
      fetchCharacterData(characterId)
        .then((data: StarWarsCharacter) => {
          setCharacterData(data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [characterId]);

  return (
    <div className={styles.character_details}>
      {isLoading ? (
        <h2>Loading details...</h2>
      ) : (
        <div className={styles.character_details_card}>
          <button className={styles.button_close} onClick={closeDetails}>
            &times;
          </button>
          <div className={styles.details_card_title}>
            <h2>{characterData ? characterData.name : 'Data not available'}</h2>
          </div>

          <div className={styles.details_card_description}>
            {characterData ? (
              <>
                <p>
                  <strong>Gender:</strong> {characterData.gender}
                </p>
                <p>
                  <strong>Birth Year:</strong> {characterData.birth_year}
                </p>
                <p>
                  <strong>Height:</strong> {characterData.height} cm
                </p>
                <p>
                  <strong>Mass:</strong> {characterData.mass} kg
                </p>
                <p>
                  <strong>Hair Color:</strong> {characterData.hair_color}
                </p>
                <p>
                  <strong>Skin Color:</strong> {characterData.skin_color}
                </p>
                <p>
                  <strong>Eye Color:</strong> {characterData.eye_color}
                </p>
              </>
            ) : (
              <p>Data not available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
