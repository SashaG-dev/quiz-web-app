export const CHANGE_TYPE = 'CHANGE_TYPE';

export const quizReducer = (state, action) => {
  if (action.type === CHANGE_TYPE) {
    const newType = action.payload.typeName;
    return { ...state, quizType: newType };
  }
};
