import css from './MovieListItem.module.css';
import { Rating } from 'components/Rating/Rating';
import { Link } from 'react-router-dom';

export const MovieListItem = ({ state, movie, rating, vote, openModal }) => {
  const { id, poster_path, title, genre, release } = movie;

  return (
    <li
      key={id}
      className={css.item}
      data-movie={JSON.stringify({ id, poster_path, title, genre, release })}
    >
      <Link state={state} to={`/movies/${id}`} className={css.link}>
        <img
          className={css.movieImage}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <p className={css.text}>{title.toUpperCase()}</p>
      </Link>
      <Link
        to={state.from}
        className={css.preview}
        onClick={() => openModal(movie)}
      >
        Preview
      </Link>
      <Rating rating={rating} vote={vote} />
    </li>
  );
};
