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
        aria-label="Switch to flashcard-style study session"
      >
        Use Flashcards
      </button>
    );
  };

  return (
    <main className="study container container--grid">
      <header role="banner">
        <QuizNav status={status}>
          {status === 'starting' &&
            (type === 'notes' ? <NotesLink /> : <CardMenu />)}
        </QuizNav>
      </header>
      <section className="study__container" aria-label="study session">
        {status === 'waiting' && <StartStudy />}
        {status === 'starting' &&
          (type === 'notes' ? <NoteLayout /> : <CardLayout />)}
      </section>
    </main>
  );
};
export default Study;
