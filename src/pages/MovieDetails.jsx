import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import MovieDetailsContent from '../components/MovieDetailsContent';
import { getMovieDetails } from '../services/HttpMovies';
import BackLink from '../components/BackLink';
import Loader from '../components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setLoading(true);
    getMovieDetails(movieId)
      .then(data => {
        if (data.id) {
          setMovieDetails(data);
        } else
          throw new Error(
            'Oops, something went wrong while processing your request from movie details. Please try again later.'
          );
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [movieId]);

  const { title, genres, overview, poster_path } = movieDetails;

  console.log('Current Location:', location);
  console.log('UseRef Location:', backLinkHref);

  return (
    <>
      {error && <h2>{error.message}</h2>}
      {loading && <Loader />}
      <BackLink to={backLinkHref.current}>Go Back</BackLink>

      <MovieDetailsContent
        title={title}
        overview={overview}
        poster_path={poster_path}
        genres={genres}
        castLink={'cast'}
        reviewsLink={'reviews'}
      />
    </>
  );
};

export default MovieDetails;
