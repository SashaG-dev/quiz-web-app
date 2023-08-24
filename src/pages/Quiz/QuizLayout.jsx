import { createContext, useContext, useReducer, Suspense } from 'react';
import { defer, useLoaderData, Await } from 'react-router-dom';
import Quiz from './Quiz';
import Loading from '../../components/Loading/Loading';
import { quizReducer } from './quizReducer';
import { getQuiz } from '../../api/api';

export const loader = async ({ params }) => {
  try {
    const { id } = params;
    return defer({ quiz: getQuiz(id) });
  } catch (err) {
    console.error(err);
    throw {
      heading: "Whoops! That's awkward...",
      message:
        'There was a problem while fetching the quiz. Check your connection and try again!',
    };
  }
};

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
    <Suspense fallback={<Loading />}>
      <Await resolve={quiz}>
        {(quiz) => {
          return (
            <QuizContext.Provider value={{ ...quiz, ...state, dispatch }}>
              <Quiz />
            </QuizContext.Provider>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default QuizLayout;
