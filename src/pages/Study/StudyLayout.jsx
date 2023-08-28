import { Suspense, useReducer, createContext, useContext } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import Study from './Study';
import Loading from '../../components/Loading/Loading';
import { studyReducer } from './studyReducer';

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
      hideTutorial: localStorage.getItem('flashcards') || false,
    },
    notes: {
      hideTutorial: localStorage.getItem('notes') || false,
    },
  };

  const [state, dispatch] = useReducer(studyReducer, initialState);

  return (
    <Await resolve={quiz}>
      {(quiz) => {
        return (
          <StudyContext.Provider value={{ ...state, dispatch, ...quiz }}>
            <Study />
          </StudyContext.Provider>
        );
      }}
    </Await>
  );
};
export default StudyLayout;
