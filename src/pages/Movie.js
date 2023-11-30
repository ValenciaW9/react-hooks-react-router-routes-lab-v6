import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const { id } = useParams();
  const [movie] = useState(null);

  useEffect(() => {
    // Fetch movie data based on id
    // Set the movie state
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        Genres:
        {movie.genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </div>
  );
};

export default Movie;