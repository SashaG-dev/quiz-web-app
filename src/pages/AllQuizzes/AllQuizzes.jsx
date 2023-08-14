import { useSearchParams } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';
import Menu from './Menu/Menu';
import QuizCard from './QuizCard/QuizCard';
import './all-quizzes.scss';

const AllQuizzes = () => {
  const { allQuizzes } = useGlobalContext();
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
      <Menu />
      <div className="all-container container">
        {displayQuizzes.map((quiz) => {
          return <QuizCard key={quiz.details.title} {...quiz.details} />;
        })}
      </div>
    </section>
  );
};
export default AllQuizzes;
