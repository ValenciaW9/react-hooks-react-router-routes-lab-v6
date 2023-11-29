import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { createMemoryHistory } from "history";
import React from 'react';
import App from "../App";
import NavBar from "../components/NavBar";

const history = createMemoryHistory();

test("renders 'Home Page' inside of an <h1 />", () => {
  render(
    <RouterProvider router={history}>
      <App />
    </RouterProvider>
  );
  const h1 = screen.queryByText(/Home Page/);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("Displays a list of movie titles", async () => {
  render(
    <RouterProvider router={history}>
      <App />
    </RouterProvider>
  );
  const titleList = await screen.findAllByRole("heading", { level: 2 });
  expect(titleList.length).toBeGreaterThan(2);
  expect(titleList[0].tagName).toBe("H2");
  expect(titleList[0].textContent).toBe("Doctor Strange");
});

test("Displays links for each associated movie", async () => {
  render(
    <RouterProvider router={history}>
      <App />
    </RouterProvider>
  );
  const linkList = await screen.findAllByText(/View Info/);
  expect(linkList.length).toBeGreaterThan(2);
  expect(linkList[0].href).toBe("http://localhost/movie/1");
});

test("renders the <NavBar /> component", () => {
  render(
    <RouterProvider router={history}>
      <NavBar />
    </RouterProvider>
  );
});