import { useSearchParams, useLoaderData, Await } from 'react-router-dom';
import Menu from './Menu/Menu';
import QuizCard from './QuizCard/QuizCard';
import NoQuizzes from './NoQuizzes/NoQuizzes';
import './all-quizzes.scss';

const AllQuizzes = () => {
  const { allQuizzes } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterType = searchParams.get('type');
  const filterDifficulty = searchParams.get('difficulty');
  const filterName = searchParams.get('title');

  return (
    <main className="all">
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
    </main>
  );
};
export default AllQuizzes;
