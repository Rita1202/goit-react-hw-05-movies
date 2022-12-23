import css from './Rating.module.css';

export const Rating = ({ rating, vote }) => {
  return (
    <div className={css.rating}>
      <div className={css.rating__body}>
        <div
          className={css.rating__active}
          style={{
            width: rating,
          }}
        >
          {' '}
        </div>
        <div className={css.rating__items}>
          <input
            className={css.rating__item}
            type="radio"
            value="1"
            name="rating"
          />
          <input
            className={css.rating__item}
            type="radio"
            value="2"
            name="rating"
          />
          <input
            className={css.rating__item}
            type="radio"
            value="3"
            name="rating"
          />
          <input
            className={css.rating__item}
            type="radio"
            value="4"
            name="rating"
          />
          <input
            className={css.rating__item}
            type="radio"
            value="5"
            name="rating"
          />
        </div>
      </div>
      <div className={css.rating__value}>{vote.toFixed(1)}</div>
    </div>
  );
};
