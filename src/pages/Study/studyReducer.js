export const CHANGE_TYPE = 'CHANGE_TYPE';
export const START = 'START';
export const TOGGLE_CARD = 'TOGGLE_CARD';

export const studyReducer = (state, action) => {
  if (action.type === CHANGE_TYPE) {
    const studyType = action.payload.typeName;
    return { ...state, type: studyType };
  }
  if (action.type === START) {
    return { ...state, status: 'starting' };
  }
  if (action.type === TOGGLE_CARD) {
    const direction = action.payload.direction;
    return direction === 'next'
      ? { ...state, index: state.index + 1 }
      : { ...state, index: state.index - 1 };
  }
  return state;
};
