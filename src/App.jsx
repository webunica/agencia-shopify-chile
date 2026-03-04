import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Funnel from './pages/Funnel';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cotizar" element={<Funnel />} />
      </Routes>
    </Router>
  );
}

export default App;
