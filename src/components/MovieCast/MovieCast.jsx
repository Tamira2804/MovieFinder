import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/HttpMovies';
import {
  ActorList,
  ActorCardWrapper,
  ActorImage,
  ActorName,
  ActorRole,
} from './MovieCast.styled';

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId)
      .then(data => {
        if (data.cast && Array.isArray(data.cast)) {
          setMovieCast(data.cast);
        } else
          throw new Error(`Oops, something went wrong... Please try again`);
      })
      .catch(error => console.error('Error fetching movie cast:', error));
  }, [movieId]);

  //   const { name, profile_path, character } = movieCast;

  return (
    <div>
      <ActorList>
        {movieCast.map(actor => (
          <ActorCardWrapper key={actor.id}>
            <ActorImage
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={`${actor.name} photo`}
            />
            <ActorName>{actor.name}</ActorName>
            <ActorRole>{actor.character}</ActorRole>
          </ActorCardWrapper>
        ))}
      </ActorList>
    </div>
  );
};

export default MovieCast;
