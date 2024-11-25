import { FaTimes, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const ImageViewer = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('image-viewer-overlay')) {
      onClose();
    }
  };

  return (
    <div className="image-viewer-overlay" onClick={handleOverlayClick}>
      <div className="image-viewer-content">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        
        <button className="nav-button prev" onClick={onPrev}>
          <FaChevronRight />
        </button>
        
        <div className="image-container">
          <img src={images[currentIndex].image} alt={images[currentIndex].title} />
          <div className="image-info">
            <h3>{images[currentIndex].title}</h3>
            <p>{images[currentIndex].location}</p>
          </div>
        </div>
        
        <button className="nav-button next" onClick={onNext}>
          <FaChevronLeft />
        </button>
      </div>
    </div>
  );
};

export default ImageViewer; 