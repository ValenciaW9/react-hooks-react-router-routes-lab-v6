import React, { useEffect, useState } from 'react';

const Directors = () => {
  const [directors] = useState([]);

  useEffect(() => {
    // Fetch directors data and set the directors state
  }, []);

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Directors;