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
import Redirect from './pages/Redirect';
import ScrollToHash from './components/ScrollToHash';

function AppContent() {
  const location = useLocation();
  const isLinksPage = location.pathname === '/links' || location.pathname === '/en/links';
  const isAdminPage = location.pathname === '/studio' || location.pathname === '/en/studio';
  const isEnglish = location.pathname.startsWith('/en');

  useEffect(() => {
    // تحديث meta tags حسب اللغة
    const updateMetaTags = () => {
      try {
        // تحديث العنوان
        document.title = isEnglish 
          ? 'Sunlight Electrical Contracting'
          : 'سن لايت للمقاولات الكهربائية';

        // تحديث الوصف
        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
          descriptionTag.setAttribute(
            'content',
            isEnglish 
              ? 'Professional electrical contracting services in Bahrain since 1994. Specializing in residential, commercial, and industrial electrical installations.'
              : 'شركة سن لايت للمقاولات الكهربائية، تأسست عام 1994. متخصصون في التركيبات الكهربائية السكنية والتجارية والصناعية.'
          );
        }

        // تحديث Open Graph tags
        const ogTitleTag = document.querySelector('meta[property="og:title"]');
        const ogDescTag = document.querySelector('meta[property="og:description"]');
        const ogLocaleTag = document.querySelector('meta[property="og:locale"]');
        const ogUrlTag = document.querySelector('meta[property="og:url"]');

        if (ogTitleTag) {
          ogTitleTag.setAttribute(
            'content',
            isEnglish ? 'Sunlight Electrical Contracting' : 'سن لايت للمقاولات الكهربائية'
          );
        }
        
        if (ogDescTag) {
          ogDescTag.setAttribute(
            'content',
            isEnglish 
              ? 'Professional electrical contracting services in Bahrain since 1994'
              : 'شركة سن لايت للمقاولات الكهربائية، تأسست عام 1994'
          );
        }

        if (ogLocaleTag) {
          ogLocaleTag.setAttribute('content', isEnglish ? 'en' : 'ar');
        }

        if (ogUrlTag) {
          ogUrlTag.setAttribute(
            'content', 
            isEnglish ? 'https://sunlightec.xyz/en' : 'https://sunlightec.xyz'
          );
        }

        // تحديث Twitter tags
        const twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
        const twitterDescTag = document.querySelector('meta[name="twitter:description"]');

        if (twitterTitleTag) {
          twitterTitleTag.setAttribute(
            'content',
            isEnglish ? 'Sunlight Electrical Contracting' : 'سن لايت للمقاولات الكهربائية'
          );
        }
        
        if (twitterDescTag) {
          twitterDescTag.setAttribute(
            'content',
            isEnglish 
              ? 'Professional electrical contracting services in Bahrain since 1994'
              : 'شركة سن لايت للمقاولات الكهربائية، تأسست عام 1994'
          );
        }

        // تحديث Schema.org
        const schemaScript = document.querySelector('script[type="application/ld+json"]');
        if (schemaScript) {
          const schema = {
            "@context": "https://schema.org",
            "@type": "ElectricalContractor",
            "name": isEnglish ? "Sunlight Electrical Contracting" : "سن لايت للمقاولات الكهربائية",
            "description": isEnglish 
              ? "Professional electrical contracting services in Bahrain since 1994"
              : "شركة سن لايت للمقاولات الكهربائية، تأسست عام 1994",
            "url": isEnglish ? "https://sunlightec.xyz/en" : "https://sunlightec.xyz",
            "image": "https://sunlightec.xyz/android-chrome-512x512.png",
            "telephone": "+97317241477",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Building 1234, Road 123",
              "addressLocality": "Manama",
              "addressRegion": "Capital Governorate",
              "addressCountry": "BH"
            },
            "inLanguage": isEnglish ? "en" : "ar"
          };
          schemaScript.textContent = JSON.stringify(schema);
        }
      } catch (error) {
        console.error('Error updating meta tags:', error);
      }
    };

    // تأخير التحديث للتأكد من تحميل الصفحة
    const timer = setTimeout(updateMetaTags, 0);
    return () => clearTimeout(timer);
  }, [location.pathname, isEnglish]);

  return (
    <div className="app">
      <ScrollToHash />
      {!isLinksPage && !isAdminPage && <Header />}
      <Routes>
        {/* Arabic Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand" element={<BrandAssets />} />
        <Route path="/links" element={<Links />} />
        <Route path="/studio" element={<Admin />} />
        <Route path="/redirect" element={<Redirect />} />

        {/* English Routes */}
        <Route path="/en" element={<Home />} />
        <Route path="/en/about" element={<About />} />
        <Route path="/en/brand" element={<BrandAssets />} />
        <Route path="/en/links" element={<Links />} />
        <Route path="/en/studio" element={<Admin />} />

        {/* 404 Page */}
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