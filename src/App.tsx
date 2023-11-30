import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route path="/uncontrolled-form" element={<UncontrolledForm />} />
      <Route path="/controlled-form" element={<ControlledForm />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
