import { defer } from 'react-router-dom';
import { getQuiz } from '../../api/api';

const quizLoader = async ({ params }) => {
  try {
    const { id } = params;
    return defer({ quiz: getQuiz(id) });
  } catch (err) {
    console.error(err);
    throw {
      heading: "Whoops! That's awkward...",
      message:
        'There was a problem while fetching the quiz data. Check your connection and try again!',
    };
  }
};

export default quizLoader;
