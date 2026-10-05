import React, { useEffect, useRef, useState } from 'react';
import { COMPANY_DATA } from '../data/companyData';

interface OfficialLogoProps {
  size?: 'hero' | 'lg' | 'md' | 'sm';
  showTagline?: boolean;
  className?: string;
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({
  size = 'hero',
  showTagline = true,
  className = ''
}) => {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Attempt to process background to transparent via canvas if CORS allows
  useEffect(() => {
    let isMounted = true;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = COMPANY_DATA.links.officialLogoUrl;

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Make pure white/near white pixels transparent
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          // If pixel is very close to white
          if (r > 238 && g > 238 && b > 238) {
            data[i + 3] = 0; // Alpha transparent
          } else if (r > 220 && g > 220 && b > 220) {
            // Smooth edge feathering
            const alphaFactor = (255 - ((r + g + b) / 3)) / 35;
            data[i + 3] = Math.min(255, Math.max(0, Math.floor(data[i + 3] * alphaFactor)));
          }
        }
        ctx.putImageData(imageData, 0, 0);
        if (isMounted) {
          setProcessedSrc(canvas.toDataURL('image/png'));
        }
      } catch (err) {
        // If canvas is tainted due to CORS, fallback to standard image with mix-blend-multiply
        if (isMounted) {
          setProcessedSrc(null);
        }
      }
    };

    img.onerror = () => {
      if (isMounted) {
        setHasError(true);
      }
    };

    return () => {
      isMounted = false;
    };
  }, []);

  const sizeClasses = {
    hero: 'w-72 sm:w-88 md:w-96 max-w-full h-auto',
    lg: 'w-56 sm:w-64 max-w-full h-auto',
    md: 'w-40 sm:w-48 max-w-full h-auto',
    sm: 'w-28 sm:w-32 max-w-full h-auto'
  };

  const imageSrc = processedSrc || COMPANY_DATA.links.officialLogoUrl;

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      {/* Logo Container with subtle premium lighting reflection */}
      <div className="relative group p-2 sm:p-4 rounded-3xl transition-transform duration-500 hover:scale-[1.01]">
        {/* Soft background glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 via-sky-50/20 to-blue-200/30 rounded-3xl blur-xl -z-10 group-hover:opacity-100 transition-opacity opacity-75" />
        
        {/* Logo Image */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={imageSrc}
            alt="Dinâmica Soluções e Serviços - Logomarca Oficial"
            className={`${sizeClasses[size]} object-contain drop-shadow-[0_10px_25px_rgba(2,132,199,0.12)] transition-all duration-500 ${
              !processedSrc ? 'mix-blend-multiply' : ''
            }`}
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {/* Discreet Light sweep shimmer effect */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity overflow-hidden"
            aria-hidden="true"
          >
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent transform -skew-x-25 animate-shimmer" />
          </div>
        </div>
      </div>

      {/* Main phrase below logo */}
      {showTagline && (
        <div className="mt-4 sm:mt-5 max-w-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-sky-700 to-blue-600">
            {COMPANY_DATA.heroPhrase}
          </h2>
          <div className="mt-2 h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-sky-500 to-transparent rounded-full" />
        </div>
      )}
    </div>
  );
};
