import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <header>
        <h1>
          <NavLink exact to="/">Home Page</NavLink>
          <NavLink to="/directors">Directors</NavLink>
          <NavLink to="/actors">Actors</NavLink>
          <NavLink to="/moviecard">MovieCard</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </h1>
      </header>
      <main>
        {/* Home info here! */}
      </main>
    </>
  );
}

export default Home;