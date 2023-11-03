import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
