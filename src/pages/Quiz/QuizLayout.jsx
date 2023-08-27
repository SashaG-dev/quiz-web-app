import { createContext, useContext, useReducer } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import Quiz from './Quiz';
import { quizReducer } from './quizReducer';

const QuizContext = createContext();
export const useQuizContext = () => useContext(QuizContext);

const QuizLayout = () => {
  const initialState = {
    score: 0,
    index: 0,
    quizStatus: 'waiting',
    type: 'multiple',
    answers: [],
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);

  const { quiz } = useLoaderData();

  return (
    <Await resolve={quiz}>
      {(quiz) => {
        return (
          <QuizContext.Provider value={{ ...quiz, ...state, dispatch }}>
            <Quiz />
          </QuizContext.Provider>
        );
      }}
    </Await>
  );
};

export default QuizLayout;
