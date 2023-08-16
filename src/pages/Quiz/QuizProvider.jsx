import { createContext, useContext, useState, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';
import { quizReducer } from './quizReducer';

const initialState = {
  score: 0,
  index: 0,
  multipleQuestions: [],
  quizStatus: 'waiting',
  quizType: 'multiple',
  answers: [],
};

const QuizContext = createContext();
const useQuizContext = () => useContext(QuizContext);

const QuizProvider = ({ children }) => {
  const { allQuizzes } = useGlobalContext();
  const { id } = useParams();
  // TODO: fetch data from API
  const [quiz, setQuiz] = useState(
    allQuizzes.find((q) => q.details.link === id)
  );
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ ...quiz, dispatch, ...state }}>
      {children}
    </QuizContext.Provider>
  );
};

export { QuizProvider, useQuizContext };
