import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import  Layout  from './Layout/Layout';
const  Home=lazy(()=>import('pages/Home/Home')) ;
const NOtFound=lazy(()=>import('pages/NotFound/NotFound'));
const  MovieDetails=lazy(()=>import('pages/MovieDetails/MovieDetails')) ;
const  Cast =lazy (()=>import('pages/Cast/Cast')) ;
const  Review =lazy(()=>import('pages/REVIEWS/REVIEWS'));
const  MOVIE =lazy(()=> import ('pages/Movies/Movie')) ;

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MOVIE />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="*" element={<NOtFound />} />
        </Route>
      </Routes>
    </>
  );
};
