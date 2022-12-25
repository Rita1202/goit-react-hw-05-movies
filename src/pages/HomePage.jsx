import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { fetchTrendMovies } from 'services/eventApi';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import { Modal } from 'components/Modal/Modal';
import { LoadMore } from 'components/LoadMore/LoadMore';
import css from '../pages/Common.module.css';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [page, setPage] = useState(1);
  const location = useLocation();
  // const firstRender = useRef(true);

  useEffect(() => {
    // if (firstRender.current) {
    //   firstRender.current = false;
    //   return;
    // }

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
        <ul className={css.gallery}>
          {movies.map(movie => {
            const rating = movie.vote_average * 10 + '%';
            return (
              <MovieListItem
                key={movie.id}
                movie={movie}
                state={{ from: location }}
                rating={rating}
                vote={movie.vote_average}
                openModal={openModal}
              />
            );
          })}
        </ul>
        <LoadMore handleLoadMore={handleLoadMore} />
        {currentMovie && <Modal movie={currentMovie} closeModal={closeModal} />}
        <Outlet />
      </>
    )
  );
};
