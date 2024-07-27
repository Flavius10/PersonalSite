import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PortofolioPage from './Pages/PortofolioPage.js';
import ContactPage from './Pages/ContactPage.js';
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
            <Route path="/portofolio" element={<PortofolioPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        
        <Footer/>
    </Router>

  );
}

export default App;