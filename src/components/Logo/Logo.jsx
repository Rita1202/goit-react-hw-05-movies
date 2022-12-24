import css from './Logo.module.css';

export const Logo = () => {
  return (
    <a href="/goit-react-hw-05-movies/">
      <img className={css.logo} alt="logo" />
    </a>
  );
};
