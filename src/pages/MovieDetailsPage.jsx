import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useFetchEvent } from 'hooks/useFetchEvent';
import css from '../pages/Common.module.css';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export const MovieDetailsPage = () => {
  const movieId = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    movieId && (
      <>
        <div>
          <button
            className={css.goBack}
            onClick={() => {
              navigate(location?.state?.from || '/');
            }}
            type="button"
          >
            Go Back
          </button>
          <MovieDetails movieId={movieId} />
        </div>
        <Outlet />
      </>
    )
  );
};
