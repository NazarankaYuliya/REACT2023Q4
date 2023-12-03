import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import UncontrolledForm from './pages/UncontrolledForm/UncontrolledForm';
import ControlledForm from './pages/ControlledForm/ControlledForm';
import store from './store/store';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainPage />} />
      <Route path="/uncontrolled-form" element={<UncontrolledForm />} />
      <Route path="/controlled-form" element={<ControlledForm />} />
    </Route>
  )
);

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <Header />
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
