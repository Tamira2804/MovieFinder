import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  // if (!movies || movies.length === 0) {
  //   return <p>No movies found.</p>;
  // }
  return (
    <ul className="movie-list">
      {movies.map(({ title, id }) => {
        return (
          <li key={id}>
            <Link className="movie-item" to={`/movies/${id}`}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
