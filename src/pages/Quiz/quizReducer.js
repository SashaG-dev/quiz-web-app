export const CHANGE_TYPE = 'CHANGE_TYPE';
export const START_QUIZ = 'START_QUIZ';
export const TOGGLE_QUIZ = 'TOGGLE_QUIZ';

export const quizReducer = (state, action) => {
  if (action.type === CHANGE_TYPE) {
    const newType = action.payload.typeName;
    return { ...state, quizType: newType };
  }
  if (action.type === START_QUIZ) {
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
};
