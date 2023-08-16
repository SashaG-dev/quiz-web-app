import { useQuizContext } from './QuizProvider';
import StartQuiz from './StartQuiz/StartQuiz';
import TypedQuestion from './TypedQuestion/TypedQuestion';

const Quiz = () => {
  const { quizStatus, quizType, index, answers } = useQuizContext();

  return (
    <div>
      {quizStatus === 'waiting' && <StartQuiz />}

      {quizStatus === 'starting' && quizType === 'text' ? (
        <TypedQuestion />
      ) : (
        <p>Placeholder</p>
      )}

      {quizStatus === 'finishing' && <p>Placeholder</p>}
    </div>
  );
};
export default Quiz;
