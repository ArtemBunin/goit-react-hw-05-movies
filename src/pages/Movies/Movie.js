import { getMovie } from 'appi/appi';
import { useState, useEffect } from 'react';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import { SearchMovies } from 'components/SEARCHMOVIE/SearchMovie';
 const MOVIE = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('movies');
  const location = useLocation();
  useEffect(() => {
    const fetchMovie = async () => {
      if (!query) return;

      try {
        const result = await getMovie(query);
        setMovies(result.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [query]);
  return (
    <main>
      <SearchMovies setSearch={setSearchParams} />
      {movies.length > 0 &&
        movies.map(({ id, original_title }) => {
          return (
            <ul key={id}>
              <li>
                <NavLink to={`${id}`} state={{ from: location }}>
                  {original_title}
                </NavLink>
              </li>
            </ul>
          );
        })}
    </main>
  );
};
export default MOVIE