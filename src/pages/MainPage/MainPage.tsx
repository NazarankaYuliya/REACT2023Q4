import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';

function MainPage() {
  const formData = useSelector((state: RootState) => state.formData);

  const selectedCountry = useSelector(
    (state: RootState) => state.countriesList.selectedCountry
  );

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
      {formData.picture && <img src={formData.picture} alt="User Avatar" />}
      <p>{selectedCountry}</p>
    </div>
  );
}

export default MainPage;
