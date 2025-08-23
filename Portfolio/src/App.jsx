import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Resume from './Resume.jsx';
import Achivements from './Achivements.jsx';
import Contact from './Contact.jsx';

function App() {

  return (
    <>
    <Navbar />
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
