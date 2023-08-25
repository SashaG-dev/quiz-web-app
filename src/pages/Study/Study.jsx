import { useStudyContext } from './StudyLayout';
import StartStudy from './StartStudy';
import QuizNav from '../../components/QuizNav/QuizNav';
import CardLayout from './CardStudy/CardLayout';
import NoteLayout from './NoteStudy/NoteLayout';
import CardMenu from './CardStudy/CardMenu/CardMenu';
import { SWITCH_STUDY } from './studyReducer';
import './study.scss';

const Study = () => {
  const {
    status,
    type,
    details: { link, title },
    dispatch,
  } = useStudyContext();

  const NotesLink = () => {
    return (
      <button
        className="btn btn--blue"
        onClick={() =>
          dispatch({ type: SWITCH_STUDY, payload: { studyType: 'flashcards' } })
        }
        title="Switch to flashcards"
      >
        Use Flashcards
      </button>
    );
  };

  return (
    <div className="study container container--grid">
      <QuizNav status={status}>
        {status === 'starting' &&
          (type === 'notes' ? <NotesLink /> : <CardMenu />)}
      </QuizNav>
      <div className="study__container">
        {status === 'waiting' && <StartStudy />}
        {status === 'starting' &&
          (type === 'notes' ? <NoteLayout /> : <CardLayout />)}
      </div>
    </div>
  );
};
export default Study;
