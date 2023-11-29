import { Link } from 'react-router-dom';
import React from 'react';

function MovieCard({ title }) {
  return (
    <article>
      <h2>{title}</h2>
      <Link exact to="/">Home</Link>
      <Link to="/directors">Directors</Link>
      <Link to="/actors">Actors</Link>
    </article>
  );
}

export default MovieCard;