import { useSearchParams } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = [
    'All Quizzes',
    'JavaScript',
    'React',
    'Beginner',
    'Intermediate',
    'Challenging',
  ];

  const filterType = searchParams.get('type');
  const filterDifficulty = searchParams.get('difficulty');

  const setActive = (name) => {
    return filterType === name || filterDifficulty === name ? 'active' : '';
  };

  const setParamObj = (filter, arr) => {
    if (filter.includes('All')) return;
    if (arr.indexOf(filter) <= 2) {
      return { type: filter.toLowerCase() };
    }
    return { difficulty: filter.toLowerCase() };
  };

  return (
    <div className="menu">
      <div className="menu__categories">
        {filters.map((filter, _, arr) => {
          return (
            <button
              key={filter}
              className={`menu__btn btn btn--white ${setActive(
                filter.toLowerCase()
              )}`}
              onClick={() => setSearchParams(setParamObj(filter, arr))}
              title={`Display ${
                filter.includes('All') ? filter : filter + ' quizzes'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Menu;
