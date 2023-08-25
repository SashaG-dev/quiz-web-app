import { Suspense } from 'react';
import { defer, Await, useLoaderData, Link } from 'react-router-dom';
import RenderChallenge from './RenderChallenge/RenderChallenge';
import Loading from '../../components/Loading/Loading';
import { scrollToTop } from '../../utils';
import { getChallenge } from '../../api/api';
import './challenge.scss';

export const loader = async ({ params }) => {
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

const Challenge = () => {
  const { challenge } = useLoaderData();

  scrollToTop();

  return (
    <main className="challenge">
      <Link
        to="../"
        relative="path"
        title="Return to all challenges"
        className="btn btn--blue challenge__link"
      >
        &larr; Back to all challenges
      </Link>
      <Suspense fallback={<Loading />}>
        <Await resolve={challenge}>
          {(challenge) => {
            return <RenderChallenge {...challenge} />;
          }}
        </Await>
      </Suspense>
    </main>
  );
};
export default Challenge;
