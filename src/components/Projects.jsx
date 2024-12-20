import React, { useState } from 'react';
import { FaBuilding } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import ImageViewer from './ImageViewer';

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];
  
  const initialProjectsCount = 6;
  
  const projects = [
    {
      image: "/images/spark-tower.jpg",
      title: "SPARK TOWER",
      location: t.projectsSection.locations.juffair,
      type: t.projectsSection.types.residential
    },
    {
      image: "/images/dragon-city.jpg",
      title: "DRAGON CITY APARTMENT",
      location: t.projectsSection.locations.diyar,
      type: t.projectsSection.types.residential
    },
    {
      image: "/images/awal-plaza.jpg",
      title: "AWAL PLAZA",
      location: t.projectsSection.locations.manama,
      type: t.projectsSection.types.commercial
    },
    {
      image: "/images/busaiteen-plus.jpg",
      title: "BUSAITEEN PLUS",
      location: t.projectsSection.locations.busaiteen,
      type: t.projectsSection.types.residential
    },
    {
      image: "/images/busaiteen-one.jpg",
      title: "BUSAITEEN ONE",
      location: t.projectsSection.locations.busaiteen,
      type: t.projectsSection.types.residential
    },
    {
      image: "/images/almoallem-mall.jpg",
      title: "ALMOALLEM MALL",
      location: t.projectsSection.locations.diyar,
      type: t.projectsSection.types.commercial
    }
  ];

  const projectsWithImages = projects.filter(project => !project.noImage);
  const displayedProjects = showAll ? projects : projects.slice(0, initialProjectsCount);

  const handleImageClick = (index) => {
    const imageIndex = projectsWithImages.findIndex(
      project => project.image === projects[index].image
    );
    setSelectedImageIndex(imageIndex);
  };

  return (
    <section className="projects-section">
      <div className="section-title">
        <h2>{t.projectsSection.title}</h2>
        <p>{t.projectsSection.subtitle}</p>
      </div>
      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <div key={index} className="project-card">
            {project.noImage ? (
              <div className="project-no-image">
                <FaBuilding className="no-image-icon" />
              </div>
            ) : (
              <img 
                src={project.image} 
                alt={project.title} 
                onClick={() => handleImageClick(index)}
              />
            )}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.location}</p>
              <span className="project-type">{project.type}</span>
            </div>
          </div>
        ))}
      </div>

      {!showAll && projects.length > initialProjectsCount && (
        <button 
          className="show-more-button"
          onClick={() => setShowAll(true)}
        >
          {t.projectsSection.showMore}
        </button>
      )}

      {selectedImageIndex !== null && (
        <ImageViewer 
          images={projectsWithImages}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onNext={() => setSelectedImageIndex((prev) => 
            prev === projectsWithImages.length - 1 ? 0 : prev + 1
          )}
          onPrev={() => setSelectedImageIndex((prev) => 
            prev === 0 ? projectsWithImages.length - 1 : prev - 1
          )}
        />
      )}
    </section>
  );
}

export default Projects; 