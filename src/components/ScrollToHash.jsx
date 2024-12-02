import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const location = useLocation();

  const scrollToElement = useCallback(() => {
    const { hash } = location;
    if (hash) {
      // إزالة علامة # من الهاش
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);
      
      if (element) {
        // تأخير قصير للتأكد من تحميل الصفحة
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    } else {
      // إذا لم يكن هناك هاش، نعود إلى أعلى الصفحة
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    scrollToElement();
  }, [location, scrollToElement]);

  return null;
}

export default ScrollToHash; 