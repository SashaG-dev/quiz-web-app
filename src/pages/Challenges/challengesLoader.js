import { defer } from 'react-router-dom';
import { getAllChallenges } from '../../api/api';

const challengesLoader = async () => {
  try {
    return defer({ challenges: getAllChallenges() });
  } catch (err) {
    console.error(err);
    throw {
      header: "Whoops! That's awkward...",
      message: "Couldn't load challenges. Check your connection and try again!",
    };
  }
};

export default challengesLoader;
