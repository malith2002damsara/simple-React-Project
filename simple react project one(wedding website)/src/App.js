import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import ContactForm from './components/pages/ContactForm';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;  });

    useEffect(() => {
      document.body.classList.toggle('dark-mode', isDarkMode);
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);
  
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };

  return (
    <>
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
