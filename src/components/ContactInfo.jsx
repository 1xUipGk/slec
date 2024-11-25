import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaClock } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

function ContactInfo() {
  const { language } = useLanguage();
  const t = translations[language];

  const isCurrentlyOpen = () => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hour = now.getHours();
    return dayOfWeek !== 5 && hour >= 8.5 && hour <= 17.5;
  };

  return (
    <div className="contact-info">      
      <div className="contact-grid">
        <div className="contact-methods">
          <a href="https://wa.me/97317241477" className="contact-card">
            <div className="contact-icon">
              <FaWhatsapp />
            </div>
            <div className="contact-details">
              <h3>{t.contactSection.whatsapp}</h3>
              <p dir="ltr">+973 17241477</p>
            </div>
          </a>

          <a href="mailto:sunlightec@gmail.com" className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-details">
              <h3>{t.contactSection.email}</h3>
              <p>sunlightec@gmail.com</p>
            </div>
          </a>

          <a href="tel:+97317241477" className="contact-card">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-details">
              <h3>{t.contactSection.phone}</h3>
              <p dir="ltr">+973 17241477</p>
            </div>
          </a>
        </div>

        <div className="working-hours-card">
          <div className="hours-header">
            <div className="hours-title">
              <FaClock className="icon" />
              <h3>{t.contactSection.workingHours.title}</h3>
            </div>
            <span className={`status ${isCurrentlyOpen() ? 'open' : 'closed'}`}>
              {isCurrentlyOpen() ? t.contactSection.workingHours.openNow : t.contactSection.workingHours.closedNow}
            </span>
          </div>
          
          <div className="hours-content">
            <div className="hours-row">
              <span className="days">{t.contactSection.workingHours.weekdays}</span>
              <div className="time-slots">
                <span className="time">{t.contactSection.workingHours.morning}</span>
                <span className="time">{t.contactSection.workingHours.evening}</span>
              </div>
            </div>
            <div className="hours-row closed">
              <span className="days">{t.contactSection.workingHours.friday}</span>
              <span className="time">{t.contactSection.workingHours.closed}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo; 