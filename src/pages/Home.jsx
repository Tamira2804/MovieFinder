import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/HttpMovies';
import MovieList from '../components/MovieList';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies()
      .then(data => {
        if (data.results.length !== 0) {
          return setTrendingMovies(data.results);
        } else
          return Promise.reject(
            new Error(`Oops, something went wrong... Please, try again later.`)
          );
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {error && <h2>{error.message}</h2>}
      {loading && <Loader />}
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default Home;
