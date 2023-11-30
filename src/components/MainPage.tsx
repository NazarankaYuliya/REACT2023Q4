import { Link, Outlet } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <h1>Main page</h1>
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
      <Outlet />
    </div>
  );
}

export default MainPage;
