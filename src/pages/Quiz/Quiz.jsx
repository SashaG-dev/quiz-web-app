import { useState } from 'react';
import { useQuizContext } from './QuizProvider';
import StartQuiz from './StartQuiz/StartQuiz';
import FinishQuiz from './FinishQuiz/FinishQuiz';
import TypedQuestion from './TypedQuestion/TypedQuestion';

const Quiz = () => {
  const { quizStatus, quizType, index, answers } = useQuizContext();

  return (
    <div>
      {quizStatus === 'waiting' && <StartQuiz />}

      {quizStatus === 'starting' ? (
        quizType === 'text' ? (
          <TypedQuestion />
        ) : (
          <p>Placeholder</p>
        )
      ) : (
        ''
      )}

      {quizStatus === 'finishing' && <FinishQuiz />}
    </div>
  );
};
export default Quiz;
