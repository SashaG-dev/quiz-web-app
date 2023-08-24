import { Suspense, useReducer, createContext, useContext } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';
import { getQuiz } from '../../api/api';
import Study from './Study';
import Loading from '../../components/Loading/Loading';
import { studyReducer } from './studyReducer';

export const loader = async ({ params }) => {
  try {
    const { id } = params;
    return defer({ quiz: getQuiz(id) });
  } catch (err) {
    console.error(err);
    throw {
      heading: "Whoops! That's awkward...",
      message:
        'There was a problem while fetching study notes. Check your connection and try again!',
    };
  }
};

const StudyContext = createContext();
export const useStudyContext = () => useContext(StudyContext);

const StudyLayout = () => {
  const { quiz } = useLoaderData();

  const initialState = {
    index: 0,
    status: 'waiting',
    type: 'flashcards',
    flashcards: {
      cardColor: 'white',
    },
  };

  const [state, dispatch] = useReducer(studyReducer, initialState);

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={quiz}>
        {(quiz) => {
          return (
            <StudyContext.Provider value={{ ...state, dispatch, ...quiz }}>
              <Study />
            </StudyContext.Provider>
          );
        }}
      </Await>
    </Suspense>
  );
};
export default StudyLayout;
