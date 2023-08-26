import { Suspense } from 'react';
import { defer, Await, useLoaderData } from 'react-router-dom';
import { getAllChallenges } from '../../api/api';
import ChallengeCard from './ChallengeCard/ChallengeCard';
import Loading from '../../components/Loading/Loading';
import './challenges.scss';

export const loader = async () => {
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

const Challenges = () => {
  const { challenges } = useLoaderData();

  return (
    <main className="challenges">
      <Suspense fallback={<Loading />}>
        <Await resolve={challenges}>
          {(challenges) => {
            return (
              <section
                className="challenges__container container"
                aria-label="all challenges"
              >
                {challenges.map((challenge) => {
                  return (
                    <ChallengeCard
                      key={challenge.details.heading}
                      {...challenge.details}
                    />
                  );
                })}
              </section>
            );
          }}
        </Await>
      </Suspense>
    </main>
  );
};
export default Challenges;
