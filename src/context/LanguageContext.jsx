import { createContext, useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // تحديد اللغة من المسار
  const getLanguageFromPath = () => {
    return location.pathname.startsWith('/en') ? 'en' : 'ar';
  };

  const [language, setLanguage] = useState(() => {
    // استخدام اللغة المخزنة أو اللغة من المسار
    const savedLang = localStorage.getItem('language');
    const pathLang = getLanguageFromPath();
    return savedLang || pathLang;
  });

  // تحديث المسار عند تغيير اللغة
  const handleLanguageChange = (newLang) => {
    const currentPath = location.pathname;
    let newPath;

    if (newLang === 'en') {
      // التحويل للإنجليزية
      if (currentPath === '/') {
        newPath = '/en';
      } else {
        newPath = currentPath.startsWith('/en') 
          ? currentPath 
          : `/en${currentPath}`;
      }
    } else {
      // التحويل للعربية
      newPath = currentPath.replace('/en', '');
    }

    navigate(newPath);
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  // التأكد من تطابق المسار مع اللغة المحددة
  useEffect(() => {
    const currentPath = location.pathname;
    const isEnglishPath = currentPath.startsWith('/en');
    const shouldBeEnglish = language === 'en';

    // تصحيح المسار إذا كان غير متطابق مع اللغة
    if (shouldBeEnglish && !isEnglishPath) {
      navigate(currentPath === '/' ? '/en' : `/en${currentPath}`);
    } else if (!shouldBeEnglish && isEnglishPath) {
      navigate(currentPath.replace('/en', ''));
    }
  }, [location.pathname, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext); 