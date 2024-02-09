import styles from './RootLayout.module.css';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

function RootLayout() {
  return (
    <ErrorBoundary>
      <div className={styles.root_layout}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default RootLayout;
