import { Link } from 'react-router-dom';
import { useQuizContext } from './QuizLayout';
import StartQuiz from './StartQuiz/StartQuiz';
import FinishQuiz from './FinishQuiz/FinishQuiz';
import TypedQuestion from './TypedQuestion/TypedQuestion';
import RadioQuestion from './RadioQuestion/RadioQuestion';
import Button from '../../components/Button/Button';
import { REDO_QUIZ } from './quizReducer';
import QuizNav from '../../components/QuizNav/QuizNav';
import './quiz.scss';

const Quiz = () => {
  const {
    quizStatus,
    type,
    dispatch,
    details: { title, link },
  } = useQuizContext();

  const redoQuiz = () => {
    dispatch({ type: REDO_QUIZ });
  };

  return (
    <main className="quiz container container--grid">
      <header role="banner">
        <QuizNav status={quizStatus}>
          {quizStatus === 'waiting' && (
            <Link
              to={`/study/${link}`}
              title={`Go study ${title}`}
              aria-label={`Start a study session that covers ${title}`}
              className="btn btn--blue"
              style={{ textAlign: 'center' }}
            >
              Go Study
            </Link>
          )}
          {quizStatus === 'finishing' && (
            <Button title="Restart" func={redoQuiz} />
          )}
        </QuizNav>
      </header>

      <section
        className="quiz__container"
        aria-label={`${title.toLowerCase()} quiz`}
      >
        {quizStatus === 'waiting' && <StartQuiz />}

        {quizStatus === 'starting' &&
          (type === 'text' ? <TypedQuestion /> : <RadioQuestion />)}

        {quizStatus === 'finishing' && <FinishQuiz />}
      </section>
    </main>
  );
};
export default Quiz;
