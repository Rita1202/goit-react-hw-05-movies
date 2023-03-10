import React, { Suspense } from 'react';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from 'services/eventApi';
import errorPhoto from '../images/error.jpeg';
import css from '../pages/Common.module.css';
const Modal = React.lazy(() => import('../components/Modal/Modal'));
const MovieList = React.lazy(() =>
  import('../components/MovieList/MovieList.jsx')
);
const SearchForm = React.lazy(() => import('components/SearchForm/SearchForm'));
const LoadMore = React.lazy(() => import('../components/LoadMore/LoadMore'));

export const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentMovie, setCurrentMovie] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');

  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query) {
      fetchMoviesByQuery(query, page)
        .then(res => {
          if (typeof res === 'function') {
            throw new Error('bad');
          } else setMovies(prev => [...prev, ...res]);
        })
        .catch(error => setError(error));
    }
  }, [query, page]);

  const openModal = movie => {
    setCurrentMovie(movie);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.query.value;
    setSearchParams({ query: value });
    event.target.reset();
    setMovies([]);
    setError('');
  };

  const closeModal = movie => {
    setCurrentMovie(null);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Suspense fallback={<div>Загрузка...</div>}>
        <SearchForm handleSubmit={handleSubmit} />
        {error && <img className={css.error} src={errorPhoto} alt="error" />}
        {query && (
          <MovieList
            openModal={openModal}
            state={{ from: location }}
            movies={movies}
          />
        )}
        {movies.length !== 0 && <LoadMore handleLoadMore={handleLoadMore} />}
        {currentMovie && <Modal movie={currentMovie} closeModal={closeModal} />}
      </Suspense>
      <Outlet />
    </>
  );
};
