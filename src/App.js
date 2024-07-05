import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './sections/app/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';
import './App.css';
import { Container } from '@mui/material';
import Footer from './sections/app/Footer';

function App() {

  const [isFadingIn, setIsFadingIn] = useState(false);

  useEffect(() => {
    setIsFadingIn(true);
  }, []);

  return (
    <Router>
      <Header />
      <Container
        style={{maxWidth: '780px'}}
        className={`theme-transition ${isFadingIn ? 'fade-in' : ''}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        
      </Container>
    </Router>
  );
}

export default App;
