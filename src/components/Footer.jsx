import React from 'react';
import { 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaInstagram,
  FaBolt,
  FaHome,
  FaTools,
  FaBuilding
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import Logo from './Logo';

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <Logo isFooter={true} />
          <div className="companyinfo">
            <p className="company-year">{t.footer.established}</p>
            <p className="company-address">{t.footer.address}</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>{t.footer.servicesTitle}</h3>
          <ul>
            <li>
              <a href="#services">
                <FaBolt className="icon" />
                <span>{t.footer.services.electrical}</span>
              </a>
            </li>
            <li>
              <a href="#services">
                <FaHome className="icon" />
                <span>{t.footer.services.newBuildings}</span>
              </a>
            </li>
            <li>
              <a href="#services">
                <FaTools className="icon" />
                <span>{t.footer.services.maintenance}</span>
              </a>
            </li>
            <li>
              <a href="#services">
                <FaBuilding className="icon" />
                <span>{t.footer.services.projects}</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t.footer.contactTitle}</h3>
          <ul className="contact-list">
            <li>
              <a href="mailto:sunlightec@gmail.com">
                <FaEnvelope className="icon" />
                <span>sunlightec@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+97317241477">
                <FaPhone className="icon" />
                <span dir="ltr">+973 17241477</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/97317241477">
                <FaWhatsapp className="icon" />
                <span dir="ltr">+973 17241477</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://wa.me/97317241477" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/sunlight.bh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="mailto:sunlightec@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <div className="copyright">
          <p>{t.footer.rights} © {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 