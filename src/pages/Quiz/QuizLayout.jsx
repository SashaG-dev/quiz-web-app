import { Link } from 'react-router-dom';
import { QuizProvider } from './QuizProvider';
import Quiz from './Quiz';

const QuizLayout = () => {
  const linkStyle = {
    position: 'absolute',
    top: '3.2rem',
    left: '3.2rem',
    color: 'var(--black)',
    textDecoration: 'underline',
    zIndex: '5',
  };

  return (
    <div className="quiz-layout">
      {/* <Link to="/all-quizzes" style={linkStyle}>
        &larr; All quizzes
      </Link> */}
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
};
export default QuizLayout;
