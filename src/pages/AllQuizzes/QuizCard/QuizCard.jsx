import { Link } from 'react-router-dom';
import './quiz-card.scss';

const QuizCard = ({ title, total, difficulty, topics, link }) => {
  const displayDifficulty = () => {
    if (difficulty === 'beginner') return 'quiz-card__dot--begin';
    if (difficulty === 'intermediate') return 'quiz-card__dot--inter';
    if (difficulty === 'challenging') return 'quiz-card__dot--chal';
  };

  return (
    <div className="quiz-card">
      <div
        className={`quiz-card__dot ${displayDifficulty()}`}
        title={`Difficulty: ${difficulty}`}
      >
        <span>{difficulty}</span>
      </div>
      <h2 className="quiz-card__title">{title}</h2>
      <div className="quiz-card__details">
        <p className="quiz-card__total">{total} questions</p>
        <p className="quiz-card__covers">Covers: {topics}</p>
      </div>
      <div className="quiz-card__links">
        <Link to={`/study/${link}`} className="btn btn--blue quiz-card__link">
          Study Now
        </Link>
        <Link to={`/quiz/${link}`} className="btn quiz-card__link">
          Quiz Me
        </Link>
      </div>
    </div>
  );
};
export default QuizCard;
