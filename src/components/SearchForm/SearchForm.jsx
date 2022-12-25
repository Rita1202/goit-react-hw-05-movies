import { useNavigate } from 'react-router-dom';
import css from './SearchForm.module.css';

const SearchForm = ({ handleSubmit }) => {
  const navigate = useNavigate();
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        placeholder="Movie name..."
        className={css.input}
        type="text"
        name="query"
      />
      <button
        className={css.button}
        onClick={() => {
          navigate('/movies');
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
