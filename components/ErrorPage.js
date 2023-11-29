import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function ErrorPage() {
  return (
    <div>
      <NavBar />
      <div>
        <h1>Oops! Looks like something went wrong.</h1>
        <NavLink exact to="/">Home Page</NavLink>
        <NavLink to="/directors">Directors</NavLink>
        <NavLink to="/actors">Actors</NavLink>
        <NavLink to="/moviecard">MovieCard</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
}