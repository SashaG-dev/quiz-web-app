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
          className="menu__btn btn btn--white"
          title="Show all quizzes"
          onClick={() => setSearchParams()}
        >
          All Quizzes
        </button>

        <button
          className={`menu__btn btn btn--white ${setActive('javascript')}`}
          onClick={() => setSearchParams({ type: 'javascript' })}
        >
          JavaScript
        </button>
        <button
          className={`menu__btn btn btn--white ${setActive('react')}`}
          onClick={() => setSearchParams({ type: 'react' })}
        >
          React
        </button>
        <button
          className={`menu__btn btn btn--white ${setActive('beginner')}`}
          onClick={() => setSearchParams({ difficulty: 'beginner' })}
        >
          Beginner
        </button>
        <button
          className={`menu__btn btn btn--white ${setActive('intermediate')}`}
          onClick={() => setSearchParams({ difficulty: 'intermediate' })}
        >
          Intermediate
        </button>
        <button
          className={`menu__btn btn btn--white ${setActive('challenging')}`}
          onClick={() => setSearchParams({ difficulty: 'challenging' })}
        >
          Challenging
        </button>
      </div>
    </div>
  );
};
export default Menu;
