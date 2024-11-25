const MapLocation = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14485.061876763084!2d50.57993689999999!3d26.213473399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af697280fb1d%3A0x95b3b4d6f1de6b9c!2sSunlight%20Electrical%20Contracting!5e0!3m2!1sen!2sbh!4v1711203047043!5m2!1sen!2sbh"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapLocation; 