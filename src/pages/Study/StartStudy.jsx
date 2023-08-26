import { useStudyContext } from './StudyLayout';
import Radio from '../../components/Radio-v2/Radio';
import { CHANGE_TYPE, START } from './studyReducer';
import handleKey from '../../hooks';
import { handleStartChange, handleStart } from '../../utils';
import '../../sass/components/start.scss';

const StartStudy = () => {
  const { details, type, dispatch } = useStudyContext();
  const { title, topics } = details;

  handleKey(CHANGE_TYPE, dispatch, type);

  return (
    <div className="start">
      <div className="start__container">
        <h1 className="start__heading">{title}</h1>
        <p className="start__subheading">Topics covered: {topics}</p>
        <form className="start__options">
          <h2
            className="start__options-heading heading-tertiary mb-sm"
            id="study-label"
          >
            Pick your study style:
          </h2>
          <div className="start__row">
            <Radio
              name="type"
              value="flashcards"
              title="Flashcards"
              state={type}
              func={() =>
                handleStartChange('flashcards', dispatch, CHANGE_TYPE)
              }
            />
            <Radio
              name="type"
              value="notes"
              title="Classic Notes"
              state={type}
              func={() => handleStartChange('notes', dispatch, CHANGE_TYPE)}
            />
          </div>

          <button
            type="button"
            className="start__btn btn btn--blue"
            onClick={(e) => handleStart(e, dispatch, START)}
            aria-label="start studying"
            title="Start studying"
          >
            Let's Start
          </button>
        </form>
      </div>
    </div>
  );
};
export default StartStudy;
