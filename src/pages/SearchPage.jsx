import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from 'services/eventApi';
import { MovieListByQuery } from 'components/MovieListByQuery/MovieListByQuery';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Modal } from 'components/Modal/Modal';
import { LoadMore } from 'components/LoadMore/LoadMore';

export const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentMovie, setCurrentMovie] = useState(null);
  const [page, setPage] = useState(1);

  const query = searchParams.get('query');
  const location = useLocation();
  console.log(location, 'from');
  // const firstRender = useRef(true);

  useEffect(() => {
    // if (firstRender.current) {
    //   firstRender.current = false;
    //   return;
    // }
    // if (query) {
    fetchMoviesByQuery(query, page).then(res => {
      setMovies(prev => [...prev, ...res]);
    });
    // }
  }, [query, page]);

  const openModal = movie => {
    setCurrentMovie(movie);
  };

  const handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    const value = event.target.elements.query.value;
    setSearchParams({ query: value });
    event.target.reset();
    setMovies([]);
  };

  const closeModal = movie => {
    setCurrentMovie(null);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      {query && (
        <MovieListByQuery
          openModal={openModal}
          state={{ from: location }}
          movies={movies}
          a={location}
        />
      )}
      <Outlet />
      {movies.length !== 0 && <LoadMore handleLoadMore={handleLoadMore} />}
      {currentMovie && <Modal movie={currentMovie} closeModal={closeModal} />}
    </>
  );
};
