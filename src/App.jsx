import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
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
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
          title: 'سن لايت للمقاولات الكهربائية ',
          description: `شركة سن لايت للمقاولات الكهربائية، تأسست عام 1994 في البحرين. خبرة ${experienceYears} عاماً في التركيبات الكهربائية للمشاريع السكنية والتجارية والصناعية.`,
          ogTitle: 'سن لايت للمقاولات الكهربائية | منذ 1994',
          ogDescription: `شركة سن لايت للمقاولات الكهربائية، خبرة ${experienceYears} عاماً في التركيبات الكهربائية والصيانة في البحرين. نقدم خدمات احترافية ومعتمدة.`,
          ogImage: 'https://sunlightec.xyz/share/home.png',
          keywords: 'مقاولات كهربائية البحرين, تركيبات كهربائية, صيانة كهربائية, مقاول كهرباء معتمد'
        },
        en: {
          title: 'Sunlight Electrical Contracting',
          description: `Sunlight Electrical Contracting, established in 1994 in Bahrain with ${experienceYears} years of excellence. Professional electrical installation services.`,
          ogTitle: 'Sunlight Electrical Contracting | Since 1994',
          ogDescription: `Professional electrical contracting services in Bahrain since 1994. ${experienceYears} years of expertise in residential, commercial and industrial projects.`,
          ogImage: 'https://sunlightec.xyz/share/home.png',
          keywords: 'electrical contractor bahrain, electrical services, maintenance, certified electrician'
        }
      },
      '/about': {
        ar: {
          title: 'من نحن - سن لايت',
          description: `تعرف على شركة سن لايت للمقاولات الكهربائية - ${experienceYears} عاماً من الخبرة والتميز في مجال المقاولات الكهربائية في البحرين.`,
          ogDescription: `سن لايت للمقاولات الكهربائية - ${experienceYears} عاماً من الخبرة. رؤيتنا أن نكون الشركة الرائدة في البحرين.`
        },
        en: {
          title: 'About Us - Sunlight',
          description: `About Sunlight Electrical Contracting - ${experienceYears} years of excellence in electrical contracting in Bahrain.`,
          ogDescription: 'Sunlight Electrical Contracting - Leading electrical contracting company in Bahrain.'
        }
      },
      '/links': {
        ar: {
          title: 'تواصل معنا - سن لايت',
          description: 'تواصل مع سن لايت للمقاولات الكهربائية - هاتف: 17241477 973+، واتساب، بريد إلكتروني، أو زيارة مكتبنا في امنامة.',
          ogDescription: 'احصل على خدمات كهربائية احترافية ومعتمدة - تواصل معنا الآن'
        },
        en: {
          title: 'Contact Us - Sunlight',
          description: 'Contact Sunlight Electrical Contracting - Phone: +973 17241477, WhatsApp, Email, or visit our office.',
          ogDescription: 'Get professional electrical services - Contact us now'
        }
      },
      '/brand': {
        ar: {
          title: 'الهوية المؤسسية - سن لايت',
          description: 'الهوية المؤسسية لشركة سن لايت للمقاولات الكهربائية - تحميل شعار الشركة بمختلف الصيغ والأحجام.',
          ogDescription: 'شعار وهوية سن لايت للمقاولات الكهربائية - متوفر بصيغ متعددة للاستخدام'
        },
        en: {
          title: 'Brand Assets - Sunlight',
          description: 'Sunlight Electrical Contracting brand identity - Download our logo in various formats and sizes.',
          ogDescription: 'Sunlight Electrical Contracting brand assets - Logo available in multiple formats'
        }
      },
      '/studio': {
        ar: {
          title: 'استوديو التصميم - سن لايت',
          description: 'استوديو تصميم المنشورات لشركة سن لايت للمقاولات الكهربائية.',
          ogDescription: 'استوديو تصميم المنشورات - سن لايت'
        },
        en: {
          title: 'Design Studio - Sunlight',
          description: 'Sunlight Electrical Contracting design studio for social media posts.',
          ogDescription: 'Design Studio - Sunlight'
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
      <Helmet>
        {/* Primary Meta Tags */}
        <html lang={isEnglish ? 'en' : 'ar'} dir={isEnglish ? 'ltr' : 'rtl'} />
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:site_name" content={isEnglish ? 'Sunlight Electrical' : 'سن لايت للمقاولات الكهربائية'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={meta.ogTitle || meta.title} />
        <meta property="og:description" content={meta.ogDescription || meta.description} />
        <meta property="og:image" content="https://sunlightec.xyz/share-image.png" />
        <meta property="og:image:secure_url" content="https://sunlightec.xyz/share-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content={meta.title} />
        <meta property="og:locale" content={isEnglish ? 'en_US' : 'ar_BH'} />
        <meta property="og:locale:alternate" content={isEnglish ? 'ar_BH' : 'en_US'} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sunlightec" />
        <meta name="twitter:creator" content="@sunlightec" />
        <meta name="twitter:domain" content="sunlightec.xyz" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={meta.ogTitle || meta.title} />
        <meta name="twitter:description" content={meta.ogDescription || meta.description} />
        <meta name="twitter:image" content="https://sunlightec.xyz/share-image.png" />
        <meta name="twitter:image:alt" content={meta.title} />
        
        {/* Language Alternates */}
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={currentUrl} hreflang={isEnglish ? 'en' : 'ar'} />
        <link rel="alternate" href={alternateUrl} hreflang={isEnglish ? 'ar' : 'en'} />
        <link rel="alternate" href="https://sunlightec.xyz" hreflang="x-default" />
        
        {/* Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#16234b" />
        <link rel="manifest" href="/manifest.json" />
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
    <HelmetProvider>
      <Router>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App; 