import React, { useEffect } from 'react';
import type { InfoModalContent } from '../../types';
import { Button } from '../common/Button';
import { X, Info } from 'lucide-react';

interface InfoModalProps {
  content: InfoModalContent | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  content,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !content) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17183F]/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-[#E6E7EF] relative animate-in zoom-in-95 duration-200 text-left"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#73758A] hover:text-[#17183F] p-1.5 rounded-full hover:bg-[#FAFAFC] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-11 h-11 rounded-2xl bg-[#EEF1FF] flex items-center justify-center text-[#6F86F8] mb-4">
          <Info className="w-5 h-5" />
        </div>

        <h3 id="info-modal-title" className="text-xl font-bold text-[#17183F] font-heading mb-1">
          {content.title}
        </h3>
        <p className="text-xs text-[#6F86F8] font-semibold uppercase tracking-wider mb-4">
          {content.subtitle}
        </p>

        <div className="text-sm text-[#73758A] leading-relaxed space-y-3 mb-6 max-h-[60vh] overflow-y-auto pr-1">
          {content.body.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <Button
          variant="outline"
          size="md"
          className="w-full text-center"
          onClick={onClose}
        >
          Understood
        </Button>
      </div>
    </div>
  );
};
