import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import AllQuizzes from './pages/AllQuizzes/AllQuizzes';
import Quiz from './pages/Quiz/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="all-quizzes" element={<AllQuizzes />} />
        </Route>
        <Route path="/quiz/:id">
          <Route index element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
