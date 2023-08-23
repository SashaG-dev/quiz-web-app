import { useState, useEffect } from 'react';
import { FaGear } from 'react-icons/fa6';
import { useStudyContext } from '../../StudyLayout';
import { TOGGLE_COLOR } from '../../studyReducer';
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
    <div className={`card-menu ${setOpenClass('isOpen')}`}>
      <div className={`card-menu__settings-container ${setOpenClass('show')}`}>
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
        title="Open flashcard settings"
        onClick={() => setToggleMenu((menu) => !menu)}
      >
        <FaGear />
      </button>
    </div>
  );
};
export default CardMenu;
