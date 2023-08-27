import { Await, useLoaderData } from 'react-router-dom';
import ChallengeCard from './ChallengeCard/ChallengeCard';
import './challenges.scss';

const Challenges = () => {
  const { challenges } = useLoaderData();

  return (
    <main className="challenges">
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
    </main>
  );
};
export default Challenges;
