import { useState, useRef, useEffect } from 'react';
import { useQuizContext } from '../QuizLayout';
import { TOGGLE_QUIZ } from '../quizReducer';
import TextInput from '../../../components/TextInput/TextInput';
import Button from '../../../components/Button/Button';
import ErrorTop from '../../../components/ErrorTop/ErrorTop';
import './typed-question.scss';

const TypedQuestion = () => {
  const [inputAnswer, setInputAnswer] = useState('');
  const [toggleError, setToggleError] = useState(false);
  const { questions, index, dispatch } = useQuizContext();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [index]);

  const handleChange = (e) => {
    setToggleError(false);
    setInputAnswer(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!inputAnswer.trim()) {
      setToggleError(true);
      return;
    }
    const payloadType = index !== 9 ? 'next' : 'finish';
    dispatch({
      type: TOGGLE_QUIZ,
      payload: { inputAnswer: inputAnswer.toLowerCase().trim(), payloadType },
    });
    setInputAnswer('');
  };

  return (
    <div className="typed-question">
      {toggleError && <ErrorTop text="✋ Wait! Enter an answer first." />}
      <TextInput
        title={questions[index].question}
        number={index + 1}
        value={inputAnswer}
        func={handleChange}
        placeholder={index < 1 ? 'Answer here!' : ''}
        ref={inputRef}
      />

      <div className="typed-question__btn-container">
        {index + 1 !== questions.length ? (
          <Button title={'Next Question'} func={handleClick} />
        ) : (
          <Button title={'Finish Quiz'} func={handleClick} />
        )}
      </div>
    </div>
  );
};
export default TypedQuestion;
