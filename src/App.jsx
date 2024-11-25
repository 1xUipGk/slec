import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BrandAssets from './pages/BrandAssets';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';

// استيراد Analytics بشكل شرطي
const Analytics = process.env.NODE_ENV === 'production' 
  ? require('@vercel/analytics/react').Analytics 
  : () => null;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <LanguageProvider>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/brand" element={<BrandAssets />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App; 