import { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import MainLayout from '../src/layout/MainLayout'
import AppRoutes from './routes/AppRoutes';

function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToAnchor />
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}
export default App;
