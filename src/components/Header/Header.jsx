import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <span className="logo--desktop">Frontend Quizzes</span>
        <span className="logo--mobile">FQ</span>
      </h1>

      <nav className="nav">
        <ul className="nav__list">
          <li>
            <NavLink to="." className="nav__link" title="Return home">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="all-quizzes"
              className="nav__link"
              title="View all quizzes"
            >
              All Quizzes
            </NavLink>
          </li>

          <li>
            <NavLink
              to="challenges"
              className="nav__link"
              title="View all challenges"
            >
              Challenges
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
