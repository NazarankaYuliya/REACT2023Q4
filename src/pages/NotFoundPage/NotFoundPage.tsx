import Link from 'next/link';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={styles.not_found}>
      <h2>Page not found</h2>
      <Link href="/">Go to Home Page</Link>
    </div>
  );
}
