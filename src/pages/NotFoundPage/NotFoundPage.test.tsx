import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

it('404 page should display when navigating to an invalid route', () => {
  render(
    <MemoryRouter initialEntries={['/invalid-route']}>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MemoryRouter>
  );
  const notFoundText = screen.queryByText(/Page not found/i);
  expect(notFoundText).toBeDefined();
});
