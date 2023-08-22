export const CHANGE_TYPE = 'CHANGE_TYPE';
export const START = 'START';

export const studyReducer = (state, action) => {
  if (action.type === CHANGE_TYPE) {
    const studyType = action.payload.typeName;
    return { ...state, type: studyType };
  }
  if (action.type === START) {
    return { ...state, status: 'starting' };
  }
  return state;
};
