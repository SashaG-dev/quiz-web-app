import { useStudyContext } from './StudyLayout';
import StartStudy from './StartStudy/StartStudy';
import QuizNav from '../../components/QuizNav/QuizNav';
import './study.scss';

const Study = () => {
  const { status } = useStudyContext();

  return (
    <div className="study container container--grid">
      <QuizNav status={status} />
      <div className="study__container">
        {status === 'waiting' && <StartStudy />}
        {status === 'starting' && <h1>Placeholder</h1>}
      </div>
    </div>
  );
};
export default Study;
