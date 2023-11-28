import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h1>Page not found</h1>
      <Link to="/">
        <p>return to main page</p>
      </Link>
    </>
  );
};

export { NotFoundPage };
