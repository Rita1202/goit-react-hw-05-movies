import css from './LoadMore.module.css';

const LoadMore = ({ handleLoadMore }) => {
  return (
    <button
      onClick={() => {
        handleLoadMore();
      }}
      className={css.btn}
      type="button"
    >
      Load more
    </button>
  );
};

export default LoadMore;
