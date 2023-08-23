import { Link } from 'react-router-dom';
import { useStudyContext } from './StudyLayout';
import StartStudy from './StartStudy/StartStudy';
import QuizNav from '../../components/QuizNav/QuizNav';
import CardLayout from './Studying/CardLayout';
import NoteLayout from './Studying/NoteLayout';
import CardMenu from './Studying/CardMenu/CardMenu';
import './study.scss';

const Study = () => {
  const {
    status,
    type,
    details: { link, title },
  } = useStudyContext();

  const NotesLink = () => {
    return (
      <Link
        to={`/quiz/${link}`}
        title={`Take ${title} quiz`}
        className="btn btn--blue note-layout__btn"
      >
        Take Quiz
      </Link>
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
