import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('renders App component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Assert that the NavBar component is rendered
  expect(screen.getByRole('navigation')).toBeInTheDocument();

  // Assert that the Home component is rendered by default
  expect(screen.getByRole('heading', { name: /home page/i })).toBeInTheDocument();
});

test('navigates to Directors page', () => {
  render(
    <BrowserRouter initialEntries={['/directors']}>
      <App />
    </BrowserRouter>
  );

  // Assert that the Directors component is rendered
  expect(screen.getByRole('heading', { name: /directors page/i })).toBeInTheDocument();
});

// Add more tests for other routes and components as needed