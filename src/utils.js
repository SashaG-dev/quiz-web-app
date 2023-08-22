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
