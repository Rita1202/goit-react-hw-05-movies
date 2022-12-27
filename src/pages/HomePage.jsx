import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { fetchTrendMovies } from 'services/eventApi';
const MovieList = React.lazy(() =>
  import('../components/MovieList/MovieList.jsx')
);
const LoadMore = React.lazy(() => import('../components/LoadMore/LoadMore'));
const Modal = React.lazy(() => import('../components/Modal/Modal'));

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [page, setPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    fetchTrendMovies(page)
      .then(res => {
        setMovies(prev => [...prev, ...res]);
      })
      .catch(error => console.log(error));
  }, [page]);

  const openModal = movie => {
    setCurrentMovie(movie);
  };

  const closeModal = movie => {
    setCurrentMovie(null);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    movies && (
      <>
        <Suspense fallback={<div>Загрузка...</div>}>
          <MovieList
            openModal={openModal}
            state={{ from: location }}
            movies={movies}
          />
          <LoadMore handleLoadMore={handleLoadMore} />
          {currentMovie && (
            <Modal movie={currentMovie} closeModal={closeModal} />
          )}{' '}
        </Suspense>
        <Outlet />
      </>
    )
  );
};
