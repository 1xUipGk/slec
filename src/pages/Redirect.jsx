import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Redirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // إعادة التوجيه بعد ثانية واحدة
    const timer = setTimeout(() => {
      navigate('/');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      {/* Meta tags لمنع الفهرسة */}
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <title>جاري إعادة التوجيه...</title>
      </Helmet>

      <div className="redirect-page">
        <div className="redirect-content">
          <div className="loading-spinner"></div>
          <p>جاري إعادة التوجيه...</p>
        </div>
      </div>
    </>
  );
}

export default Redirect; 