import { Suspense } from 'react';
import { useSearchParams, defer, useLoaderData, Await } from 'react-router-dom';
import Menu from './Menu/Menu';
import QuizCard from './QuizCard/QuizCard';
import NoQuizzes from './NoQuizzes/NoQuizzes';
import { getAllQuizzes } from '../../api/api';
import Loading from '../../components/Loading/Loading';
import './all-quizzes.scss';

export const loader = async () => {
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

const AllQuizzes = () => {
  const { allQuizzes } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterType = searchParams.get('type');
  const filterDifficulty = searchParams.get('difficulty');
  const filterName = searchParams.get('title');

  return (
    <main className="all">
      <Suspense fallback={<Loading />}>
        <Await resolve={allQuizzes}>
          {(allQuizzes) => {
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
              <>
                <Menu />
                <section
                  className="all-container container"
                  aria-label="all quizzes"
                >
                  {displayQuizzes.length ? (
                    displayQuizzes.map((quiz) => {
                      return (
                        <QuizCard key={quiz.details.title} {...quiz.details} />
                      );
                    })
                  ) : (
                    <NoQuizzes />
                  )}
                </section>
              </>
            );
          }}
        </Await>
      </Suspense>
    </main>
  );
};
export default AllQuizzes;
