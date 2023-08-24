import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import AllQuizzes, {
  loader as quizzesLoader,
} from './pages/AllQuizzes/AllQuizzes';
import Challenges, {
  loader as challengesLoader,
} from './pages/Challenges/Challenges';
import QuizLayout, { loader as quizLoader } from './pages/Quiz/QuizLayout';
import StudyLayout, { loader as studyLoader } from './pages/Study/StudyLayout';
import NotFound from './components/NotFound/NotFound';

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
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="quiz">
        <Route index element={<h1>Placeholder</h1>} />
        <Route path=":id" element={<QuizLayout />} loader={quizLoader} />
      </Route>
      <Route path="study">
        <Route index element={<h1>Placeholder</h1>} />
        <Route path=":id" element={<StudyLayout />} loader={studyLoader} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
