import './no-quiz.scss';

const NoQuizzes = () => {
  return (
    <div className="no-quiz">
      <h1 className="heading-primary mb-sm">
        Hm, no quizzes seem to match that search.
      </h1>
      <h2>Try clicking the 'All Quizzes' button!</h2>
    </div>
  );
};
export default NoQuizzes;
