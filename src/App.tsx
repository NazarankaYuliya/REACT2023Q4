import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RootLayout from './layouts/RootLayout/RootLayout';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomePage />}>
        <Route path="people/:id" element={<CharacterDetails />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
