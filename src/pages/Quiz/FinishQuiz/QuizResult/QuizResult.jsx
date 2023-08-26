import './quiz-result.scss';

const QuizResult = ({ answer, question, userAnswer, i }) => {
  return (
    <div className="quiz-result">
      <h2 className="quiz-result__heading">Question {i + 1}</h2>
      <h3 className="quiz-result__subheading">{question}</h3>
      <p className="quiz-result__user-answer padding-red">
        <span>Your answer:</span> {userAnswer}
      </p>
      <p className="quiz-result__answer padding-green">
        <span>Correct answer:</span> {answer}
      </p>
    </div>
  );
};
export default QuizResult;
