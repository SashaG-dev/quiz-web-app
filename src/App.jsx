import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import AllQuizzes from './pages/AllQuizzes/AllQuizzes';
import QuizLayout from './pages/Quiz/QuizLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="all-quizzes" element={<AllQuizzes />} />
        </Route>
        <Route path="/quiz">
          <Route index element={<h1>Placeholder</h1>} />
          <Route path=":id" element={<QuizLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
