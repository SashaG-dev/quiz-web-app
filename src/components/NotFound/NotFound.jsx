import { Link, useRouteError } from 'react-router-dom';
import './not-found.scss';

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="not-found">
      <h1 className="heading-primary not-found__heading">
        {error?.heading || "Oops! Nothing's here..."}
      </h1>
      <h2 className="heading-secondary not-found__subheading mb-sm">
        {error?.message || 'Return to the home page and try something else!'}
      </h2>
      <Link
        className="btn btn--blue not-found__link"
        title="Return to home page"
        to="/"
      >
        Head Back Home
      </Link>
    </div>
  );
};
export default NotFound;
