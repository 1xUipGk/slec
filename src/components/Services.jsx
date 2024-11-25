import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { FaBolt, FaIndustry, FaShieldAlt, FaBell, FaLightbulb, FaPlug, FaHome, FaTools, FaBuilding } from 'react-icons/fa';

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  
  const initialServicesCount = 3;
  const displayedServices = showAll 
    ? t.servicesSection.services 
    : t.servicesSection.services.slice(0, initialServicesCount);

  return (
    <section className="services" id="services">
      <div className="section-header">
        <div className="title-with-nav">
          <h2>{t.servicesSection.title}</h2>
        </div>
      </div>
      
      <div className="services-container">
        <div className="services-grid">
          {displayedServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-wrapper">
                {getServiceIcon(index)}
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!showAll && t.servicesSection.services.length > initialServicesCount && (
        <button 
          className="show-more-button"
          onClick={() => setShowAll(true)}
        >
          {t.servicesSection.showMore}
        </button>
      )}
    </section>
  );
};

const getServiceIcon = (index) => {
  const icons = [
    <FaHome className="service-icon" />,
    <FaIndustry className="service-icon" />,
    <FaBell className="service-icon" />,
    <FaLightbulb className="service-icon" />,
    <FaShieldAlt className="service-icon" />,
    <FaTools className="service-icon" />
  ];
  return icons[index];
};

export default Services; 