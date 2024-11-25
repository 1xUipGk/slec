import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaHome } from 'react-icons/fa';

function NotFound() {
  const { language } = useLanguage();
  
  const content = {
    ar: {
      title: "404 - الصفحة غير موجودة",
      message: "عذراً، الصفحة التي تبحث عنها غير موجودة",
      button: "العودة للرئيسية"
    },
    en: {
      title: "404 - Page Not Found",
      message: "Sorry, the page you are looking for does not exist",
      button: "Back to Home"
    }
  };

  const t = content[language];

  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <h1>{t.title}</h1>
        <p>{t.message}</p>
        <Link to="/" className="home-button">
          <FaHome />
          <span>{t.button}</span>
        </Link>
      </div>
    </main>
  );
}

export default NotFound; 