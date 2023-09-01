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
        {movieCast.map(({ id, profile_path, name, character }) => (
          <ActorCardWrapper key={id}>
            <ActorImage
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : `https://dummyimage.com/150x225&text=${name}`
              }
              alt={`${name} photo`}
            />
            <ActorName>{name}</ActorName>
            <ActorRole>{character}</ActorRole>
          </ActorCardWrapper>
        ))}
      </ActorList>
    </div>
  );
};

export default MovieCast;
