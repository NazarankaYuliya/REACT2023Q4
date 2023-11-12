import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RootLayout from './layouts/RootLayout/RootLayout';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { SearchContextProvider } from './contexts/SearchContentProvider';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomePage />}>
        <Route path="people/:id" element={<CharacterDetails />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return (
    <SearchContextProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </SearchContextProvider>
  );
}

export default App;
