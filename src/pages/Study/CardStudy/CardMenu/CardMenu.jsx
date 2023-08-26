import { useState, useEffect } from 'react';
import { FaGear } from 'react-icons/fa6';
import { useStudyContext } from '../../StudyLayout';
import { TOGGLE_COLOR, SWITCH_STUDY } from '../../studyReducer';
import './card-menu.scss';

const CardMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const {
    flashcards: { cardColor },
    dispatch,
  } = useStudyContext();

  useEffect(() => {
    if (sessionStorage.getItem('cardColor')) {
      const userColor = sessionStorage.getItem('cardColor');
      dispatch({ type: TOGGLE_COLOR, payload: { color: userColor } });
    }
  }, []);

  const dispatchColor = (e, color) => {
    if ((e.type === 'click') | (e.key === 'Enter') | (e.keyCode === 13)) {
      dispatch({ type: TOGGLE_COLOR, payload: { color: color } });
    }
  };

  const toggleColor = (color) => {
    return cardColor === color ? 'selected' : '';
  };

  const setOpenClass = (className) => {
    return toggleMenu ? className : '';
  };

  const colors = ['white', 'black', 'red', 'blue', 'green'];

  return (
    <div className="menu-container">
      <div className={`card-menu ${setOpenClass('isOpen')}`}>
        <div
          className={`card-menu__settings-container ${setOpenClass('show')}`}
        >
          <div className="settings-colors">
            {colors.map((color) => {
              return (
                <div
                  tabIndex={0}
                  key={color}
                  className={`card-menu__color 
                card-menu__color--${color} ${toggleColor(color)}`}
                  title={`Change cards color to ${color}`}
                  onClick={(e) => dispatchColor(e, color)}
                  onKeyDown={(e) => dispatchColor(e, color)}
                  role="button"
                  aria-label={`Change flashcards to the color ${color}`}
                >
                  &nbsp;
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className={`card-menu__btn ${setOpenClass('isOpen')}`}
          title="Toggle flashcard settings"
          onClick={() => setToggleMenu((menu) => !menu)}
          aria-label="toggle flashcard settings"
        >
          <FaGear aria-hidden="true" />
        </button>
      </div>
      <button
        onClick={() =>
          dispatch({ type: SWITCH_STUDY, payload: { studyType: 'notes' } })
        }
        title="Switch to notes"
        className="btn btn--blue card-menu__btn--switch"
        aria-label="Switch to notes-style study session"
      >
        Use Notes
      </button>
    </div>
  );
};
export default CardMenu;
