import { NavLink, useLocation } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  const location = useLocation();
  let activeStyle = {
    color: '#ffcc00',
  };

  console.log(location);
  return (
    <div className={css.wrapper}>
      {/* {location.pathname !== '/movies' && <SearchForm />} */}
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
