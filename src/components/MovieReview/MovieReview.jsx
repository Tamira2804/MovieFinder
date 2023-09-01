import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/HttpMovies';
import {
  ReviewsList,
  ReviewItem,
  ReviewAuthor,
  ReviewContent,
} from './MovieReview.styled';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => {
        if (data.results && Array.isArray(data.results)) {
          setMovieReviews(data.results);
        } else
          throw new Error(`Oops, something went wrong... Please try again`);
      })
      .catch(error => console.error('Error fetching movie reviews:', error));
  }, [movieId]);

  return (
    <>
      <ReviewsList>
        {movieReviews.map(({ id, author, content }) => (
          <ReviewItem key={id}>
            <ReviewAuthor> Author: {author}</ReviewAuthor>
            <ReviewContent>{content}</ReviewContent>
          </ReviewItem>
        ))}
      </ReviewsList>
    </>
  );
};

export default MovieReviews;
