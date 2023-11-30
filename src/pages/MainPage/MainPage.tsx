import { Link } from 'react-router-dom';

function MainPage() {
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
    </div>
  );
}

export default MainPage;
