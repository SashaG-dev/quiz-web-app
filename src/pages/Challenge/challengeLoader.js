import { defer } from 'react-router-dom';
import { getChallenge } from '../../api/api';

const challengeLoader = async ({ params }) => {
  try {
    const { id } = params;
    return defer({ challenge: getChallenge(id) });
  } catch (err) {
    console.error(err);
    throw {
      header: "Whoops! That's awkward...",
      message:
        "This challenge couldn't be loaded. Check your connect and try again!",
    };
  }
};

export default challengeLoader;
