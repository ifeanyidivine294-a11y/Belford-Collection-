import React, { useState } from 'react';
import { resolveImageUrl, isPlaceholderUrl } from '../utils/imageHelper';
import { ZoomIn, Image as ImageIcon } from 'lucide-react';

interface BelfordImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  objectFit?: 'cover' | 'contain' | 'none';
  onZoom?: (imgUrl: string, title?: string) => void;
  allowZoom?: boolean;
}

export const BelfordImage: React.FC<BelfordImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  objectFit,
  onZoom,
  allowZoom = false,
  style,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const isPlaceholder = isPlaceholderUrl(src);
  const resolvedSrc = isPlaceholder ? '' : resolveImageUrl(src);

  const handleClick = (e: React.MouseEvent) => {
    if (allowZoom && onZoom && resolvedSrc && !hasError && !isPlaceholder) {
      e.stopPropagation();
      onZoom(resolvedSrc, alt);
    }
  };

  if (isPlaceholder || hasError || !resolvedSrc) {
    return (
      <div
        className={`relative w-full flex flex-col items-center justify-center p-8 text-center select-none bg-[#071A3D]/40 ${containerClassName}`}
        style={{ width: '100%', height: 'auto', minHeight: '220px' }}
      >
        <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center text-white mb-2">
          <ImageIcon className="w-6 h-6 text-[#2563FF]" />
        </div>
        <p className="font-['Cinzel'] text-xs font-bold text-white tracking-widest uppercase">
          {alt || 'Belford Collection'}
        </p>
        <span className="text-[10px] tracking-wider text-[#C9D2E3]/70 uppercase mt-1">
          {isPlaceholder ? src : 'Curated Atelier Piece'}
        </span>
      </div>
    );
  }

  // Strip any accidental object-cover, object-contain, or fixed height classes
  const cleanClassName = className
    .replace(/\bobject-cover\b/g, '')
    .replace(/\bobject-contain\b/g, '')
    .replace(/\bmax-h-[^\s]+\b/g, '')
    .replace(/\bh-full\b/g, '')
    .replace(/\bh-[^\s]+\b/g, '')
    .trim();

  return (
    <div
      className={`relative w-full block overflow-hidden group/img ${containerClassName}`}
      onClick={handleClick}
    >
      <img
        src={resolvedSrc}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'unset',
          maxHeight: 'none',
          ...style
        }}
        className={`w-full h-auto block transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${cleanClassName}`}
        {...rest}
      />

      {/* Subtle Zoom Affordance on hover if zoom enabled */}
      {allowZoom && onZoom && (
        <button
          type="button"
          onClick={handleClick}
          title="Click to view full-size image"
          className="absolute bottom-2.5 right-2.5 p-1.5 bg-[#071A3D]/80 hover:bg-[#2563FF] text-white opacity-0 group-hover/img:opacity-100 transition-all duration-200 backdrop-blur-xs z-10"
          aria-label="View larger image"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
