import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('../pages/Home'));
const EMI = lazy(() => import('../pages/EMICalculator'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>}>
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<Home />} />
      <Route path="/Amenities" element={<Home />} />
      <Route path="/Features" element={<Home />} />
      <Route path="/Layout" element={<Home />} />
      <Route path="/emi-calculator" element={<EMI />} />
      <Route path="/Contact" element={<Home />} />
      
    </Routes>
    </Suspense>
    
  );
};

export default AppRoutes;
