import './flashcard.scss';

const FlashCard = ({ question, answer, state, func }) => {
  const flipCard = () => (state.isFlipped ? 'flipped' : '');
  const transition = () => (state.toggleAnimate ? 'transition' : '');

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
    >
      <div className={`flashcard__side flashcard__side-front ${transition()}`}>
        <p className="flashcard__question">{question}</p>
      </div>
      <div className={`flashcard__side flashcard__side-back ${transition()}`}>
        <p className="flashcard__answer">{answer}</p>
      </div>
    </div>
  );
};
export default FlashCard;