import React from 'react';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    { id: 3, title: 'Movie 3' },
  ];

 return (
    <div>
      <h1> Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;