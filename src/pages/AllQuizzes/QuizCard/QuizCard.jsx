import { Link } from 'react-router-dom';
import { displayDifficulty } from '../../../utils';
import './quiz-card.scss';

const QuizCard = ({ title, total, difficulty, topics, link }) => {
  return (
    <div className="quiz-card">
      <div
        tabIndex={0}
        className={`quiz-card__dot ${displayDifficulty(
          difficulty,
          'quiz-card__dot'
        )}`}
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
        <Link
          to={`/study/${link}`}
          className="btn btn--blue quiz-card__link"
          title={`Study ${title}`}
        >
          Study Now
        </Link>
        <Link
          to={`/quiz/${link}`}
          className="btn quiz-card__link"
          title={`Take the ${title} quiz`}
        >
          Quiz Me
        </Link>
      </div>
    </div>
  );
};
export default QuizCard;
