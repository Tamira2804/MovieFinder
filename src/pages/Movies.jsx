import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import MovieList from '../components/MovieList';
import { getMovieByQuery } from 'services/HttpMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';
  const [inputValue, setInputValue] = useState(movieName);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovieByQuery(query)
      .then(data => {
        if (data.length !== 0) {
          return setMovies(data.results);
        } else
          return Promise.reject(new Error(`Oops, something went wrong...2`));
      })
      .catch(error => console.error('Error fetching query movies:', error));
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
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
