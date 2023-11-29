import React from "react";
import { Link } from "react-router-dom";

const Directors = () => {

  const directors = [
    {
      name: "John Jacobs",
      movies: ["Movie 1", "Movie 2", "Movie 3"]
    },
    {
      name: "Jane Smith",
      movies: ["Movie 4", "Movie 5", "Movie 6"]
    }
  ];

  return (
    <>
      <h1>Directors Page</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/directors">Directors</Link></li>
          <li><Link to="/actors">Actors</Link></li>
          <li><Link to="/moviecard">MovieCard</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main>
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;