import { useState, useEffect } from 'react';
import { useQuizContext } from '../QuizProvider';

const FinishQuiz = () => {
  const { questions, answers } = useQuizContext();
  const [compareAnswers, setCompareAnswers] = useState([]);

  useEffect(() => {
    const quizQuestions = Object.values(questions);
    const allAnswers = quizQuestions.map((question, i) => {
      if (question.answer === answers[i]) return;
      return [answers[i], question, i];
    });
    setCompareAnswers(allAnswers);
  }, []);

  return (
    // Testing Only
    <div>
      {compareAnswers.map((answer) =>
        !answer ? (
          ''
        ) : (
          <div>
            <h1>
              {answer[2] + 1} {answer[1].question}
            </h1>
            <p>Your answer: {answer[0]}</p>
            <p>Correct answer: {answer[1].answer}</p>
          </div>
        )
      )}
    </div>
  );
};
export default FinishQuiz;
