import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import CloseModal from '../Modals/CloseModal';
import './quiz-nav.scss';

const QuizNav = ({ status, children }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const navigate = useNavigate();

  const handleModal = () => {
    if (status === 'starting') {
      setToggleModal(true);
    } else navigate('/all-quizzes');
  };

  const closeModal = () => {
    setToggleModal(false);
  };

  const goBack = () => {
    navigate('/all-quizzes');
  };

  return (
    <>
      {toggleModal && (
        <CloseModal
          text="Are you sure you want to go?"
          subheading="None of your progress will be saved!"
          func={goBack}
          closeModal={closeModal}
          btnText="Back to quizzes"
        />
      )}
      <nav className="quiz-nav">
        <ul className="quiz-nav__links">
          <button
            type="button"
            className="quiz-nav__btn btn"
            title="Go back to all quizzes"
            onClick={handleModal}
          >
            <BsArrowLeft /> Go Back
          </button>
          {children}
        </ul>
      </nav>
    </>
  );
};
export default QuizNav;
