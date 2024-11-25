import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import ContactInfo from '../components/ContactInfo';
import MapLocation from '../components/MapLocation';
import Services from '../components/Services';
import Projects from '../components/Projects';

function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="subtitle">{t.hero.subtitle}</span>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.since}</p>
            <div className="hero-buttons">
              <a href="#contact" className="primary-button">{t.hero.contactUs}</a>
              <a href="#services" className="secondary-button">{t.hero.ourServices}</a>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <Projects />

      <section className="contact" id="contact">
        <div className="section-title">
          <h2>{t.contactSection.title}</h2>
          <p>{t.contactSection.subtitle}</p>
        </div>
        <ContactInfo />
      </section>

      <section className="location" id="location">
        <div className="section-title">
          <h2>{t.locationSection.title}</h2>
          <p>{t.locationSection.subtitle}</p>
        </div>
        <MapLocation />
      </section>
    </main>
  );
}

export default Home; 