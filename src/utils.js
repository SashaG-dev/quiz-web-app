import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const handleStartChange = (name, dispatch, action) => {
  dispatch({
    type: action,
    payload: { typeName: name },
  });
};

export const handleStart = (e, dispatch, action) => {
  e.preventDefault();
  dispatch({ type: action });
};

export const displayDifficulty = (difficulty, className) => {
  if (difficulty === 'beginner') return `${className}--begin`;
  if (difficulty === 'intermediate') return `${className}--inter`;
  if (difficulty === 'challenging') return `${className}--chal`;
};

export const scrollToTop = () => {
  const { pathname } = useLocation();
  window.scrollTo(0, 0);
  useEffect(() => {}, [pathname]);
};
