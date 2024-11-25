const logoFormats = [
  {
    id: 'eps',
    icon: <FaFileAlt />,
    title: t.branding.downloadFormats.eps,
    files: {
      white: '/src/assets/sunlight-white.eps',
      black: '/src/assets/sunlight-black.eps',
      color: '/src/assets/sunlight-color.eps'
    }
  },
  {
    id: 'pdf',
    icon: <FaFilePdf />,
    title: t.branding.downloadFormats.pdf,
    files: {
      white: '/src/assets/sunlight-white.pdf',
      black: '/src/assets/sunlight-black.pdf',
      color: '/src/assets/sunlight-color.pdf'
    }
  },
  {
    id: 'png',
    icon: <FaFileImage />,
    title: t.branding.downloadFormats.png,
    files: {
      white: '/src/assets/sunlight-white.png',
      black: '/src/assets/sunlight-black.png',
      color: '/src/assets/sunlight-color.png'
    }
  }
];

const getLogoPreview = (variant) => {
  return {
    white: { background: '#333', src: '/src/assets/sunlight-white.png' },
    black: { background: '#fff', src: '/src/assets/sunlight-black.png' },
    color: { background: '#fff', src: '/src/assets/sunlight-color.png' }
  }[variant] || { background: '#fff', src: '/src/assets/sunlight-color.png' };
}; 