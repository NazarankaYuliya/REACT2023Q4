import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.not_found}>
      <h2>Page not found</h2>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default NotFoundPage;
