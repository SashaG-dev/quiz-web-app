import { useState, useEffect } from 'react';
import { useQuizContext } from '../QuizLayout';
import QuizResult from './QuizResult/QuizResult';
import './finish-quiz.scss';

const FinishQuiz = () => {
  const { questions, answers } = useQuizContext();
  const [compareAnswers, setCompareAnswers] = useState([]);

  useEffect(() => {
    const quizQuestions = Object.values(questions);
    const allAnswers = quizQuestions.map((question, i) => {
      if (question.answer.toLowerCase() === answers[i].toLowerCase()) return;
      return {
        id: question.id,
        answer: question.answer,
        question: question.question,
        userAnswer: answers[i],
        i,
      };
    });
    setCompareAnswers(allAnswers);
  }, []);

  const correctAnswers =
    answers.length - compareAnswers.filter((answer) => answer).length;

  return (
    <div className="finish">
      <h2 className="heading-secondary finish__heading">Your Results:</h2>
      <p className="finish__num">
        {correctAnswers} out of {answers.length}
      </p>
      <div className="finish__answers-container">
        {compareAnswers.map((answer) =>
          answer ? <QuizResult key={answer.id} {...answer} /> : ''
        )}
      </div>
    </div>
  );
};
export default FinishQuiz;
