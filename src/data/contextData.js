import { quizzes } from './quizData';

const allJavaScript = Object.values(quizzes.javascript);
const allReact = Object.values(quizzes.react);

export const contextData = [...allJavaScript, ...allReact];
