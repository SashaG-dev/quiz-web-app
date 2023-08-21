import { Suspense } from 'react';
import { useSearchParams, defer, useLoaderData, Await } from 'react-router-dom';
import Menu from './Menu/Menu';
import QuizCard from './QuizCard/QuizCard';
import NoQuizzes from './NoQuizzes/NoQuizzes';
import { getAllQuizzes } from '../../api/api';
import './all-quizzes.scss';

export const loader = async () => {
  try {
    const quizzesPromise = await getAllQuizzes();
    return defer({ allQuizzes: quizzesPromise });
  } catch (err) {
    console.error(err);
    throw {
      message:
        "Uh-oh! Couldn't load quizzes. Check your connection and try again.",
    };
  }
};

const AllQuizzes = () => {
  const { allQuizzes } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterType = searchParams.get('type');
  const filterDifficulty = searchParams.get('difficulty');
  const filterName = searchParams.get('title');

  const displayQuizzes = allQuizzes.filter((quiz) => {
    if (filterType) {
      return quiz.details.type === filterType;
    }
    if (filterDifficulty) {
      return quiz.details.difficulty === filterDifficulty;
    }
    if (filterName) {
      return quiz.details.link.includes(filterName);
    }
    return quiz;
  });

  return (
    <section className="all">
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={allQuizzes}>
          <Menu />
          <div className="all-container container">
            {displayQuizzes.length ? (
              displayQuizzes.map((quiz) => {
                return <QuizCard key={quiz.details.title} {...quiz.details} />;
              })
            ) : (
              <NoQuizzes />
            )}
          </div>
        </Await>
      </Suspense>
    </section>
  );
};
export default AllQuizzes;
