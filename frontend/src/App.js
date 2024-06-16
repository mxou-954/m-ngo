import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PreHome from './pages/preHome.faces/preHome';
import Home from './pages/Home/home.js';
import Navbar from './components/navbar.js';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<PreHome />} />
            <Route path="/:lang/home" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;