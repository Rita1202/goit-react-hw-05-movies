import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';

export const Layout = () => {
  return (
    <>
      <header>
        <Logo />
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
