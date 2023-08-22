export const CHANGE_TYPE = 'CHANGE_TYPE';
export const START = 'START';
export const TOGGLE_QUIZ = 'TOGGLE_QUIZ';
export const REDO_QUIZ = 'REDO_QUIZ';

export const quizReducer = (state, action) => {
  if (action.type === CHANGE_TYPE) {
    const newType = action.payload.typeName;
    return { ...state, type: newType };
  }
  if (action.type === START) {
    return { ...state, quizStatus: 'starting' };
  }
  if (action.type === TOGGLE_QUIZ) {
    const { inputAnswer, payloadType } = action.payload;
    if (payloadType === 'next') {
      return {
        ...state,
        index: state.index + 1,
        answers: [...state.answers, inputAnswer],
      };
    }
    return {
      ...state,
      answers: [...state.answers, inputAnswer],
      quizStatus: 'finishing',
    };
  }
  if (action.type === REDO_QUIZ) {
    return { ...state, quizStatus: 'waiting', index: 0, answers: [] };
  }

  return state;
};
