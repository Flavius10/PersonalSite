import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProjectsPage from './Pages/ProjectsPage';
import SkillsPage from './Pages/SkillsPage';
import AboutPage from './Pages/AboutMePage';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer.js';

const App = () => {
  return (
    
    <Router>
        <NavBar/> 
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/project" element={<ProjectsPage/>} />
            <Route path="/skills" element={<SkillsPage/>} />
        </Routes>
        <Footer/>
    </Router>

  );
}

export default App;