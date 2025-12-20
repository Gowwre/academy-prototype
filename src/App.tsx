
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import Booking from './pages/Booking';
import About from './pages/About';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import LearningCenter from './pages/LearningCenter';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <BrowserRouter basename="/academy-prototype">
      <Routes>
        <Route path="/booking" element={<Booking />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="programs" element={<Programs />} />
          <Route path="programs/:slug" element={<ProgramDetail />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostDetail />} />
          <Route path="learning" element={<LearningCenter />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
