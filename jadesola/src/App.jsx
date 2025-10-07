import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Pages/navBar';
import Home from './Pages/home';
import About from './Pages/about';
import Footer from './Pages/footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
