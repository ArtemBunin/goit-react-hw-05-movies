import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { NOtFound } from 'pages/NotFound/NotFound';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from 'pages/Cast/Cast';
import {Review} from'pages/REVIEWS/REVIEWS'
import { MOVIE } from 'pages/Movies/Movie';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home/>} />
        <Route path="/movies" element={<MOVIE/>} />
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>} />
          <Route path="review" element={<Review/>} />
        </Route>
         <Route path="*" element={<NOtFound/>} />
         </Route>
      </Routes>
    </>
  );
};
