import { useState } from 'react';
import { useQuizContext } from '../QuizLayout';
import Button from '../../../components/Button/Button';
import ErrorTop from '../../../components/ErrorTop/ErrorTop';

const RadioQuestion = () => {
  const { questions, index, dispatch } = useQuizContext();

  return (
    <div>
      <h1>Radio Question</h1>
    </div>
  );
};
export default RadioQuestion;
