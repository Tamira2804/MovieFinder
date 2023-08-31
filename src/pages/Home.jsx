import MovieList from '../components/MovieList';
import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/HttpMovies';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(data => {
        if (data.results.length !== 0) {
          return setTrendingMovies(data.results);
        } else
          return Promise.reject(new Error(`Oops, something went wrong...`));
      })
      .catch(error => console.error('Error fetching trending movies:', error));
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default Home;
