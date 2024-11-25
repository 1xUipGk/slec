import { createContext, useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // تحقق من وجود معلمة اللغة في الرابط
  const getLanguageFromURL = () => {
    const params = new URLSearchParams(location.search);
    const urlLang = params.get('hl');
    if (urlLang === 'ar' || urlLang === 'en') {
      return urlLang;
    }
    return localStorage.getItem('language') || 'ar';
  };

  const [language, setLanguage] = useState(getLanguageFromURL);

  // تحديث الرابط عند تغيير اللغة
  const handleLanguageChange = (newLang) => {
    const params = new URLSearchParams(location.search);
    params.set('hl', newLang);
    navigate({ search: params.toString() });
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  // الاستماع لتغييرات الرابط
  useEffect(() => {
    const urlLang = getLanguageFromURL();
    if (urlLang !== language) {
      setLanguage(urlLang);
      localStorage.setItem('language', urlLang);
    }
  }, [location.search]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext); 