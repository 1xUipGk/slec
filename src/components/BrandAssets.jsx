const logoFormats = [
  {
    id: 'eps',
    icon: <FaFileAlt />,
    title: t.branding.downloadFormats.eps,
    files: {
      white: '/assets/logos/sunlight-white.eps',
      black: '/assets/logos/sunlight-black.eps',
      color: '/assets/logos/sunlight-color.eps'
    }
  },
  // ... باقي التنسيقات
];

// تحديث دالة getLogoPreview
const getLogoPreview = (variant) => {
  return {
    white: { background: '#333', src: '/assets/logos/sunlight-white.png' },
    black: { background: '#fff', src: '/assets/logos/sunlight-black.png' },
    color: { background: '#fff', src: '/assets/logos/sunlight-color.png' }
  }[variant] || { background: '#fff', src: '/assets/logos/sunlight-color.png' };
}; 