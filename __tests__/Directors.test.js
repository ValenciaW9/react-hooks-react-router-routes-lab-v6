import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import React from 'react'; // Added import statement
import { MemoryRouter as RouterProvider } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "../components/NavBar";

test('wraps content in a div with "navbar" class', () => {
  render(
    <RouterProvider history={createMemoryHistory()}>
      <NavBar />
    </RouterProvider>
  );

  const navbarDiv = screen.getByTestId("navbar");
  expect(navbarDiv).toBeInTheDocument();
});

test("renders a Home <NavLink>", async () => {
  render(
    <RouterProvider history={createMemoryHistory()}>
      <NavBar />
    </RouterProvider>
  );

  const homeLink = screen.getByText(/Home/);
  expect(homeLink).toBeInTheDocument();
  expect(homeLink.tagName).toBe("A");
  expect(homeLink.getAttribute("href")).toBe("/");

  fireEvent.click(homeLink, { button: 0 });

  expect(homeLink).toHaveClass("active");
});

test("renders an Actors <NavLink>", async () => {
  render(
    <RouterProvider history={createMemoryHistory()}>
      <NavBar />
    </RouterProvider>
  );

  const actorsLink = screen.getByText(/Actors/);
  expect(actorsLink).toBeInTheDocument();
  expect(actorsLink.tagName).toBe("A");
  expect(actorsLink.getAttribute("href")).toBe("/actors");

  fireEvent.click(actorsLink, { button: 0 });

  expect(actorsLink).toHaveClass("active");
});

test("renders a Directors <NavLink>", async () => {
  render(
    <RouterProvider history={createMemoryHistory()}>
      <NavBar />
    </RouterProvider>
  );

  const directorsLink = screen.getByText(/Directors/);
  expect(directorsLink).toBeInTheDocument();
  expect(directorsLink.tagName).toBe("A");
  expect(directorsLink.getAttribute("href")).toBe("/directors");

  fireEvent.click(directorsLink, { button: 0 });

  expect(directorsLink).toHaveClass("active");
});