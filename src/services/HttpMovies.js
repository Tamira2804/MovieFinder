const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e8e18ab747b38797cae45f67fe29be94';

export const getTrendingMovies = () => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(
    res => {
      if (res.status !== 200) {
        return Promise.reject(new Error(`Oops, something went wrong...`));
      } else return res.json();
    }
  );
};

export const getMovieDetails = movieId => {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`).then(res => {
    if (res.status !== 200) {
      return Promise.reject(new Error(`Oops, something went wrong...`));
    } else return res.json();
  });
};

export const getMovieByQuery = query => {
  return fetch(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  ).then(res => {
    if (res.status !== 200) {
      return Promise.reject(new Error(`Oops, something went wrong...`));
    } else return res.json();
  });
};

export const getMovieCast = movieId => {
  return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`).then(
    res => {
      if (res.status !== 200) {
        return Promise.reject(new Error(`Oops, something went wrong...`));
      } else return res.json();
    }
  );
};

// https://api.themoviedb.org/3/movie/420818/credits?api_key=e8e18ab747b38797cae45f67fe29be94
