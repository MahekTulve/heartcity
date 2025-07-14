import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  const location = useLocation();

  const noFooterRoutes = ['/emi-calculator'];

  const shouldShowFooter = !noFooterRoutes.includes(location.pathname);

  return (
    <>
      <Header />
      <main>{children}</main>
      {shouldShowFooter && (
        <div id="Contact-section">
          <Footer />
        </div>
      )}
    </>
  );
};

export default MainLayout;
