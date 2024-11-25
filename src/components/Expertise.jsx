import { FaIndustry, FaHome, FaShieldAlt, FaBell, FaLightbulb } from 'react-icons/fa';

const Expertise = () => {
  const areas = [
    {
      icon: <FaHome />,
      title: "التركيبات السكنية",
      description: "خبرة 27 عاماً في المجال السكني مع الالتزام بمعايير EDD"
    },
    {
      icon: <FaIndustry />,
      title: "التركيبات الصناعية",
      description: "خبرة في المشاريع الصناعية والمصانع والمستودعات"
    },
    {
      icon: <FaBell />,
      title: "أنظمة إنذار الحريق",
      description: "تركيب وصيانة أنظمة إنذار الحريق المتطورة والتقليدية"
    },
    {
      icon: <FaLightbulb />,
      title: "أنظمة التحكم بالإضاءة",
      description: "تركيب أحدث أنظمة التحكم بالإضاءة وأتمتة المباني"
    },
    {
      icon: <FaShieldAlt />,
      title: "أنظمة الأمن والحماية",
      description: "كاميرات المراقبة وأنظمة الإنذار وحواجز المرور"
    }
  ];

  return (
    <section className="expertise-section">
      <div className="section-title">
        <h2>مجالات خبرتنا</h2>
        <p>نقدم حلولاً متكاملة في مجالات متعددة</p>
      </div>
      <div className="expertise-grid">
        {areas.map((area, index) => (
          <div key={index} className="expertise-card">
            <div className="expertise-icon">{area.icon}</div>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise; 