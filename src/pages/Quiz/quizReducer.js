export const CHANGE_TYPE = 'CHANGE_TYPE';
export const START_QUIZ = 'START_QUIZ';

export const quizReducer = (state, action) => {
  if (action.type === CHANGE_TYPE) {
    const newType = action.payload.typeName;
    return { ...state, quizType: newType };
  }
  if (action.type === START_QUIZ) {
    console.log('starting!');
    return { ...state, quizStatus: 'starting' };
  }
};
