import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // ← This can show your news list
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import BlogPost from './pages/BlogPost';
import Admin from './pages/Admin'; // ← NEW: Admin page
// Optional: If you want a dedicated /news page, uncomment below
// import NewsList from './pages/NewsList';

import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home shows news */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/post/:id" element={<BlogPost />} />
          {/* Admin route — protected by login in the component itself */}
          <Route path="/admin" element={<Admin />} />
          {/* Optional: dedicated news page */}
          {/* <Route path="/news" element={<NewsList />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;