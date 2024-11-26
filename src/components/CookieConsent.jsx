import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaCookieBite } from 'react-icons/fa';

const CookieConsent = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  const content = {
    ar: {
      message: "نحن نستخدم ملفات تعريف الارتباط (الكوكيز) لتحسين تجربتك على موقعنا",
      accept: "موافق",
      decline: "رفض",
      learnMore: "معرفة المزيد"
    },
    en: {
      message: "We use cookies to enhance your experience on our website",
      accept: "Accept",
      decline: "Decline",
      learnMore: "Learn More"
    }
  };

  const t = content[language];

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible || localStorage.getItem('cookieConsent')) {
    return null;
  }

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <FaCookieBite className="cookie-icon" />
        <p>{t.message}</p>
      </div>
      <div className="cookie-buttons">
        <button onClick={handleAccept} className="accept-button">
          {t.accept}
        </button>
        <button onClick={handleDecline} className="decline-button">
          {t.decline}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent; 