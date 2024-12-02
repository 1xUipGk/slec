// إضافة دالة لحساب سنوات الخبرة
const calculateExperience = () => {
  const startYear = 1994;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

const experienceYears = calculateExperience();

export const translations = {
  ar: {
    // Header & Navigation
    home: "الرئيسية",
    services: "خدماتنا",
    contact: "اتصل بنا",
    office: "مكتبنا",
    language: "English",
    
    // Hero Section
    hero: {
      subtitle: "خدمات كهربائية موثوقة ومعتمدة",
      title: "سن لايت للمقاولات الكهربائية",
      since: "منذ عام 1994م نقدم خدمات كهربائية متميزة ⚡",
      contactUs: "اتصل بنا",
      ourServices: "خدماتنا"
    },

    // Services Section
    servicesSection: {
      title: "خدماتنا",
      subtitle: "نقدم خدمات كهربائية متكاملة",
      services: [
        {
          title: "التركيبات السكنية",
          description: "تركيب وصيانة التمديدات الكهربائية للمنازل والشقق السكنية"
        },
        {
          title: "التركيبات الصناعية",
          description: "تركيب وصيانة الأنظمة الكهربائية للمصانع والمنشآت الصناعية"
        },
        {
          title: "أنظمة الإضاءة",
          description: "تركيب وبرمجة أنظمة الإضاءة الذكية والتقليدية"
        },
        {
          title: "خدمات الصيانة",
          description: "صيانة دورية وطارئة لجميع الأنظمة الكهربائية"
        }
      ],
      showMore: "عرض المزيد"
    },

    // Projects Section
    projectsSection: {
      title: "أبرز مشاريعنا",
      subtitle: "نفخر بتنفيذ العديد من المشاريع المميزة",
      showMore: "عرض المزيد من المشاريع",
      types: {
        residential: "برج سكني",
        commercial: "مجمع تجاري",
        educational: "مدرسة"
      },
      locations: {
        juffair: "الجفير",
        diyar: "ديار المحرق",
        manama: "المنامة",
        busaiteen: "البسيتين",
        seef: "السيف",
        burhanah: "البرهامة",
        khalidiya: "الخالدية",
        amwaj: "جزر أمواج",
        saqiya: "سقية"
      }
    },

    // Contact Section
    contactSection: {
      title: "اتصل بنا",
      subtitle: "نحن هنا لمساعدتك في جميع احتياجاتك الكهربائية",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      workingHours: {
        title: "أوقات العمل",
        weekdays: "السبت - الخميس",
        friday: "الجمعة",
        closed: "مغلق",
        openNow: "مفتوح الآن",
        closedNow: "مغلق الآن",
        morning: "8:30 صباحاً - 1:00 مساءً",
        evening: "2:30 مساءً - 5:30 مساءً"
      }
    },

    // Location Section
    locationSection: {
      title: "مكتبنا",
      subtitle: "يمكنك زيارتنا في مكتبنا في المنامة، البحرين"
    },

    // Footer
    footer: {
      established: "تأسست عام 1994",
      address: "طريق 2809، المنامة، البحرين (6H7H+9WF)",
      servicesTitle: "خدماتنا",
      services: {
        electrical: "التمديدات الكهربائية",
        newBuildings: "تسليك المباني الجديدة",
        maintenance: "الصيانة الدورية",
        projects: "المشاريع الكبرى"
      },
      contactTitle: "تواصل معنا",
      rights: "جميع الحقوق محفوظة"
    },

    // About Section
    about: {
      nav: "من نحن",
      title: "من نحن",
      description: "شركة سن لايت للمقاولات الكهربائية، تأسست عام 1994 في مملكة البحرين. نقدم خدمات التركيبات الكهربائية للمشاريع السكنية والتجارية والصناعية بأعلى معايير الجودة والأمان.",

      vision: {
        title: "رؤيتنا",
        content: "أن نصبح الشركة الرائدة في مجال المقاولات الكهربائية، وتقديم خدمات فريدة ومميزة وعالية الجودة لعملائنا في البحرين."
      },

      mission: {
        title: "رسالتنا",
        content: "تلبية احتياجات عملائنا، وتقديم حلول مخصصة، وتقديم الخدمات بأعلى مستوى من الجودة والاحترافية للحفاظ على علاقات قوية ومستدامة وطويلة الأمد مع عملائنا."
      },

      values: {
        quality: {
          title: "الجودة",
          content: "نلتزم بتقديم خدمات عالية الجودة ومواد خام مستدامة وممتازة."
        },
        honesty: {
          title: "الأمانة",
          content: "نلتزم بوعودنا واتفاقياتنا، ونتعامل مع العملاء سواء أفراداً أو شركات بالتزام وأمانة وإخلاص."
        },
        innovation: {
          title: "الابتكار",
          content: "نسعى دائماً لتطوير أفضل الحلول والتقنيات في مجال المقاولات الكهربائية."
        }
      },

      // إضافة قسم التراخيص
      licenses: {
        title: "التراخيص والاعتمادات",
        edd: "رخصة هيئة الكهرباء والماء",
        cr: "السجل التجاري",
        grade: "الدرجة الثالثة",
        capacity: "قدرة تحميل 500 كيلوواط"
      },

      // إضافة قسم الفريق
      team: {
        title: "فريق العمل",
        engineers: "مهندسين معتمدين: 3",
        technicians: "فنيين معتمدين: 2",
        electricians: "كهربائيين معتمدين: 20",
        supervisors: "مشرفين: 3",
        office: "موظفي مكتب: 2"
      }
    },

    // Branding Section
    branding: {
      nav: "الهوية المؤسسية",
      title: "الهوية المؤسسية",
      description: "شعار سن لايت متوفر بعدة صيغ وأحجام للاستخدام في المواد التسويقية والمطبوعات",
      logoTitle: "شعار سن لايت",
      logoDescription: "يمكنك تحميل الشعار بالصيغ التالية",
      downloadFormats: {
        ai: "ملف Adobe Illustrator",
        eps: "ملف EPS للطباعة",
        pdf: "ملف PDF",
        png: "ملف PNG شفاف",
        white: "نسخة بيضاء",
        black: "نسخة سوداء",
        color: "نسخة ملونة"
      }
    },

    // Links Section
    links: {
      title: "سن لايت للمقاولات الكهربائية",
      description: "خدمات كهربائية متكاملة في مملكة البحرين",
      footer: "جميع الحقوق محفوظة"
    }
  },
  
  en: {
    // Header & Navigation
    home: "Home",
    services: "Services",
    contact: "Contact",
    office: "Our Office",
    language: "عربي",
    
    // Hero Section
    hero: {
      subtitle: "Reliable & Certified Electrical Services",
      title: "Sunlight Electrical Contracting",
      since: "Providing excellent electrical services since 1994 ⚡",
      contactUs: "Contact Us",
      ourServices: "Our Services"
    },

    // Services Section
    servicesSection: {
      title: "Our Services",
      subtitle: "We provide comprehensive electrical services",
      services: [
        {
          title: "Residential Installations",
          description: "Installation and maintenance of electrical systems for homes and apartments"
        },
        {
          title: "Industrial Installations",
          description: "Installation and maintenance of electrical systems for factories and industrial facilities"
        },
        {
          title: "Lighting Systems",
          description: "Installation and programming of smart and traditional lighting systems"
        },
        {
          title: "Maintenance Services",
          description: "Regular and emergency maintenance for all electrical systems"
        }
      ],
      showMore: "Show More"
    },

    // Projects Section
    projectsSection: {
      title: "Our Featured Projects",
      subtitle: "We are proud to have executed many distinguished projects",
      showMore: "Show More Projects",
      types: {
        residential: "Residential Tower",
        commercial: "Commercial Complex",
        educational: "School"
      },
      locations: {
        juffair: "Juffair",
        diyar: "Diyar Al Muharraq",
        manama: "Manama",
        busaiteen: "Busaiteen",
        seef: "Seef",
        burhanah: "Burhanah",
        khalidiya: "Al Khalidiya",
        amwaj: "Amwaj Islands",
        saqiya: "Saqiya"
      }
    },

    // Contact Section
    contactSection: {
      title: "Contact Us",
      subtitle: "We are here to help with all your electrical needs",
      whatsapp: "WhatsApp",
      email: "Email",
      phone: "Phone",
      workingHours: {
        title: "Working Hours",
        weekdays: "Saturday - Thursday",
        friday: "Friday",
        closed: "Closed",
        openNow: "Open Now",
        closedNow: "Closed Now",
        morning: "8:30 AM - 1:00 PM",
        evening: "2:30 PM - 5:30 PM"
      }
    },

    // Location Section
    locationSection: {
      title: "Our Office",
      subtitle: "You can visit us at our office in Manama, Bahrain"
    },

    // Footer
    footer: {
      established: "Established in 1994",
      address: "Road 2809, Manama, Bahrain (6H7H+9WF)",
      servicesTitle: "Our Services",
      services: {
        electrical: "Electrical Installations",
        newBuildings: "New Buildings Wiring",
        maintenance: "Periodic Maintenance",
        projects: "Major Projects"
      },
      contactTitle: "Contact Us",
      rights: "All Rights Reserved"
    },

    // About Section
    about: {
      nav: "About Us",
      title: "About Us",
      description: "Sunlight Electrical Contracting, established in 1994 in the Kingdom of Bahrain. We provide electrical installation services for residential, commercial, and industrial projects with the highest standards of quality and safety.",

      vision: {
        title: "Our Vision",
        content: "To become the leading company in electrical contracting, providing unique, distinctive, and high-quality services to our customers in Bahrain."
      },

      mission: {
        title: "Our Mission",
        content: "To meet our customers' needs, provide customized solutions, and deliver services at the highest level of quality and professionalism to maintain strong, sustainable, and long-term relationships with our customers."
      },

      values: {
        quality: {
          title: "Quality",
          content: "We are committed to providing high-quality services and sustainable, superior raw materials."
        },
        honesty: {
          title: "Honesty",
          content: "We are committed to our promises and agreements, and we deal with individual or corporate customers with commitment, honesty, and sincerity."
        },
        innovation: {
          title: "Innovation",
          content: "We always strive to develop the best solutions and technologies in the field of electrical contracting."
        }
      },

      // Add licenses section
      licenses: {
        title: "Licenses & Certifications",
        edd: "EDD License",
        cr: "Commercial Registration",
        grade: "Grade Three",
        capacity: "Load Capacity 500 Kw"
      },

      // Add team section
      team: {
        title: "Our Team",
        engineers: "Certified Engineers: 3",
        technicians: "Certified Technicians: 2",
        electricians: "Certified Electricians: 20",
        supervisors: "Supervisors: 3",
        office: "Office Staff: 2"
      }
    },

    // Branding Section
    branding: {
      nav: "Brand Assets",
      title: "Brand Assets",
      description: "Sunlight logo is available in various formats and sizes for use in marketing materials and prints",
      logoTitle: "Sunlight Logo",
      logoDescription: "You can download the logo in the following formats",
      downloadFormats: {
        ai: "Adobe Illustrator File",
        eps: "EPS for Printing",
        pdf: "PDF",
        png: "Transparent PNG",
        white: "White Version",
        black: "Black Version",
        color: "Color Version"
      }
    },

    // Links Section
    links: {
      title: "Sunlight Electrical Contracting",
      description: "Comprehensive electrical services in Bahrain",
      footer: "All Rights Reserved"
    }
  }
}; 