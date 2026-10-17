import React, { useEffect } from 'react';
import { X, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import type { AppScreenshotItem } from '../../data/appScreenshots';

interface MockupLightboxModalProps {
  screenshot: AppScreenshotItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MockupLightboxModal: React.FC<MockupLightboxModalProps> = ({
  screenshot,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !screenshot) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1026]/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl border border-[#E6E7EF] relative animate-in zoom-in-95 duration-200 text-left flex flex-col md:flex-row gap-6 items-center"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#73758A] hover:text-[#17183F] p-2 rounded-full hover:bg-[#FAFAFC] transition-colors cursor-pointer z-30"
          aria-label="Close mockup preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Screenshot preview */}
        <div className="w-full max-w-[280px] shrink-0 flex justify-center">
          <div className="bg-[#17183F] p-2.5 rounded-[40px] shadow-2xl border-[3px] border-[#2A2B58]">
            <div className="rounded-[30px] overflow-hidden max-h-[500px]">
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>
        </div>

        {/* Details & Context */}
        <div className="flex-1 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF1FF] text-[#6F86F8] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{screenshot.badge}</span>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-heading text-[#17183F]">
              {screenshot.title}
            </h3>
            <p className="text-sm font-medium text-[#6F86F8] mt-1">
              {screenshot.subtitle}
            </p>
          </div>

          <p className="text-sm text-[#73758A] leading-relaxed">
            {screenshot.context}
          </p>

          <div className="pt-2 border-t border-[#F0F1F6] space-y-2 text-xs text-[#73758A]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#17865D]" />
              <span>Real high-fidelity Looply iOS & Android screen</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#6F86F8]" />
              <span>Explore nearby activities freely with zero account friction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
