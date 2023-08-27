import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
const AllQuizzes = lazy(() => import('./pages/AllQuizzes/AllQuizzes'));
const QuizLayout = lazy(() => import('./pages/Quiz/QuizLayout'));
const StudyLayout = lazy(() => import('./pages/Study/StudyLayout'));
const Challenges = lazy(() => import('./pages/Challenges/Challenges'));
const Challenge = lazy(() => import('./pages/Challenge/Challenge'));
import quizzesLoader from './pages/AllQuizzes/quizzesLoader';
import quizLoader from './pages/Quiz/quizLoader';
import challengesLoader from './pages/Challenges/challengesLoader';
import challengeLoader from './pages/Challenge/challengeLoader';
import NotFound from './components/NotFound/NotFound';
import Loading from './components/Loading/Loading';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="all-quizzes"
          element={<AllQuizzes />}
          loader={quizzesLoader}
          errorElement={<NotFound />}
        />
        <Route
          path="challenges"
          element={<Challenges />}
          loader={challengesLoader}
          errorElement={<NotFound />}
        />
        <Route
          path="challenges/:id"
          element={<Challenge />}
          loader={challengeLoader}
          errorElement={<NotFound />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="quiz" errorElement={<NotFound />}>
        <Route index element={<h1>Placeholder</h1>} />
        <Route path=":id" element={<QuizLayout />} loader={quizLoader} />
      </Route>
      <Route path="study" errorElement={<NotFound />}>
        <Route index element={<h1>Placeholder</h1>} />
        <Route path=":id" element={<StudyLayout />} loader={quizLoader} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
