import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import ComingSoon from './views/comingsoon';
import Projects from './views/projects';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sponsors" element={<ComingSoon />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
