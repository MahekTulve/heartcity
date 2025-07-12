import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import EMI from '../pages/EMICalculator'
// Add other real pages later

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<Home />} />
      <Route path="/Amenities" element={<Home />} />
      <Route path="/Features" element={<Home />} />
      <Route path="/Layout" element={<Home />} />
      <Route path="/Contact" element={<Home />} />
      <Route path="/EMI Calculator" element={<EMI />} />
    </Routes>
  );
};

export default AppRoutes;
