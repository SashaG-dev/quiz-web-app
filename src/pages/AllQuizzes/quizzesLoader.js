import { defer } from 'react-router-dom';
import { getAllQuizzes } from '../../api/api';

const quizzesLoader = async () => {
  try {
    return defer({ allQuizzes: getAllQuizzes() });
  } catch (err) {
    console.error(err);
    throw {
      heading: "Whoops! That's awkward...",
      message: "Couldn't load quizzes. Check your connection and try again!",
    };
  }
};

export default quizzesLoader;
