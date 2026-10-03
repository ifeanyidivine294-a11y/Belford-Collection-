import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title?: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white hover:text-[#2563FF] transition-colors focus-visible:outline-none"
          aria-label="Close Preview"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="relative overflow-hidden max-h-[80vh] border border-[#C9D2E3]/30 bg-[#071A3D]">
          <img
            src={imageUrl}
            alt={title || 'Belford Collection Haute Couture Preview'}
            className="w-auto h-auto max-w-full max-h-[80vh] object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {title && (
          <div className="mt-3 text-center">
            <p className="font-['Cinzel'] text-sm font-semibold text-white tracking-widest uppercase">
              {title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
