import { Link } from 'react-router-dom';
import './not-found.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="heading-primary not-found__heading">
        Oops! Nothing's here...
      </h1>
      <h2 className="heading-secondary not-found__subheading mb-sm">
        404 - Page Not Found
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
