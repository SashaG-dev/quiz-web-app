import { Await, useLoaderData, Link } from 'react-router-dom';
import RenderChallenge from './RenderChallenge/RenderChallenge';
import { scrollToTop } from '../../utils';
import './challenge.scss';

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
      <Await resolve={challenge}>
        {(challenge) => {
          return <RenderChallenge {...challenge} />;
        }}
      </Await>
    </main>
  );
};
export default Challenge;
