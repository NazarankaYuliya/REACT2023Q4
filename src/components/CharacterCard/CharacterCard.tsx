import styles from './CharacterCard.module.css';
import { StarWarsCharacter } from '../../types';
import Link from 'next/link';

interface CharacterCardProps {
  character: StarWarsCharacter;
}

function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link href={`/${character.url.split('/').reverse()[1]}`}>
      <div className={styles.character_card}>
        <div className={styles.character_title}>
          <h2>{character.name}</h2>
        </div>

        <div className={styles.character_description}>
          Birth Year: {character.birth_year}
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
