import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  FaUpload, 
  FaDownload, 
  FaUndo, 
  FaImage,
  FaMinus,
  FaPlus,
  FaCompressAlt,
  FaExpandAlt,
  FaArrowsAlt,
  FaObjectGroup,
  FaFont
} from 'react-icons/fa';

function Studio() {
  const { language } = useLanguage();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [textColor1, setTextColor1] = useState('#ffffff');
  const [textColor2, setTextColor2] = useState('#ffffff');
  const [fontSize1, setFontSize1] = useState(48);
  const [fontSize2, setFontSize2] = useState(32);
  const [textPosition, setTextPosition] = useState({ x: 1080/2, y: 1350/2 });
  const [isEditingText, setIsEditingText] = useState(false);
  const [isEditingText1, setIsEditingText1] = useState(false);
  const [isEditingText2, setIsEditingText2] = useState(false);

  const canvasRef = useRef(null);
  const overlayRef = useRef(null);
  
  const CANVAS_WIDTH = 1080;
  const CANVAS_HEIGHT = 1350;

  const MAX_TEXT_LENGTH = 50;

  const t = {
    ar: {
      title: "استوديو التصميم",
      upload: "رفع صورة",
      download: "تحميل التصميم",
      reset: "إعادة تعيين",
      fit: "ملء الإطار",
      center: "توسيط",
      cover: "تغطية كاملة",
      contain: "احتواء كامل",
      noImage: "قم برفع صورة للبدء",
      imageSize: "حجم الصورة",
      tools: "أدوات التصميم",
      addText: "إضافة نص",
      textPlaceholder: "اكتب النص هنا",
      textColor: "لون النص",
      fontSize: "حجم النص",
      mainText: "النص الرئيسي",
      subText: "النص الفرعي",
    },
    en: {
      title: "Design Studio",
      upload: "Upload Image",
      download: "Download Design",
      reset: "Reset",
      fit: "Fit Frame",
      center: "Center",
      cover: "Cover",
      contain: "Contain",
      noImage: "Upload an image to start",
      imageSize: "Image Size",
      tools: "Design Tools",
      addText: "Add Text",
      textPlaceholder: "Type text here",
      textColor: "Text Color",
      fontSize: "Font Size",
      mainText: "Main Text",
      subText: "Sub Text",
    }
  }[language];

  useEffect(() => {
    // تحميل الصورة الأساسية (الشعار والتصميم)
    const overlay = new Image();
    overlay.src = '/templates/instagram-overlay.png';
    overlay.onload = () => {
      overlayRef.current = overlay;
      drawCanvas();
    };
  }, []);

  useEffect(() => {
    drawCanvas();
  }, [uploadedImage, imagePosition, scale, text1, text2, textColor1, textColor2, fontSize1, fontSize2]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    if (uploadedImage) {
      ctx.save();
      ctx.translate(imagePosition.x, imagePosition.y);
      ctx.scale(scale, scale);
      ctx.drawImage(uploadedImage, 0, 0, uploadedImage.width, uploadedImage.height);
      ctx.restore();
    }
    
    if (overlayRef.current) {
      ctx.drawImage(overlayRef.current, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    // رسم النصوص في الأعلى
    // النص الرئيسي (سميك)
    if (text1) {
      ctx.save();
      ctx.font = `bold ${fontSize1}px Tajawal`;
      ctx.fillStyle = textColor1;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'top';
      // إضافة ظل للنص لتحسين القراءة
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.fillText(text1, CANVAS_WIDTH - 50, 75); // موقع النص الرئيسي
      ctx.restore();
    }
    
    // النص الفرعي (عادي)
    if (text2) {
      ctx.save();
      ctx.font = `${fontSize2}px Tajawal`;
      ctx.fillStyle = textColor2;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'top';
      // إضافة ظل للنص لتحسين القراءة
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.fillText(text2, CANVAS_WIDTH - 50, 75 + fontSize1 + 10); // موقع النص الفرعي تحت الرئيسي مباشرة
      ctx.restore();
    }
  };

  // تحديث قائمة الصيغ المدعومة
  const supportedFormats = [
    "image/jpeg", "image/png", "image/gif", "image/bmp", "image/tiff",
    "image/webp", "image/heic", "image/heif", "image/svg+xml",
    // RAW formats
    ".3fr", ".arw", ".cr2", ".crw", ".dcr", ".dng", ".erf", ".kdc",
    ".mef", ".mrw", ".nef", ".nrw", ".orf", ".pef", ".raf", ".raw",
    ".rw2", ".sr2", ".srf", ".x3f",
    // Other formats
    ".avif", ".cur", ".dcm", ".dds", ".exr", ".hdr", ".ico",
    ".jfif", ".jp2", ".jps", ".pcd", ".pcx", ".pict", ".psd",
    ".sgi", ".tga", ".wbmp", ".wpg", ".xcf", ".yuv"
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // التحقق من امتداد الملف
      const fileExtension = `.${file.name.split('.').pop().toLowerCase()}`;
      const mimeType = file.type.toLowerCase();

      if (!supportedFormats.includes(mimeType) && !supportedFormats.includes(fileExtension)) {
        alert(language === 'ar' 
          ? 'صيغة الملف غير مدعومة. الرجاء اختيار صورة بصيغة مدعومة.'
          : 'File format not supported. Please choose a supported image format.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          setUploadedImage(img);
          // إعادة تعيين الموضع والحجم
          setImagePosition({ x: 0, y: 0 });
          setScale(1);
          // تطبيق الاحتواء التلقائي
          handleContainImage();
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e) => {
    if (!uploadedImage) return;
    setIsDragging(true);
    const rect = canvasRef.current.getBoundingClientRect();
    setDragStart({
      x: e.clientX - rect.left - imagePosition.x,
      y: e.clientY - rect.top - imagePosition.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = canvasRef.current.getBoundingClientRect();
    setImagePosition({
      x: e.clientX - rect.left - dragStart.x,
      y: e.clientY - rect.top - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoom = (delta) => {
    setScale(prev => Math.max(0.1, Math.min(3, prev + delta * 0.1)));
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'instagram-post.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleReset = () => {
    setImagePosition({ x: 0, y: 0 });
    setScale(1);
  };

  const handleFitToFrame = () => {
    if (!uploadedImage) return;
    const ratio = Math.min(
      CANVAS_WIDTH / uploadedImage.width,
      CANVAS_HEIGHT / uploadedImage.height
    );
    setScale(ratio);
    setImagePosition({
      x: (CANVAS_WIDTH - uploadedImage.width * ratio) / 2,
      y: (CANVAS_HEIGHT - uploadedImage.height * ratio) / 2
    });
  };

  const handleCenterImage = () => {
    if (!uploadedImage) return;
    setImagePosition({
      x: (CANVAS_WIDTH - uploadedImage.width * scale) / 2,
      y: (CANVAS_HEIGHT - uploadedImage.height * scale) / 2
    });
  };

  const handleCoverImage = () => {
    if (!uploadedImage) return;
    const ratio = Math.max(
      CANVAS_WIDTH / uploadedImage.width,
      CANVAS_HEIGHT / uploadedImage.height
    );
    setScale(ratio);
    setImagePosition({
      x: (CANVAS_WIDTH - uploadedImage.width * ratio) / 2,
      y: (CANVAS_HEIGHT - uploadedImage.height * ratio) / 2
    });
  };

  const handleContainImage = () => {
    if (!uploadedImage) return;
    const ratio = Math.min(
      CANVAS_WIDTH / uploadedImage.width,
      CANVAS_HEIGHT / uploadedImage.height
    );
    setScale(ratio);
    setImagePosition({
      x: (CANVAS_WIDTH - uploadedImage.width * ratio) / 2,
      y: (CANVAS_HEIGHT - uploadedImage.height * ratio) / 2
    });
  };

  const handleText1Change = (e) => {
    const newText = e.target.value;
    if (newText.length <= MAX_TEXT_LENGTH) {
      setText1(newText);
    }
  };

  const handleText2Change = (e) => {
    const newText = e.target.value;
    if (newText.length <= MAX_TEXT_LENGTH) {
      setText2(newText);
    }
  };

  // إضافة مكون الأيقونة المخصصة
  const CenterIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height="24px" 
      viewBox="0 -960 960 960" 
      width="24px" 
      fill="currentColor"
    >
      <path d="M440-120v-160H300q-25 0-42.5-17.5T240-340q0-25 17.5-42.5T300-400h140v-160H180q-25 0-42.5-17.5T120-620q0-25 17.5-42.5T180-680h260v-160q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v160h260q25 0 42.5 17.5T840-620q0 25-17.5 42.5T780-560H520v160h140q25 0 42.5 17.5T720-340q0 25-17.5 42.5T660-280H520v160q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120Z"/>
    </svg>
  );

  // إضافة أيقونة FitFrame المخصصة
  const FitFrameIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height="24px" 
      viewBox="0 -960 960 960" 
      width="24px" 
      fill="currentColor"
    >
      <path d="M800-640v-80h-80q-17 0-28.5-11.5T680-760q0-17 11.5-28.5T720-800h80q33 0 56.5 23.5T880-720v80q0 17-11.5 28.5T840-600q-17 0-28.5-11.5T800-640Zm-720 0v-80q0-33 23.5-56.5T160-800h80q17 0 28.5 11.5T280-760q0 17-11.5 28.5T240-720h-80v80q0 17-11.5 28.5T120-600q-17 0-28.5-11.5T80-640Zm720 480h-80q-17 0-28.5-11.5T680-200q0-17 11.5-28.5T720-240h80v-80q0-17 11.5-28.5T840-360q17 0 28.5 11.5T880-320v80q0 33-23.5 56.5T800-160Zm-640 0q-33 0-56.5-23.5T80-240v-80q0-17 11.5-28.5T120-360q17 0 28.5 11.5T160-320v80h80q17 0 28.5 11.5T280-200q0 17-11.5 28.5T240-160h-80Zm80-240v-160q0-33 23.5-56.5T320-640h320q33 0 56.5 23.5T720-560v160q0 33-23.5 56.5T640-320H320q-33 0-56.5-23.5T240-400Zm80 0h320v-160H320v160Zm0 0v-160 160Z"/>
    </svg>
  );

  // تحديث نص زر الرفع ليشمل الصيغ المدعومة
  const getUploadButtonText = () => {
    return language === 'ar'
      ? "رفع صورة"
      : "Upload Image";
  };

  // إضافة دالة للتوسيط فقط
  const handleCenterOnly = () => {
    if (!uploadedImage) return;
    
    // توسيط الصورة أفقياً
    const centerX = (CANVAS_WIDTH - uploadedImage.width * scale) / 2;
    setImagePosition(prev => ({
      ...prev,
      x: centerX
    }));
  };

  // إضافة دالة للتوسيط الرأسي
  const handleVerticalCenter = () => {
    if (!uploadedImage) return;
    
    // توسيط الصورة رأسياً
    const centerY = (CANVAS_HEIGHT - uploadedImage.height * scale) / 2;
    setImagePosition(prev => ({
      ...prev,
      y: centerY
    }));
  };

  // إضافة أيقونات التوسيط المخصصة من Google Icons
  const HorizontalCenterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
      <path d="M440-800v240h-80v-240h80Zm160 0v240h-80v-240h80ZM200-480h560v-80H200v80Zm240 320v-240h80v240h-80Zm-80 0v-240h-80v240h80Z"/>
    </svg>
  );

  const VerticalCenterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
      <path d="M160-520v80h160v160h80v-160h160v160h80v-160h160v-80H640v-160h-80v160H400v-160h-80v160H160Z"/>
    </svg>
  );

  return (
    <div className="studio-page">
      <div className="editor-container">
        <div className="editor-sidebar">
          <div className="sidebar-section">
            <h3>{t.tools}</h3>
            <div className="tool-buttons">
              <label className="tool-button">
                <FaUpload />
                <span>{getUploadButtonText()}</span>
                <input
                  type="file"
                  accept="image/*,.3fr,.arw,.cr2,.crw,.dcr,.dng,.erf,.kdc,.mef,.mrw,.nef,.nrw,.orf,.pef,.raf,.raw,.rw2,.sr2,.srf,.x3f,.avif,.cur,.dcm,.dds,.exr,.hdr,.ico,.jfif,.jp2,.jps,.pcd,.pcx,.pict,.psd,.sgi,.tga,.wbmp,.wpg,.xcf,.yuv"
                  onChange={handleImageUpload}
                  hidden
                />
              </label>

              <button 
                className="tool-button"
                onClick={handleReset}
                disabled={!uploadedImage}
                title={language === 'ar' ? "إعادة تعيين الصورة" : "Reset Image"}
              >
                <FaUndo />
                <span>{t.reset}</span>
              </button>

              {/* زر التوسيط الأفقي */}
              <button 
                className="tool-button"
                onClick={handleCenterOnly}
                disabled={!uploadedImage}
                title={language === 'ar' ? "توسيط أفقي" : "Center Horizontally"}
              >
                <HorizontalCenterIcon />
                <span>{language === 'ar' ? "توسيط أفقي" : "Center H"}</span>
              </button>

              {/* زر التوسيط الرأسي */}
              <button 
                className="tool-button"
                onClick={handleVerticalCenter}
                disabled={!uploadedImage}
                title={language === 'ar' ? "توسيط رأسي" : "Center Vertically"}
              >
                <VerticalCenterIcon />
                <span>{language === 'ar' ? "توسيط رأسي" : "Center V"}</span>
              </button>

              <button 
                className="tool-button"
                onClick={handleContainImage}
                disabled={!uploadedImage}
                title={language === 'ar' ? "احتواء الصورة مع الحفاظ على النسب" : "Contain Image"}
              >
                <FaCompressAlt />
                <span>{t.contain}</span>
              </button>

              <button 
                className="tool-button"
                onClick={handleCoverImage}
                disabled={!uploadedImage}
                title={language === 'ar' ? "تغطية كامل الإطار" : "Cover Frame"}
              >
                <FaObjectGroup />
                <span>{t.cover}</span>
              </button>
            </div>
          </div>

          {uploadedImage && (
            <div className="sidebar-section">
              <h3>{t.imageSize}</h3>
              <div className="zoom-controls">
                <button onClick={() => handleZoom(-1)} title="تصغير">
                  <FaMinus />
                </button>
                <span>{Math.round(scale * 100)}%</span>
                <button onClick={() => handleZoom(1)} title="تكبير">
                  <FaPlus />
                </button>
              </div>
            </div>
          )}

          {uploadedImage && (
            <div className="sidebar-section">
              <h3>{t.addText}</h3>
              <div className="text-controls">
                {/* النص الرئيسي */}
                <div className="text-group">
                  <span>{t.mainText}</span>
                  <div className="text-input-container">
                    <input
                      type="text"
                      value={text1}
                      onChange={handleText1Change}
                      placeholder={t.textPlaceholder}
                      className="text-input"
                      maxLength={MAX_TEXT_LENGTH}
                    />
                    <span className="text-counter">{text1.length}/{MAX_TEXT_LENGTH}</span>
                  </div>
                  <div className="text-options">
                    <div className="color-picker">
                      <span>{t.textColor}</span>
                      <input
                        type="color"
                        value={textColor1}
                        onChange={(e) => setTextColor1(e.target.value)}
                      />
                    </div>
                    <div className="font-size-control">
                      <span>{t.fontSize}</span>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={fontSize1}
                        onChange={(e) => setFontSize1(Number(e.target.value))}
                      />
                      <span>{fontSize1}px</span>
                    </div>
                  </div>
                </div>

                {/* النص الفرعي */}
                <div className="text-group">
                  <span>{t.subText}</span>
                  <div className="text-input-container">
                    <input
                      type="text"
                      value={text2}
                      onChange={handleText2Change}
                      placeholder={t.textPlaceholder}
                      className="text-input"
                      maxLength={MAX_TEXT_LENGTH}
                    />
                    <span className="text-counter">{text2.length}/{MAX_TEXT_LENGTH}</span>
                  </div>
                  <div className="text-options">
                    <div className="color-picker">
                      <span>{t.textColor}</span>
                      <input
                        type="color"
                        value={textColor2}
                        onChange={(e) => setTextColor2(e.target.value)}
                      />
                    </div>
                    <div className="font-size-control">
                      <span>{t.fontSize}</span>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={fontSize2}
                        onChange={(e) => setFontSize2(Number(e.target.value))}
                      />
                      <span>{fontSize2}px</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="sidebar-section">
            <button 
              className="download-button"
              onClick={handleDownload}
              disabled={!uploadedImage}
            >
              <FaDownload />
              <span>{t.download}</span>
            </button>
          </div>
        </div>

        <div className="editor-main">
          <div className="canvas-container">
            {!uploadedImage && (
              <div className="upload-placeholder">
                <FaImage />
                <p>{t.noImage}</p>
              </div>
            )}
            <canvas
              ref={canvasRef}
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studio;
