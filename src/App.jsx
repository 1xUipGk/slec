import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BrandAssets from './pages/BrandAssets';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import Links from './pages/Links';
import Admin from './pages/Admin';

function AppContent() {
  const location = useLocation();
  const isLinksPage = location.pathname === '/links';
  const isAdminPage = location.pathname === '/studio';

  useEffect(() => {
    const updateMetaTags = () => {
      const isEnglish = location.pathname.startsWith('/en');
      
      // تحديث Open Graph tags
      document.querySelector('meta[property="og:title"]').setAttribute(
        'content',
        isEnglish ? 'Sunlight Electrical Contracting' : 'سن لايت للمقاولات الكهربائية'
      );
      
      document.querySelector('meta[property="og:description"]').setAttribute(
        'content',
        isEnglish 
          ? 'Professional electrical contracting services in Bahrain since 1994. Specializing in residential, commercial, and industrial electrical installations.'
          : 'شركة سن لايت للمقاولات الكهربائية، تأسست عام 1994. متخصصون في التركيبات الكهربائية السكنية والتجارية والصناعية وأنظمة إنذار الحريق.'
      );

      // تحديث Twitter tags
      document.querySelector('meta[property="twitter:title"]').setAttribute(
        'content',
        isEnglish ? 'Sunlight Electrical Contracting' : 'سن لايت للمقاولات الكهربائية'
      );
      
      document.querySelector('meta[property="twitter:description"]').setAttribute(
        'content',
        isEnglish 
          ? 'Professional electrical contracting services in Bahrain since 1994. Specializing in residential, commercial, and industrial electrical installations.'
          : 'شركة سن لايت للمقاولات الكهربائية، تأسست عام 1994. متخصصون في التركيبات الكهربائية السكنية والتجارية والصناعية وأنظمة إنذار الحريق.'
      );

      // تحديث URL حسب اللغة
      const baseUrl = 'https://sunlightec.xyz';
      const currentUrl = isEnglish ? `${baseUrl}/en` : baseUrl;
      
      document.querySelector('meta[property="og:url"]').setAttribute('content', currentUrl);
      document.querySelector('meta[property="twitter:url"]').setAttribute('content', currentUrl);
    };

    updateMetaTags();
  }, [location.pathname]); // تحديث عند تغيير المسار

  return (
    <div className="app">
      {!isLinksPage && !isAdminPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand" element={<BrandAssets />} />
        <Route path="/links" element={<Links />} />
        <Route path="/studio" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isLinksPage && !isAdminPage && <Footer />}
      {!isLinksPage && !isAdminPage && <CookieConsent />}
      {!isLinksPage && !isAdminPage && <ScrollToTop />}
      {typeof window !== 'undefined' && <Analytics />}
    </div>
  );
}

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
        <AppContent />
      </LanguageProvider>
    </Router>
  );
}

export default App; 