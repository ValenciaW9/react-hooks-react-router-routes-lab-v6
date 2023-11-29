import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

test('wraps content in a div with "navbar" class', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const navbarDiv = screen.getByTestId("navbar");
  expect(navbarDiv).toBeInTheDocument();
});

test("renders a Home <NavLink>", async () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const homeLink = screen.getByText(/Home/);
  expect(homeLink).toBeInTheDocument();
  expect(homeLink.tagName).toBe("A");
  expect(homeLink.getAttribute("href")).toBe("/");

  fireEvent.click(homeLink);

  expect(homeLink).toHaveClass("active");
});

test("renders an Actors <NavLink>", async () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const actorsLink = screen.getByText(/Actors/);
  expect(actorsLink).toBeInTheDocument();
  expect(actorsLink.tagName).toBe("A");
  expect(actorsLink.getAttribute("href")).toBe("/actors");

  fireEvent.click(actorsLink);

  expect(actorsLink).toHaveClass("active");
});

test("renders a Directors <NavLink>", async () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const directorsLink = screen.getByText(/Directors/);
  expect(directorsLink).toBeInTheDocument();
  expect(directorsLink.tagName).toBe("A");
  expect(directorsLink.getAttribute("href")).toBe("/directors");

  fireEvent.click(directorsLink);

  expect(directorsLink).toHaveClass("active");
});