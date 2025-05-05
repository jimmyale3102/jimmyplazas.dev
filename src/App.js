import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './sections/app/Header';
import Home from './pages/home/Home';
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
        style={{maxWidth: '800px'}}
        className={`theme-transition ${isFadingIn ? 'fade-in' : ''}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        
      </Container>
    </Router>
  );
}

export default App;
