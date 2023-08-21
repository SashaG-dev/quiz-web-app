import { useEffect } from 'react';
import { useQuizContext } from '../QuizLayout';
import { CHANGE_TYPE, START_QUIZ } from '../quizReducer';
import './start-quiz.scss';

const StartQuiz = () => {
  const { details, dispatch, quizType } = useQuizContext();
  const { title, difficulty, total } = details;

  useEffect(() => {
    const labels = document.querySelectorAll('.start__label');

    const handleKeyUp = (e) => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        const newType = e.target.htmlFor;
        dispatch({ type: CHANGE_TYPE, payload: { typeName: newType } });
      }
    };

    labels.forEach((label) => {
      label.addEventListener('keyup', handleKeyUp);
    });

    return () => {
      labels.forEach((label) =>
        label.removeEventListener('keyup', handleKeyUp)
      );
    };
  }, [quizType]);

  const handleChange = (name) => {
    dispatch({
      type: CHANGE_TYPE,
      payload: { typeName: name },
    });
  };

  const handleStart = (e) => {
    e.preventDefault();
    dispatch({ type: START_QUIZ });
  };

  return (
    <div className="start">
      <div className="start__container">
        <h1 className="start__heading">{title}</h1>
        <h2 className="start__subheading">Difficulty: {difficulty}</h2>
        <p className="start__questions">Total Questions: {total}</p>

        <form className="start__options">
          <h3 className="start__options-heading heading-tertiary mb-sm">
            Pick your quiz style:
          </h3>
          <div className="start__row">
            <label htmlFor="multiple" className="start__label" tabIndex={0}>
              <input
                type="radio"
                name="type"
                id="multiple"
                value="multiple"
                className="start__radio"
                checked={quizType === 'multiple'}
                onChange={() => handleChange('multiple')}
              />
              <span>&nbsp;</span>
              Multiple Choice
            </label>
            <label htmlFor="text" className="start__label" tabIndex={0}>
              <input
                type="radio"
                name="type"
                id="text"
                value="radio"
                className="start__radio"
                checked={quizType === 'text'}
                onChange={() => handleChange('text')}
              />
              <span>&nbsp;</span>
              Typed Answers
            </label>
          </div>

          <button
            className="start__btn btn btn--blue"
            onClick={(e) => handleStart(e)}
          >
            Let's Start
          </button>
        </form>
      </div>
    </div>
  );
};
export default StartQuiz;
