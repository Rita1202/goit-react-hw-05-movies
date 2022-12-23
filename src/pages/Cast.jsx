import { useFetchEventCast } from 'hooks/useFetchEventCasts';
import css from '../pages/Common.module.css';
import user from '../images/user-icon.svg';

export const Cast = () => {
  const movieId = useFetchEventCast();

  return (
    movieId && (
      <div className={css.castWrapper}>
        <h2 className={css.castTitle}>Main cast:</h2>
        <ul className={css.casts}>
          {movieId.cast
            .slice(0, 5)
            .map(({ character, name, id, profile_path }) => {
              return (
                <li key={id} className={css.catsItem}>
                  <img
                    style={{
                      background: 'grey',
                      height: 225,
                      marginBottom: 10,
                    }}
                    width={150}
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : user
                    }
                    alt={character}
                  />{' '}
                  <p>{character}</p>
                  <p>{name}</p>
                </li>
              );
            })}
        </ul>
      </div>
    )
  );
};
