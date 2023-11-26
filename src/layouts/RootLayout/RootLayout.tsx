import React, { ReactNode } from 'react';

import styles from './RootLayout.module.css';
import Header from '../../components/Header/Header';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <ErrorBoundary>
    <div className={styles.root_layout}>
      <Header />
      <main>{children}</main>
    </div>
  </ErrorBoundary>
);

export default RootLayout;
