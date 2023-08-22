import { useStudyContext } from '../StudyLayout';
import Radio from '../../../components/Radio-v2/Radio';
import '../../../sass/components/start.scss';

const StartStudy = () => {
  return (
    <div className="start">
      <div className="start__container">
        <h1 className="start__heading">placeholder</h1>
        <form className="start__options">
          <h3 className="start__options-heading heading-tertiary mb-sm">
            Pick your study style:
          </h3>
          <div className="start__row">
            <Radio name="type" value="flashcards" title="Flashcards" />
            <Radio name="type" value="notes" title="Classic Notes" />
          </div>

          <button className="start__btn btn btn--blue">Let's Start</button>
        </form>
      </div>
    </div>
  );
};
export default StartStudy;
