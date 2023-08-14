import { createContext, useContext, useState } from 'react';
import { contextData } from '../data/contextData';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [allQuizzes, setAllQuizzes] = useState(contextData);

  return (
    <GlobalContext.Provider value={{ allQuizzes }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
