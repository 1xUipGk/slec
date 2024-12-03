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
import { HelmetProvider, Helmet } from 'react-helmet-async';

function AppContent() {
  const location = useLocation();
  const { language } = useLanguage();
  const isLinksPage = location.pathname === '/links' || location.pathname === '/en/links';
  const isAdminPage = location.pathname === '/studio' || location.pathname === '/en/studio';
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
      '/about': {
        ar: {
          title: 'من نحن - سن لايت للمقاولات الكهربائية',
          description: `تعرف على شركة سن لايت للمقاولات الكهربائية - ${experienceYears} عاماً من الخبرة والتميز في مجال المقاولات الكهربائية في البحرين.`,
          ogDescription: `سن لايت للمقاولات الكهربائية - ${experienceYears} عاماً من الخبرة. رؤيتنا أن نكون الشركة الرائدة في البحرين.`
        },
        en: {
          title: 'About Us - Sunlight Electrical Contracting',
          description: `About Sunlight Electrical Contracting - ${experienceYears} years of excellence in electrical contracting in Bahrain.`,
          ogDescription: 'Sunlight Electrical Contracting - Leading electrical contracting company in Bahrain.'
        }
      },
      '/links': {
        ar: {
          title: 'تواصل معنا - سن لايت للمقاولات الكهربائية',
          description: 'تواصل مع سن لايت للمقاولات الكهربائية - هاتف: 17241477 973+، واتساب، بريد إلكتروني، أو زيارة مكتبنا في امنامة.',
          ogDescription: 'احصل على خدمات كهربائية احترافية ومعتمدة - تواصل معنا الآن'
        },
        en: {
          title: 'Contact Us - Sunlight Electrical Contracting',
          description: 'Contact Sunlight Electrical Contracting - Phone: +973 17241477, WhatsApp, Email, or visit our office.',
          ogDescription: 'Get professional electrical services - Contact us now'
        }
      },
      '/brand': {
        ar: {
          title: 'الهوية المؤسسية - سن لايت للمقاولات الكهربائية',
          description: 'الهوية المؤسسية لشركة سن لايت للمقاولات الكهربائية - تحميل شعار الشركة بمختلف الصيغ والأحجام.',
          ogDescription: 'شعار وهوية سن لايت للمقاولات الكهربائية - متوفر بصيغ متعددة للاستخدام'
        },
        en: {
          title: 'Brand Assets - Sunlight Electrical Contracting',
          description: 'Sunlight Electrical Contracting brand identity - Download our logo in various formats and sizes.',
          ogDescription: 'Sunlight Electrical Contracting brand assets - Logo available in multiple formats'
        }
      },
      '/studio': {
        ar: {
          title: 'استوديو التصميم - سن لايت للمقاولات الكهربائية',
          description: 'استوديو تصميم المنشورات لشركة سن لايت للمقاولات الكهربائية.',
          ogDescription: 'استوديو تصميم المنشورات - سن لايت للمقاولات الكهربائية'
        },
        en: {
          title: 'Design Studio - Sunlight Electrical Contracting',
          description: 'Sunlight Electrical Contracting design studio for social media posts.',
          ogDescription: 'Design Studio - Sunlight Electrical Contracting'
        }
      },
      '/404': {
        ar: {
          title: '404 - الصفحة غير موجودة',
          description: 'عذراً، الصفحة التي تبحث عنها غير موجودة.',
          ogDescription: 'عذراً، الصفحة التي تبحث عنها غير موجودة.'
        },
        en: {
          title: '404 - Page Not Found',
          description: 'Sorry, the page you are looking for does not exist.',
          ogDescription: 'Sorry, the page you are looking for does not exist.'
        }
      }
    };

    return metaContent[path]?.[isEnglish ? 'en' : 'ar'] || metaContent['/'][isEnglish ? 'en' : 'ar'];
  };

  const meta = getMetaContent();
  const currentUrl = `https://sunlightec.xyz${location.pathname}`;
  const alternateUrl = isEnglish 
    ? currentUrl.replace('/en', '') 
    : `https://sunlightec.xyz/en${location.pathname}`;

  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang={isEnglish ? 'en' : 'ar'} dir={isEnglish ? 'ltr' : 'rtl'} />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sunlightec.xyz/share-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content={isEnglish ? 'en_US' : 'ar_BH'} />
        <meta property="og:locale:alternate" content={isEnglish ? 'ar_BH' : 'en_US'} />
        
        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.ogDescription} />
        <meta name="twitter:image" content="https://sunlightec.xyz/share-image.png" />
        
        {/* Language Alternates */}
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={currentUrl} hreflang={isEnglish ? 'en' : 'ar'} />
        <link rel="alternate" href={alternateUrl} hreflang={isEnglish ? 'ar' : 'en'} />
        <link rel="alternate" href="https://sunlightec.xyz" hreflang="x-default" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#16234b" />
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
      <HelmetProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App; 