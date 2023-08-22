import { useStudyContext } from './StudyLayout';
import StartStudy from './StartStudy/StartStudy';
import QuizNav from '../../components/QuizNav/QuizNav';
import './study.scss';

const Study = () => {
  const data = useStudyContext();
  const { status } = useStudyContext();

  console.log(data);
  return (
    <div className="study container container--grid">
      <QuizNav status={status} />
      <div className="study__container">
        {status === 'waiting' && <StartStudy />}
      </div>
    </div>
  );
};
export default Study;
