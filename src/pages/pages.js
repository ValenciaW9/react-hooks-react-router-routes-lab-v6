import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Pages() {
  return (
    <h1>
      <NavLink exact to="/">Home Page</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/moviecard">MovieCard</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </h1>
  );
}