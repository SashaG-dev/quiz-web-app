import { useEffect } from 'react';

const handleKey = (action, dispatch, type) => {
  useEffect(() => {
    const labels = document.querySelectorAll('.radio__label--2');

    const handleKeyUp = (e) => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        const newType = e.target.htmlFor;
        dispatch({ type: action, payload: { typeName: newType } });
      }
    };

    labels.forEach((label) => {
      label.addEventListener('keyup', handleKeyUp);
    });

    return () => {
      labels.forEach((label) =>
        label.removeEventListener('keyup', handleKeyUp)
      );
    };
  }, [type]);
};

export default handleKey;
