import { Link, useLocation } from 'react-router-dom';
import css from '../../pages/Common.module.css';

export const MovieDetails = ({ movieId }) => {
  const location = useLocation();
  return (
    <div className={css.wrapperDetails}>
      <img
        width={300}
        className={css.posterPath}
        src={`https://image.tmdb.org/t/p/w500${movieId.poster_path}`}
        alt={movieId.title}
      />
      <ul className={css.movieInfo}>
        <li>
          {' '}
          <p className={css.text}>
            Name: <span className={css.name}>{movieId.title}</span>
          </p>
        </li>
        <li>
          {' '}
          <p className={css.text}>Year: {movieId.release_date.split('-', 1)}</p>
        </li>
        <li>
          {' '}
          <p className={css.text}>Run time: {movieId.runtime} min.</p>
        </li>
        <li>
          {' '}
          <p className={css.text}>
            Genres: {movieId.genres.map(el => el.name).join(', ')} min.
          </p>
        </li>
        <li>
          {' '}
          <p className={css.text}>Budget: {movieId.budget}$</p>
        </li>
        <li>
          {' '}
          <p className={css.text}>
            Original language: {movieId.original_language.toUpperCase()}
          </p>
        </li>
        <li className={css.addInfo}>
          {' '}
          <p className={css.text}> Additional info:</p>
          <Link
            state={{ from: location?.state?.from ?? '/' }}
            className={css.info}
            to="cast"
          >
            Cast
          </Link>
          <Link
            state={{ from: location?.state?.from ?? '/' }}
            className={css.info}
            to="reviews"
          >
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};
