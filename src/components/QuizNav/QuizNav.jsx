import { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import CloseModal from '../Modals/CloseModal';
import './quiz-nav.scss';

const QuizNav = memo(function QuizNav(props) {
  const { status, children } = props;
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
      <nav className="quiz-nav" aria-label="quiz navigation">
        <div className="quiz-nav__links">
          <button
            type="button"
            className="quiz-nav__btn btn"
            title="Go back to all quizzes"
            onClick={handleModal}
            role="link"
            aria-haspopup={status === 'starting' ? true : false}
          >
            <BsArrowLeft aria-hidden="true" /> Go Back
          </button>
          {children}
        </div>
      </nav>
    </>
  );
});

export default QuizNav;
