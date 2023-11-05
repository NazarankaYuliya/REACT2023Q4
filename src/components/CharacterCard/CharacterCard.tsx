import styles from './CharacterCard.module.css';
import { StarWarsCharacter } from '../../types';

interface CharacterCardProps {
  character: StarWarsCharacter;
  onClick: (url: string) => void;
}

function CharacterCard({ character, onClick }: CharacterCardProps) {
  const handleCardClick = () => {
    onClick(character.url);
  };

  return (
    <div className={styles.character_card} onClick={handleCardClick}>
      <div className={styles.character_title}>
        <h2>{character.name}</h2>
      </div>

      <div className={styles.character_description}>
        Birth Year: {character.birth_year}
      </div>
    </div>
  );
}

export default CharacterCard;
