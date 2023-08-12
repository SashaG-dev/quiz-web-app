import { useState, useEffect } from 'react';
import { quizzes } from '../../quizData';
import QuizCard from './QuizCard/QuizCard';
import './all-quizzes.scss';

const AllQuizzes = () => {
  const [allQuizzes, setAllQuizzes] = useState([]);

  useEffect(() => {
    const allJavaScript = Object.values(quizzes.javascript);
    setAllQuizzes([...allJavaScript]);
  }, []);

  return (
    <section className="all">
      <div className="all-container container">
        {allQuizzes.map((quiz) => {
          return <QuizCard key={quiz.details.title} {...quiz.details} />;
        })}
      </div>
    </section>
  );
};
export default AllQuizzes;
