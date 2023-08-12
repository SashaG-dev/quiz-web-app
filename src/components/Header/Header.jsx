import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header--desktop">
        <h1 className="logo">
          P<span>laceholder</span>
        </h1>

        <nav className="nav">
          <ul className="nav__list">
            <NavLink to="/" className="nav__link" title="Return home">
              <li>Home</li>
            </NavLink>

            <NavLink
              to="/all-quizzes"
              className="nav__link"
              title="View all quizzes"
            >
              <li>All Quizzes</li>
            </NavLink>

            <NavLink
              to="/challenges"
              className="nav__link"
              title="View all challenges"
            >
              <li>Challenges</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
