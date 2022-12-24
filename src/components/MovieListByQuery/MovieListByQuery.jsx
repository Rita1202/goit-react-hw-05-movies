import { useLocation } from 'react-router-dom';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import css from '../../pages/Common.module.css';

export const MovieListByQuery = ({ movies, openModal }) => {
  const location = useLocation();

  return (
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
  );
};
