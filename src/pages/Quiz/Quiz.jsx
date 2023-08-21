import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from './QuizLayout';
import { BsArrowLeft } from 'react-icons/bs';
import StartQuiz from './StartQuiz/StartQuiz';
import FinishQuiz from './FinishQuiz/FinishQuiz';
import TypedQuestion from './TypedQuestion/TypedQuestion';
import RadioQuestion from './RadioQuestion/RadioQuestion';
import Button from '../../components/Button/Button';
import CloseModal from '../../components/Modals/CloseModal';
import { REDO_QUIZ } from './quizReducer';
import './quiz.scss';

const Quiz = () => {
  const { quizStatus, quizType, index, answers, dispatch } = useQuizContext();
  const [toggleModal, setToggleModal] = useState(false);
  const navigate = useNavigate();

  const handleModal = () => {
    if (quizStatus === 'starting') {
      setToggleModal(true);
    } else navigate('/all-quizzes');
  };

  const closeModal = () => {
    setToggleModal(false);
  };

  const goBack = () => {
    navigate('/all-quizzes');
  };

  const redoQuiz = () => {
    dispatch({ type: REDO_QUIZ });
  };

  return (
    <div className="quiz container">
      {toggleModal && (
        <CloseModal
          text="Are you sure you want to go?"
          subheading="None of your progress will be saved!"
          func={goBack}
          closeModal={closeModal}
          btnText="Back to quizzes"
        />
      )}
      <nav className="quiz__nav">
        <ul className="quiz__nav-links">
          <button
            type="button"
            className="quiz__btn btn"
            title="Go back to all quizzes"
            onClick={handleModal}
          >
            <BsArrowLeft /> Go Back
          </button>

          {quizStatus === 'finishing' && (
            <Button title="Restart" func={redoQuiz} />
          )}
        </ul>
      </nav>

      <div className="quiz__container">
        {quizStatus === 'waiting' && <StartQuiz />}

        {quizStatus === 'starting' ? (
          quizType === 'text' ? (
            <TypedQuestion />
          ) : (
            <RadioQuestion />
          )
        ) : (
          ''
        )}

        {quizStatus === 'finishing' && <FinishQuiz />}
      </div>
    </div>
  );
};
export default Quiz;
