import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import AllQuizzes from './pages/AllQuizzes/AllQuizzes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="all-quizzes" element={<AllQuizzes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
