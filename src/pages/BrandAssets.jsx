import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { FaDownload, FaFileImage, FaFilePdf, FaFileAlt, FaPalette } from 'react-icons/fa';

function BrandAssets() {
  const { language } = useLanguage();
  const t = translations[language];

  const logoFormats = [
    {
      id: 'eps',
      icon: <FaFileAlt />,
      title: t.branding.downloadFormats.eps,
      files: {
        white: '/assets/sunlight-white.eps',
        black: '/assets/sunlight-black.eps',
        color: '/assets/sunlight-color.eps'
      }
    },
    {
      id: 'pdf',
      icon: <FaFilePdf />,
      title: t.branding.downloadFormats.pdf,
      files: {
        white: '/assets/sunlight-white.pdf',
        black: '/assets/sunlight-black.pdf',
        color: '/assets/sunlight-color.pdf'
      }
    },
    {
      id: 'png',
      icon: <FaFileImage />,
      title: t.branding.downloadFormats.png,
      files: {
        white: '/assets/sunlight-white.png',
        black: '/assets/sunlight-black.png',
        color: '/assets/sunlight-color.png'
      }
    }
  ];

  const handleDownload = async (format, variant) => {
    const file = logoFormats.find(f => f.id === format)?.files[variant];
    if (!file) return;

    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error('Network response was not ok');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `sunlight-logo-${variant}.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
      alert('عذراً، حدث خطأ أثناء تحميل الملف');
    }
  };

  const getLogoPreview = (variant) => {
    return {
      white: { background: '#333', src: '/public/assets/logos/sunlight-white.png' },
      black: { background: '#fff', src: '/public/assets/logos/sunlight-black.png' },
      color: { background: '#fff', src: '/public/assets/logos/sunlight-color.png' }
    }[variant] || { background: '#fff', src: '/public/assets/logos/sunlight-color.png' };
  };

  return (
    <main className="brand-assets-page">
      <section className="brand-hero">
        <div className="container">
          <FaPalette className="brand-icon" />
          <h1>{t.branding.title}</h1>
          <p>{t.branding.description}</p>
        </div>
      </section>

      <section className="logo-section">
        <div className="container">
          <div className="section-title">
            <h2>{t.branding.logoTitle}</h2>
            <p>{t.branding.logoDescription}</p>
          </div>

          <div className="logo-preview-main">
            <img src="/logos/sunlight-color.svg" alt="Main Logo" />
          </div>

          <div className="logo-grid">
            {logoFormats.map((format) => (
              <div key={format.id} className="logo-card">
                <div className="logo-preview">
                  {format.icon}
                  <h3>{format.title}</h3>
                </div>
                <div className="logo-variants">
                  {Object.keys(format.files).map((variant) => (
                    <div key={variant} className="variant-container">
                      <div 
                        className="variant-preview"
                        style={{ background: getLogoPreview(variant).background }}
                      >
                        <img 
                          src={getLogoPreview(variant).src} 
                          alt={`Logo ${variant}`}
                          className={variant === 'white' ? 'white-logo' : ''}
                        />
                      </div>
                      <button
                        className={`download-button ${variant}`}
                        onClick={() => handleDownload(format.id, variant)}
                      >
                        <FaDownload />
                        <span>{t.branding.downloadFormats[variant]}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BrandAssets; 