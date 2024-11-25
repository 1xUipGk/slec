import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import Logo from './Logo';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.title = language === 'ar' 
      ? 'سن لايت للمقاولات الكهربائية'
      : 'Sunlight Electrical Contracting';
  }, [language]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={handleNavClick}>
                {t.home}
              </Link>
            </li>
            <li>
              <a href="/#services" onClick={handleNavClick}>
                {t.services}
              </a>
            </li>
            <li>
              <a href="/#contact" onClick={handleNavClick}>
                {t.contact}
              </a>
            </li>
            <li>
              <a href="/#location" onClick={handleNavClick}>
                {t.office}
              </a>
            </li>
            <li>
              <Link to="/about" onClick={handleNavClick}>
                {t.about.nav}
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          className="language-toggle" 
          onClick={toggleLanguage}
          aria-label="تغيير اللغة"
        >
          <FaGlobe className="globe-icon" />
          <span>{t.language}</span>
        </button>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="القائمة">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Header; 