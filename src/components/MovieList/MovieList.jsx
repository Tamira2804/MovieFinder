import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className="movie-list">
      {movies.map(({ title, id }) => {
        return (
          <li key={id}>
            <Link
              className="movie-item"
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
