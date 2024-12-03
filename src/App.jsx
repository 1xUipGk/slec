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
import { Helmet } from 'react-helmet';

function AppContent() {
  const location = useLocation();
  const { language } = useLanguage();
  const isEnglish = location.pathname.startsWith('/en');

  // حساب سنوات الخبرة
  const experienceYears = new Date().getFullYear() - 1994;

  // تحديد محتوى meta tags حسب المسار
  const getMetaContent = () => {
    const path = location.pathname.replace('/en', '');
    
    const metaContent = {
      '/': {
        ar: {
          title: 'سن لايت للمقاولات الكهربائية',
          description: `شركة سن لايت للمقاولات الكهربائية، تأسست عام 1994 في البحرين. خبرة ${experienceYears} عاماً في التركيبات الكهربائية للمشاريع السكنية والتجارية والصناعية.`,
          ogDescription: `شركة سن لايت للمقاولات الكهربائية، خبرة ${experienceYears} عاماً في التركيبات الكهربائية والصيانة في البحرين. نقدم خدمات احترافية ومعتمدة.`
        },
        en: {
          title: 'Sunlight Electrical Contracting',
          description: `Sunlight Electrical Contracting, established in 1994 in Bahrain with ${experienceYears} years of excellence. Professional electrical installation services.`,
          ogDescription: `Sunlight Electrical Contracting - ${experienceYears} years of expertise in electrical contracting and maintenance in Bahrain.`
        }
      },
      '/links': {
        ar: {
          title: 'تواصل معنا - سن لايت للمقاولات الكهربائية',
          description: 'تواصل مع سن لايت للمقاولات الكهربائية - هاتف: 17241477 973+، واتساب، بريد إلكتروني، أو زيارة مكتبنا في المنامة.',
          ogDescription: 'احصل على خدمات كهربائية احترافية ومعتمدة - تواصل معنا الآن'
        },
        en: {
          title: 'Contact Us - Sunlight Electrical Contracting',
          description: 'Contact Sunlight Electrical Contracting - Phone: +973 17241477, WhatsApp, Email, or visit our office.',
          ogDescription: 'Get professional electrical services - Contact us now'
        }
      }
      // ... يمكن إضافة المزيد من المسارات
    };

    return metaContent[path]?.[isEnglish ? 'en' : 'ar'] || metaContent['/'][isEnglish ? 'en' : 'ar'];
  };

  const meta = getMetaContent();

  return (
    <>
      <Helmet>
        <html lang={isEnglish ? 'en' : 'ar'} dir={isEnglish ? 'ltr' : 'rtl'} />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content={`https://sunlightec.xyz${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sunlightec.xyz/share-image.png" />
        <meta property="og:locale" content={isEnglish ? 'en' : 'ar'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.ogDescription} />
        <meta name="twitter:image" content="https://sunlightec.xyz/share-image.png" />
      </Helmet>
      
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
    </>
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