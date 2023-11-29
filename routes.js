import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = () => {
  return (
    <div>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/moviecard">MovieCard</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default routes;