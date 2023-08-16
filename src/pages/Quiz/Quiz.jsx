import { useQuizContext } from './QuizProvider';
import StartQuiz from './StartQuiz/StartQuiz';

const Quiz = () => {
  const { quizStatus, quizType, index } = useQuizContext();

  return (
    <div>
      {quizStatus === 'waiting' && <StartQuiz />}
      {}
    </div>
  );
};
export default Quiz;
