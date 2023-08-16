import { useState } from 'react';
import { useQuizContext } from '../QuizProvider';
import { TOGGLE_QUIZ } from '../quizReducer';
import TextInput from '../../../components/TextInput/TextInput';
import Button from '../../../components/Button/Button';
import ErrorTop from '../../../components/ErrorTop/ErrorTop';
import './typed-question.scss';

const TypedQuestion = () => {
  const [inputAnswer, setInputAnswer] = useState('');
  const [toggleError, setToggleError] = useState(false);
  const { questions, index, dispatch } = useQuizContext();

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

  const setPlaceholder = () => {
    return index < 1 ? 'Answer here!' : '';
  };

  return (
    <div className="typed-question container">
      {toggleError && <ErrorTop text="✋ Wait! Enter an answer first." />}
      <TextInput
        title={questions[index + 1].question}
        number={index + 1}
        value={inputAnswer}
        func={handleChange}
        placeholder={setPlaceholder()}
      />

      <div className="typed-question__btn-container">
        {index !== 9 ? (
          <Button title={'Next Question'} func={handleClick} />
        ) : (
          <Button title={'Finish Quiz'} func={handleClick} />
        )}
      </div>
    </div>
  );
};
export default TypedQuestion;
