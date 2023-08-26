import { useStudyContext } from '../../StudyLayout';
import './flashcard.scss';

const FlashCard = ({ question, answer, state, func }) => {
  const {
    flashcards: { cardColor },
  } = useStudyContext();

  const flipCard = () => (state.isFlipped ? 'flipped' : '');
  const transition = () => (state.toggleAnimate ? 'transition' : '');
  const setColor = () => (cardColor ? `flashcard__side--${cardColor}` : '');

  const handleClick = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13 || e.type === 'click') {
      func({ ...state, isFlipped: !state.isFlipped });
    }
  };

  return (
    <div
      className={`flashcard ${flipCard()}`}
      title={state.isFlipped ? 'Show question' : 'Show answer'}
      tabIndex={0}
      onClick={(e) => handleClick(e)}
      onKeyDown={(e) => handleClick(e)}
      aria-label={`Click or press enter to display ${
        state.isFlipped ? 'question' : 'answer'
      }`}
    >
      <div
        className={`flashcard__side flashcard__side-front ${transition()} ${setColor()}`}
        aria-label="Front of flashcard"
      >
        <p className="flashcard__question">{question}</p>
      </div>
      <div
        className={`flashcard__side flashcard__side-back ${transition()} ${setColor()}`}
        aria-label="Back of flashcard"
      >
        <p className="flashcard__answer">{answer}</p>
      </div>
    </div>
  );
};
export default FlashCard;
