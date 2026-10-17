import React, { useEffect, useRef } from 'react';
import type { Activity } from '../../types';
import { Button } from '../common/Button';
import { Bookmark, X, ShieldCheck, Clock } from 'lucide-react';

interface SaveExplanationModalProps {
  activity: Activity | null;
  isOpen: boolean;
  onClose: () => void;
  onContinueToRegister: () => void;
}

export const SaveExplanationModal: React.FC<SaveExplanationModalProps> = ({
  activity,
  isOpen,
  onClose,
  onContinueToRegister,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap & Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    // Lock background scroll
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    // Initial focus on primary button
    const timer = setTimeout(() => {
      const primaryBtn = modalRef.current?.querySelector('button[data-primary="true"]') as HTMLButtonElement;
      primaryBtn?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !activity) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17183F]/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="save-explanation-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-[#E6E7EF] relative animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#73758A] hover:text-[#17183F] p-1.5 rounded-full hover:bg-[#FAFAFC] transition-colors focus-visible:ring-2 focus-visible:ring-[#6F86F8] cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Icon */}
        <div className="w-12 h-12 rounded-2xl bg-[#EEF1FF] flex items-center justify-center text-[#6F86F8] mb-4 shadow-xs">
          <Bookmark className="w-6 h-6 fill-[#6F86F8]" />
        </div>

        {/* Modal Headings */}
        <h3
          id="save-explanation-title"
          className="text-2xl font-bold text-[#17183F] font-heading leading-tight mb-2"
        >
          Keep this activity handy.
        </h3>
        <p className="text-sm text-[#73758A] leading-relaxed mb-5">
          Create a free Looply account to save this activity to your personal list and find it again whenever you need it.
        </p>

        {/* Selected Activity Mini Card */}
        <div className="bg-[#FAFAFC] rounded-2xl p-3 border border-[#E6E7EF] flex gap-3.5 items-center mb-6">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-16 h-16 rounded-xl object-cover shrink-0"
          />
          <div className="min-w-0 flex-1 text-left">
            <span className="text-[10px] font-bold text-[#6F86F8] uppercase tracking-wider block">
              {activity.category}
            </span>
            <h4 className="font-bold text-sm text-[#17183F] truncate">
              {activity.title}
            </h4>
            <div className="flex items-center gap-2 text-xs text-[#73758A] mt-0.5">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#6F86F8]" />
                {activity.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2.5">
          <Button
            variant="primary"
            size="lg"
            data-primary="true"
            className="w-full text-center"
            onClick={onContinueToRegister}
          >
            Create free account
          </Button>

          <Button
            variant="ghost"
            size="md"
            className="w-full text-center text-[#73758A] hover:text-[#17183F]"
            onClick={onClose}
          >
            Keep exploring
          </Button>
        </div>

        {/* Reassurance Note */}
        <div className="mt-4 pt-4 border-t border-[#F0F1F6] flex items-center justify-center gap-1.5 text-[11px] text-[#73758A]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#17865D] shrink-0" />
          <span>Saving an activity doesn't reserve a place.</span>
        </div>
      </div>
    </div>
  );
};
