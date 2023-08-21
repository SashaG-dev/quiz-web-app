import { createContext, useContext, useReducer } from 'react';
import { defer, useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';
import { quizReducer } from './quizReducer';
import { getQuiz } from '../../api/api';

export const loader = async ({ params }) => {
  try {
    const { id } = params;
    const quizPromise = await getQuiz(id);
    return defer({ quiz: quizPromise });
  } catch (err) {
    throw err;
  }
};

const QuizContext = createContext();
export const useQuizContext = () => useContext(QuizContext);

const QuizLayout = () => {
  const initialState = {
    score: 0,
    index: 0,
    multipleQuestions: [],
    quizStatus: 'waiting',
    quizType: 'multiple',
    answers: [],
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);

  const { quiz } = useLoaderData();

  return (
    <QuizContext.Provider value={{ ...quiz, ...state, dispatch }}>
      <Quiz />
    </QuizContext.Provider>
  );
};

export default QuizLayout;
