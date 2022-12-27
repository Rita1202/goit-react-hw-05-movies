import { useFetchEventReviews } from 'hooks/useFetchEventReviews';
import css from '../pages/Common.module.css';

export const ReviewsPage = () => {
  const movieId = useFetchEventReviews();
  return (
    movieId && (
      <>
        <ul className={css.reviewList}>
          {movieId.results.map(({ author, content, id }) => {
            return (
              <li className={css.reviewItem} key={id}>
                <p className={css.author}>{author}</p>
                <p className={css.content}>{content}</p>
              </li>
            );
          })}
        </ul>
      </>
    )
  );
};
