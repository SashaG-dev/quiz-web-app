import { useQuizContext } from '../QuizLayout';
import { CHANGE_TYPE, START } from '../quizReducer';
import Radio from '../../../components/Radio-v2/Radio';
import handleKey from '../../../hooks';
import { handleStartChange, handleStart } from '../../../utils';
import '../../../sass/components/start.scss';

const StartQuiz = () => {
  const { details, dispatch, type } = useQuizContext();
  const { title, difficulty, total } = details;

  handleKey(CHANGE_TYPE, dispatch, type);

  return (
    <div className="start">
      <div className="start__container">
        <h1 className="start__heading">{title}</h1>
        <h2 className="start__subheading">Difficulty: {difficulty}</h2>
        <p className="start__questions">Total Questions: {total}</p>

        <div className="start__options">
          <h2
            className="start__options-heading heading-tertiary mb-sm"
            id="quiz-label"
          >
            Pick your quiz style:
          </h2>
          <form className="start__row">
            <Radio
              name="type"
              value="multiple"
              state={type}
              title="Multiple Choice"
              func={() => handleStartChange('multiple', dispatch, CHANGE_TYPE)}
            />
            <Radio
              name="type"
              value="text"
              state={type}
              title="Typed Answers"
              func={() => handleStartChange('text', dispatch, CHANGE_TYPE)}
            />
          </form>

          <button
            className="start__btn btn btn--blue"
            type="button"
            onClick={(e) => handleStart(e, dispatch, START)}
            title="start quiz"
            aria-label="start quiz"
          >
            Let's Start
          </button>
        </div>
      </div>
    </div>
  );
};
export default StartQuiz;
