import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';
import { ProgressBar } from './components/ScrollAnimations';
import { CustomCursor } from './components/LogoEffects';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <BrowserRouter>
        <ProgressBar />
        <Header />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </div>
  );
}

export default App;