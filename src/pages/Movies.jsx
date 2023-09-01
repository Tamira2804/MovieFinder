import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import MovieList from '../components/MovieList';
import { getMovieByQuery } from 'services/HttpMovies';
import Loader from '../components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const movieName = searchParams.get('name') ?? '';
  const [inputValue, setInputValue] = useState(movieName);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    getMovieByQuery(query)
      .then(data => {
        if (data.length !== 0) {
          return setMovies(data.results);
        } else
          return Promise.reject(
            new Error(
              `Oops, something went wrong and your search couldn't be completed`
            )
          );
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [query]);

  const handleSearchSubmit = query => {
    if (query === '') {
      setSearchParams({});
    } else {
      setSearchParams({ query });
    }

    setInputValue(query);
  };

  return (
    <div>
      <SearchBox value={inputValue} onSubmit={handleSearchSubmit} />
      {error && <h2>{error.message}</h2>}
      {loading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
