import css from './Logo.module.css';

export const Logo = () => {
  return (
    <a href="/">
      <img className={css.logo} alt="logo" />
    </a>
  );
};
