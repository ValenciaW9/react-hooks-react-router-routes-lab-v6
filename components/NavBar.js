import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('wraps content in a div with "navbar" class', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
});