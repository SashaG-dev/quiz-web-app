import { useQuizContext } from '../QuizProvider';
import { CHANGE_TYPE, START_QUIZ } from '../quizReducer';
import './start-quiz.scss';

const StartQuiz = () => {
  const { details, dispatch, quizType } = useQuizContext();
  const { title, difficulty, total } = details;

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
            <label htmlFor="multiple" className="start__label">
              <input
                type="radio"
                name="type"
                id="multiple"
                value="multiple"
                className="start__radio"
                checked={quizType === 'multiple'}
                onChange={() =>
                  dispatch({
                    type: CHANGE_TYPE,
                    payload: { typeName: 'multiple' },
                  })
                }
              />
              <span>&nbsp;</span>
              Multiple Choice
            </label>
            <label htmlFor="text" className="start__label">
              <input
                type="radio"
                name="type"
                id="text"
                value="radio"
                className="start__radio"
                checked={quizType === 'text'}
                onChange={() =>
                  dispatch({ type: CHANGE_TYPE, payload: { typeName: 'text' } })
                }
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
