import React from 'react';

function Movie() {
  return (
    <>
      <header>
        <h1>Movie Title</h1>
        <span exact to="/">Home Page</span>
        <span to="/directors">genre</span>
        <span to="/actors">genre</span>
        <span to="/movie">genre</span>
        <span to="/contact">Contact</span>
      </header>
      <main>
        {/* Movie info here! */}
      </main>
    </>
  );
}

export default Movie;