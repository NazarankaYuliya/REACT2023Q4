import styles from './MainPage.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useEffect, useState } from 'react';

function MainPage() {
  const formData = useSelector((state: RootState) => state.formData);

  const selectedCountry = useSelector(
    (state: RootState) => state.countriesList.selectedCountry
  );

  const isAcceptedTerms = formData.acceptTerms === true;

  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    if (
      Object.values(formData).some(
        (value) => value !== null && value !== undefined && value !== ''
      )
    ) {
      setShowBorder(true);

      const timeoutId = setTimeout(() => {
        setShowBorder(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [formData]);

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <ul className={styles.navlist}>
          <li className={styles.navlink}>
            <Link to="/uncontrolled-form">Uncontrolled Form</Link>
          </li>
          <li className={styles.navlink}>
            <Link to="/controlled-form">Controlled Form</Link>
          </li>
        </ul>
      </nav>
      {isAcceptedTerms && (
        <div
          className={`${styles.data} ${
            showBorder ? styles.border_visible : ''
          }`}
        >
          <div className={styles.data_item_img}>
            <img src={formData.picture} alt="picture" />
          </div>

          <div className={styles.data_item}>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Age:</strong> {formData.age}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Password:</strong> {formData.password}
            </p>
            <p>
              <strong>Confirm Password:</strong> {formData.confirmPassword}
            </p>
            <p>
              <strong>Gender:</strong> {formData.gender}
            </p>
            <p>
              <strong>Country:</strong> {selectedCountry}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
