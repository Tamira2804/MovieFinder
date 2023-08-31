import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../services/HttpMovies';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        if (data.id) {
          setMovieDetails(data);
        } else
          throw new Error(`Oops, something went wrong... Please try again`);
      })
      .catch(error => console.error('Error fetching movie details:', error));
  }, [movieId]);

  const { title, genres, overview, poster_path } = movieDetails;

  return (
    <>
      <div>
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200${poster_path}`
                : `https://via.placeholder.com/200x300`
            }
            alt="movie poster"
          />
        </div>
        <div>
          <h1>{title}</h1>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>
            {genres
              ? genres.map(genre => <span key={genre.id}>{genre.name}</span>)
              : ''}
          </p>
        </div>
      </div>
      <div>
        <h3>Aditional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;

// {
//   "adult": false,
//   "backdrop_path": "/oFv4qzBLAbi7AKnPaRfiApF4XbL.jpg",
//   "belongs_to_collection": {
//     "id": 84, "name": "Indiana Jones Collection", "poster_path": "/lpxDrACKJhbbGOlwVMNz5YCj6SI.jpg", "backdrop_path": "/6kh59mZizZsttZPR0HAdXk6Ve2n.jpg"
//   },
//   "budget": 294700000,
//     "genres": [{ "id": 12, "name": "Adventure" }, { "id": 28, "name": "Action" }, { "id": 14, "name": "Fantasy" }],
//     "homepage": "https://movies.disney.com/indiana-jones-and-the-dial-of-destiny",
//     "id": 335977,
//     "imdb_id": "tt1462764",
//     "original_language": "en",
//     "original_title": "Indiana Jones and the Dial of Destiny",
//     "overview": "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
//     "popularity": 663.625,
//     "poster_path": "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
//     "production_companies": [{ "id": 1, "logo_path": "/o86DbpburjxrqAzEDhXZcyE8pDb.png", "name": "Lucasfilm Ltd.", "origin_country": "US" }],
//     "production_countries": [{ "iso_3166_1": "US", "name": "United States of America" }],
//     "release_date": "2023-06-28",
//     "revenue": 371336037,
//     "runtime": 155,
//     "spoken_languages": [{ "english_name": "German", "iso_639_1": "de", "name": "Deutsch" }, { "english_name": "English", "iso_639_1": "en", "name": "English" }, { "english_name": "Spanish", "iso_639_1": "es", "name": "Español" }, { "english_name": "Italian", "iso_639_1": "it", "name": "Italiano" }, { "english_name": "Latin", "iso_639_1": "la", "name": "Latin" }],
//     "status": "Released",
//     "tagline": "A legend will face his destiny.",
//     "title": "Indiana Jones and the Dial of Destiny",
//     "video": false,
//     "vote_average": 6.638,
//     "vote_count": 1058
// }
