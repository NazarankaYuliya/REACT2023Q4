import { useParams } from 'react-router-dom';

function CharacterDetails() {
  const { id } = useParams();

  return <div>{id} </div>;
}

export default CharacterDetails;
