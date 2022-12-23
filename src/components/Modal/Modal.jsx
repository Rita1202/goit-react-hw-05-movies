export const Modal = ({ movie, closeModal }) => {
  const toggleBurger = () => {
    closeModal();
  };

  const { poster_path, overview, title, original_language } = movie;
  return (
    <div className="backdrop">
      <div className="modal">
        {/* <button className={css.close} type="button">
          Close
        </button> */}
        <div onClick={toggleBurger} className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="wrapper">
          <div className="imgWrapper">
            <img
              className="img"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          </div>
          <div className="textWrapper">
            <h2 className="title">{title}</h2>
            <p className="lang">{original_language}</p>
            <p className="overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
