
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Programs from './pages/Programs';
import About from './pages/About';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <BrowserRouter basename="/academy-prototype">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="programs" element={<Programs />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
