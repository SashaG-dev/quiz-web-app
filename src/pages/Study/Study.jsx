import { useStudyContext } from './StudyLayout';
import StartStudy from './StartStudy/StartStudy';
import QuizNav from '../../components/QuizNav/QuizNav';
import CardLayout from './Studying/CardLayout';
import './study.scss';

const Study = () => {
  const { status, type } = useStudyContext();

  return (
    <div className="study container container--grid">
      <QuizNav status={status} />
      <div className="study__container">
        {status === 'waiting' && <StartStudy />}
        {status === 'starting' &&
          (type === 'notes' ? <h1>Placeholder</h1> : <CardLayout />)}
      </div>
    </div>
  );
};
export default Study;
