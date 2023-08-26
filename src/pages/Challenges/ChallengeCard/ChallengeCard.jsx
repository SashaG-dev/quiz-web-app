import { Link } from 'react-router-dom';
import { displayDifficulty } from '../../../utils';
import './challenge-card.scss';

const ChallengeCard = ({ heading, description, link, difficulty }) => {
  return (
    <div className="challenge-card">
      <div
        title={`difficulty: ${difficulty}`}
        className={`challenge-card__difficulty ${displayDifficulty(
          difficulty,
          'challenge-card__difficulty'
        )}`}
      >
        {difficulty}
      </div>

      <div className="challenge-card__headings">
        <h2 className="challenge-card__heading">{heading}</h2>
        <h3 className="challenge-card__subheading">{description}</h3>
      </div>

      <Link
        to={`${link}`}
        className="challenge-card__btn btn btn--blue"
        title={`Learn more about the ${heading} challenge`}
      >
        View this challenge
      </Link>
    </div>
  );
};
export default ChallengeCard;
