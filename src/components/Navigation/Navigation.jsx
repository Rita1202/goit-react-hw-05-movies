import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  let activeStyle = {
    color: '#ffcc00',
  };

  return (
    <div className={css.wrapper}>
      <nav>
        <ul className={css.nav}>
          <NavLink
            className={css.link}
            to="/"
            end
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            className={css.link}
            to="/movies"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Movies
          </NavLink>
          {/* <NavLink
            className={css.link}
            to="/watched"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Watched
          </NavLink> */}
        </ul>
      </nav>
    </div>
  );
};

// className={css.wrapper}
