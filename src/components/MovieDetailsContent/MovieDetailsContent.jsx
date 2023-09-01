import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  DetailsContainer,
  PosterContainer,
  MovieInfoContainer,
  AdditionalInfoContainer,
} from './MovieDetailsContent.styled';

const MovieDetailsContent = ({
  title,
  overview,
  poster_path,
  genres,
  castLink,
  reviewsLink,
}) => {
  return (
    <>
      <DetailsContainer>
        <PosterContainer>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200${poster_path}`
                : `https://via.placeholder.com/200x300`
            }
            alt="movie poster"
          />
        </PosterContainer>
        <MovieInfoContainer>
          <h1>{title}</h1>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>
            {genres
              ? genres.map(genre => <span key={genre.id}>{genre.name}</span>)
              : ''}
          </p>
        </MovieInfoContainer>
      </DetailsContainer>
      <AdditionalInfoContainer>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={castLink}>Cast</Link>
          </li>
          <li>
            <Link to={reviewsLink}>Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </AdditionalInfoContainer>
    </>
  );
};

export default MovieDetailsContent;
