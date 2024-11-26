import { useLanguage } from '../context/LanguageContext';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaGlobe } from 'react-icons/fa';
import Logo from '../components/Logo';

function Links() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: language === 'ar' ? 'الموقع الإلكتروني' : 'Website',
      icon: <FaGlobe />,
      url: 'https://sunlightec.xyz',
      color: '#16234b'
    },
    {
      title: language === 'ar' ? 'اتصل بنا' : 'Call Us',
      icon: <FaPhone />,
      url: 'tel:+97317241477',
      color: '#25D366'
    },
    {
      title: language === 'ar' ? 'واتساب' : 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://wa.me/97317241477',
      color: '#25D366'
    },
    {
      title: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:sunlightec@gmail.com',
      color: '#EA4335'
    },
    {
      title: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/sunlight.bh/',
      color: '#E4405F'
    },
    {
      title: language === 'ar' ? 'موقعنا' : 'Location',
      icon: <FaMapMarkerAlt />,
      url: 'https://maps.app.goo.gl/dK6BmKQGK8KvYt8B9',
      color: '#4285F4'
    }
  ];

  return (
    <div className={`links-page ${language === 'en' ? 'english' : ''}`}>
      <div className="links-header">
        <Logo />
        <h1>{language === 'ar' ? 'سن لايت للمقاولات الكهربائية' : 'Sunlight Electrical Contracting'}</h1>
        <p>
          {language === 'ar' 
            ? 'منذ عام 1994م نقدم خدمات كهربائية متميزة' 
            : 'Providing excellent electrical services since 1994'}
        </p>
      </div>

      <div className="links-container">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="link-card"
            target="_blank"
            rel="noopener noreferrer"
            style={{ '--hover-color': link.color }}
          >
            {language === 'en' ? (
              <>
                <span className="link-title">{link.title}</span>
                <span className="link-icon">{link.icon}</span>
              </>
            ) : (
              <>
                <span className="link-icon">{link.icon}</span>
                <span className="link-title">{link.title}</span>
              </>
            )}
          </a>
        ))}
      </div>

      <div className="links-footer">
        <p>
          {language === 'ar' 
            ? `جميع الحقوق محفوظة © ${currentYear}` 
            : `All Rights Reserved © ${currentYear}`}
        </p>
      </div>
    </div>
  );
}

export default Links; 