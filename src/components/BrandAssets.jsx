const logoFormats = [
  {
    id: 'eps',
    icon: <FaFileAlt />,
    title: t.branding.downloadFormats.eps,
    files: {
      white: '/logos/sunlight-white.eps',
      black: '/logos/sunlight-black.eps',
      color: '/logos/sunlight-color.eps'
    }
  },
  {
    id: 'pdf',
    icon: <FaFilePdf />,
    title: t.branding.downloadFormats.pdf,
    files: {
      white: '/logos/sunlight-white.pdf',
      black: '/logos/sunlight-black.pdf',
      color: '/logos/sunlight-color.pdf'
    }
  },
  {
    id: 'png',
    icon: <FaFileImage />,
    title: t.branding.downloadFormats.png,
    files: {
      white: '/logos/sunlight-white.png',
      black: '/logos/sunlight-black.png',
      color: '/logos/sunlight-color.png'
    }
  }
];

const getLogoPreview = (variant) => {
  return {
    white: { background: '#333', src: '/logos/sunlight-white.png' },
    black: { background: '#fff', src: '/logos/sunlight-black.png' },
    color: { background: '#fff', src: '/logos/sunlight-color.png' }
  }[variant] || { background: '#fff', src: '/logos/sunlight-color.png' };
}; 