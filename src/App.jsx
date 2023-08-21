import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import AllQuizzes, {
  loader as allQuizzesLoader,
} from './pages/AllQuizzes/AllQuizzes';
import QuizLayout, {
  loader as quizLayoutLoader,
} from './pages/Quiz/QuizLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="all-quizzes"
          element={<AllQuizzes />}
          loader={allQuizzesLoader}
        />
      </Route>
      <Route path="/quiz">
        <Route index element={<h1>Placeholder</h1>} />
        <Route path=":id" element={<QuizLayout />} loader={quizLayoutLoader} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
