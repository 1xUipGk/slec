import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { FaIdCard, FaBolt, FaUserTie, FaAward } from 'react-icons/fa';

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>{t.about.title}</h1>
          <p>{t.about.description}</p>
        </div>
      </section>

      <section className="vision-mission">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h2>{t.about.vision.title}</h2>
              <p>{t.about.vision.content}</p>
            </div>
            <div className="mission-card">
              <h2>{t.about.mission.title}</h2>
              <p>{t.about.mission.content}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            <div className="value-card">
              <h3>{t.about.values.quality.title}</h3>
              <p>{t.about.values.quality.content}</p>
            </div>
            <div className="value-card">
              <h3>{t.about.values.honesty.title}</h3>
              <p>{t.about.values.honesty.content}</p>
            </div>
            <div className="value-card">
              <h3>{t.about.values.innovation.title}</h3>
              <p>{t.about.values.innovation.content}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="licenses-section">
        <div className="container">
          <div className="section-title">
            <h2>{t.about.licenses.title}</h2>
          </div>
          <div className="licenses-grid">
            <div className="license-card">
              <FaBolt className="license-icon" />
              <h3>{t.about.licenses.edd}</h3>
              <p>210816</p>
            </div>
            <div className="license-card">
              <FaIdCard className="license-icon" />
              <h3>{t.about.licenses.cr}</h3>
              <p>31747-1</p>
            </div>
            <div className="license-card">
              <FaAward className="license-icon" />
              <h3>{t.about.licenses.grade}</h3>
              <p>{t.about.licenses.capacity}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-title">
            <h2>{t.about.team.title}</h2>
          </div>
          <div className="team-grid">
            <div className="team-info">
              <div className="team-stat">
                <FaUserTie className="team-icon" />
                <p>{t.about.team.engineers}</p>
              </div>
              <div className="team-stat">
                <FaUserTie className="team-icon" />
                <p>{t.about.team.technicians}</p>
              </div>
              <div className="team-stat">
                <FaUserTie className="team-icon" />
                <p>{t.about.team.electricians}</p>
              </div>
              <div className="team-stat">
                <FaUserTie className="team-icon" />
                <p>{t.about.team.supervisors}</p>
              </div>
              <div className="team-stat">
                <FaUserTie className="team-icon" />
                <p>{t.about.team.office}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About; 