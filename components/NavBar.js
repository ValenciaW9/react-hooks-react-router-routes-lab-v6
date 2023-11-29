import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
  );
};

export default NavBar;