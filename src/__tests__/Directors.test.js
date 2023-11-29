import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import React from 'react';
import { MemoryRouter as RouterProvider } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("renders the Directors <NavLink>", () => {
  render(
    React.createElement(RouterProvider, { history: createMemoryHistory() },
      React.createElement(NavBar)
    )
  );

  const directorsLink = screen.getByText(/Directors/);
  expect(directorsLink).toBeInTheDocument();
  expect(directorsLink.tagName).toBe("A");
  expect(directorsLink.getAttribute("href")).toBe("/directors");

  fireEvent.click(directorsLink, { button: 0 });

  expect(directorsLink).toHaveClass("active");
});