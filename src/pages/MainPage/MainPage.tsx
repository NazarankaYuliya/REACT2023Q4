import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';

function MainPage() {
  const formData = useSelector((state: RootState) => state.formData);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/uncontrolled-form">Uncontrolled Form</Link>
          </li>
          <li>
            <Link to="/controlled-form">Controlled Form</Link>
          </li>
        </ul>
      </nav>
      <p>{formData.name}</p>
      <p>{formData.age}</p>
      <p>{formData.email}</p>
      <p>{formData.password}</p>
      <p>{formData.acceptTerms}</p>
    </div>
  );
}

export default MainPage;
