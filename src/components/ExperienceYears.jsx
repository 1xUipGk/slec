const ExperienceYears = () => {
  const startYear = 1994;
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;

  return (
    <div className="stat-card">
      <h3>{years}+</h3>
      <p>سنوات خبرة</p>
    </div>
  );
};

export default ExperienceYears; 