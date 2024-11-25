import { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// استيراد الصور باستخدام URL نسبي
const images = [
  './src/assets/images/banner1.jpg',
  './src/assets/images/banner2.jpg',
  './src/assets/images/banner3.jpg',
  './src/assets/images/banner4.jpg'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <button className="slider-button prev" onClick={prevSlide}>
        <FaChevronRight />
      </button>
      <button className="slider-button next" onClick={nextSlide}>
        <FaChevronLeft />
      </button>
      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 