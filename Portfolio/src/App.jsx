import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Toggle from '/src/components/Toggle.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Achivements from './components/Achivements.jsx';
import Contact from './components/Contact.jsx';

function App() {
    
  return (
  <>
    <Navbar />
    <Toggle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" className="cta-button" element={<Projects />}>View My Work</Route>
      <Route path="/resume" className="cta-button" element={<Resume />}></Route>
      <Route path="/achievements" className="cta-button" element={<Achivements />}></Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </>
  
  )

};

export default App;
