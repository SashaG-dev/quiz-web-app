import { useSearchParams } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterType = searchParams.get('type');
  const filterDifficulty = searchParams.get('difficulty');

  const setActive = (name) => {
    return filterType === name || filterDifficulty === name ? 'active' : null;
  };

  return (
    <div className="menu">
      <div className="menu__categories">
        <button
          className="menu__btn btn"
          title="Show all quizzes"
          onClick={() => setSearchParams()}
        >
          All Quizzes
        </button>

        <button
          className={`menu__btn btn ${setActive('javascript')}`}
          onClick={() => setSearchParams({ type: 'javascript' })}
        >
          JavaScript
        </button>
        <button
          className={`menu__btn btn ${setActive('react')}`}
          onClick={() => setSearchParams({ type: 'react' })}
        >
          React
        </button>
        <button
          className={`menu__btn btn ${setActive('beginner')}`}
          onClick={() => setSearchParams({ difficulty: 'beginner' })}
        >
          Beginner
        </button>
        <button
          className={`menu__btn btn ${setActive('intermediate')}`}
          onClick={() => setSearchParams({ difficulty: 'intermediate' })}
        >
          Intermediate
        </button>
        <button
          className={`menu__btn btn ${setActive('challenging')}`}
          onClick={() => setSearchParams({ difficulty: 'challenging' })}
        >
          Challenging
        </button>
      </div>
    </div>
  );
};
export default Menu;
