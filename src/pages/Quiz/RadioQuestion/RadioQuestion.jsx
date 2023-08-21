import { useState, useEffect } from 'react';
import { useQuizContext } from '../QuizLayout';
import { TOGGLE_QUIZ } from '../quizReducer';
import Radio from '../../../components/Radio/Radio';
import Button from '../../../components/Button/Button';
import ErrorTop from '../../../components/ErrorTop/ErrorTop';
import './radio-question.scss';

const RadioQuestion = () => {
  const [inputAnswer, setInputAnswer] = useState('');
  const [toggleError, setToggleError] = useState(false);
  const { questions, index, dispatch } = useQuizContext();
  const radioValues = questions[index].radioAnswers;

  useEffect(() => {
    const quizLabels = document.querySelectorAll('.radio__label');
    const handleQuizKeyUp = (e) => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        const newAnswer = e.target.htmlFor;
        setInputAnswer(newAnswer);
      }
    };
    quizLabels.forEach((label) => {
      label.addEventListener('keyup', handleQuizKeyUp);
    });

    return () => {
      quizLabels.forEach((label) => {
        label.removeEventListener('keyup', handleQuizKeyUp);
      });
    };
  }, [inputAnswer]);

  const handleChange = (e) => {
    setInputAnswer(e.target.value);
    setToggleError(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!inputAnswer) {
      setToggleError(true);
      return;
    }
    const payloadType = index !== questions.length - 1 ? 'next' : 'finish';
    dispatch({
      type: TOGGLE_QUIZ,
      payload: { inputAnswer: inputAnswer, payloadType },
    });
    setInputAnswer('');
  };

  return (
    <div className="radio-question">
      {toggleError && <ErrorTop text="✋ Wait! Choose an answer first." />}

      <h1 className="radio-question__heading">
        {index + 1}. {questions[index].question}
      </h1>

      <div className="radio-question__container mb-md">
        {radioValues.map((value) => (
          <Radio
            key={value}
            value={value}
            name="question"
            func={handleChange}
            state={inputAnswer}
          />
        ))}
      </div>
      <div className="radio-question__btn-container">
        {index + 1 !== questions.length ? (
          <Button title={'Next Question'} func={handleClick} />
        ) : (
          <Button title={'Finish Quiz'} func={handleClick} />
        )}
      </div>
    </div>
  );
};
export default RadioQuestion;
