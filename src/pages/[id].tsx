import { useRouter } from 'next/router';
import CharacterDetails from '../components/CharacterDetails';

const CharacterDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== 'string') {
    return <p>Invalid character ID</p>;
  }

  return <CharacterDetails id={parseInt(id)} />;
};

export default CharacterDetailsPage;
