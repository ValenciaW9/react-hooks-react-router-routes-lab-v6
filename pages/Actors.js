
import React from "react";

function Actors() {
  const actors = [
    // array of actors with their names and movies
  ];

  return (
    <div>
      <h1>Actors Page</h1>
      <main>
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Actors;