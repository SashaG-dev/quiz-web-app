import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';

const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const { allQuizzes } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    const { questions } = allQuizzes.find((quiz) => quiz.details.link === id);
    setQuiz(Object.values(questions));
  }, []);

  return (
    <div>
      {quiz.map((q) => {
        const { question, answer, id } = q;
        return (
          <div key={id}>
            <h1>{question}</h1>
            <p>{answer}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Quiz;
