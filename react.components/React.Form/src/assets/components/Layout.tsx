import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/controlForm">Control From</NavLink>
        <NavLink to="/unControlForm">Uncontrol From</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
