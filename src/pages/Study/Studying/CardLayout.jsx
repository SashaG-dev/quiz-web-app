import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useStudyContext } from '../StudyLayout';
import { TOGGLE_CARD } from '../studyReducer';
import FlashCard from './FlashCard/FlashCard';
import './card-layout.scss';

const CardLayout = () => {
  const {
    details: { link, title },
    questions,
    index,
    dispatch,
  } = useStudyContext();

  const [cardEffects, setCardEffects] = useState({
    isFlipped: false,
    toggleAnimate: true,
  });

  useEffect(() => {
    setCardEffects((effects) => ({
      ...effects,
      toggleAnimate: true,
    }));
  }, [index]);

  const handleClick = (direction) => {
    setCardEffects({ isFlipped: false, toggleAnimate: false });
    dispatch({ type: TOGGLE_CARD, payload: { direction: direction } });
  };

  return (
    <div className="card-layout">
      <FlashCard
        {...questions[index]}
        state={cardEffects}
        func={setCardEffects}
      />

      <div className="card-layout__buttons-container">
        <button
          disabled={index === 0}
          onClick={() => handleClick('prev')}
          className="btn card-layout__btn"
          title={index === 0 ? '' : 'Go to previous flashcard'}
        >
          <BsArrowLeft />
          previous
        </button>

        <button
          disabled={index === questions.length - 1}
          onClick={() => handleClick('next')}
          className="btn card-layout__btn"
          title={index === questions.length - 1 ? '' : 'Go to next flashcard'}
        >
          next
          <BsArrowRight />
        </button>
        <Link
          to={`/quiz/${link}`}
          title={`Take ${title} quiz`}
          className="btn btn--blue"
          style={{ textAlign: 'center' }}
        >
          Take Quiz
        </Link>
      </div>
    </div>
  );
};
export default CardLayout;