import { useLocation } from 'react-router-dom';
import css from '../../pages/Common.module.css';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';

const MovieList = ({ movies, openModal }) => {
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

export default MovieList;
