import "@testing-library/jest-dom";
import { RouterProvider } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import React from 'react';
import App from "../App";

const id = 1;
const history = createMemoryHistory();
history.push(`/movie/${id}`);

test("renders without any errors", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(
    <RouterProvider history={history}>
      <App />
    </RouterProvider>
  );

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders movie's title in an h1", async () => {
  render(
    <RouterProvider history={history}>
      <App />
    </RouterProvider>
  );
  const h1 = await screen.findByText(/Doctor Strange/);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders movie's time within a p tag", async () => {
  render(
    <RouterProvider history={history}>
      <App />
    </RouterProvider>
  );
  const p = await screen.findByText(/115/);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});

test("renders a span for each genre", async () => {
  render(
    <RouterProvider history={history}>
      <App />
    </RouterProvider>
  );
  const genres = ["Action", "Adventure", "Fantasy"];
  for (const genre of genres) {
    const span = await screen.findByText(genre);
    expect(span).toBeInTheDocument();
    expect(span.tagName).toBe("SPAN");
  }
});

test("renders the <NavBar /> component", () => {
  render(
    <RouterProvider history={history}>
      <App />
    </RouterProvider>
  );
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});