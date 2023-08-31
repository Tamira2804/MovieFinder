import Home from 'pages/Home';
import Movies from 'pages/Movies';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import MovieDetails from 'pages/MovieDetails';
// import MovieCast from 'components/MovieCast/MovieCast';
// import MovieReviews from 'components/MovieReviews/MovieReviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
