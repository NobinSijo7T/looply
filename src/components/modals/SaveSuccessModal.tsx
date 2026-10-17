import React, { useEffect } from 'react';
import type { Activity } from '../../types';
import { Button } from '../common/Button';
import { Check, Bookmark, X, ShieldCheck, Clock } from 'lucide-react';

interface SaveSuccessModalProps {
  activity: Activity | null;
  isOpen: boolean;
  onClose: () => void;
  onViewSavedList: () => void;
}

export const SaveSuccessModal: React.FC<SaveSuccessModalProps> = ({
  activity,
  isOpen,
  onClose,
  onViewSavedList,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !activity) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17183F]/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="save-success-title"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-[#E6E7EF] relative animate-in zoom-in-95 duration-200 text-left"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#73758A] hover:text-[#17183F] p-1.5 rounded-full hover:bg-[#FAFAFC] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Restrained success badge with mint accent */}
        <div className="w-12 h-12 rounded-2xl bg-[#BDF4DE] flex items-center justify-center text-[#17865D] mb-4">
          <Check className="w-6 h-6 stroke-[3]" />
        </div>

        {/* Headings */}
        <h3
          id="save-success-title"
          className="text-2xl font-bold text-[#17183F] font-heading mb-1.5"
        >
          Saved to your list.
        </h3>
        <p className="text-sm text-[#73758A] leading-relaxed mb-5">
          Your activity is ready whenever you want to come back to it.
        </p>

        {/* Compact saved card */}
        <div className="bg-[#FAFAFC] rounded-2xl p-3 border border-[#BDF4DE] flex gap-3.5 items-center mb-6 relative">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-16 h-16 rounded-xl object-cover shrink-0"
          />
          <div className="min-w-0 flex-1 pr-6">
            <span className="text-[10px] font-bold text-[#17865D] uppercase tracking-wider block">
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
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6F86F8]">
            <Bookmark className="w-5 h-5 fill-[#6F86F8]" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2.5">
          <Button
            variant="primary"
            size="lg"
            className="w-full text-center"
            onClick={onViewSavedList}
          >
            View saved activities
          </Button>

          <Button
            variant="ghost"
            size="md"
            className="w-full text-center text-[#73758A] hover:text-[#17183F]"
            onClick={onClose}
          >
            Explore more
          </Button>
        </div>

        {/* Reassurance */}
        <div className="mt-4 pt-4 border-t border-[#F0F1F6] flex items-center justify-center gap-1.5 text-[11px] text-[#73758A]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#17865D] shrink-0" />
          <span>Saving an activity doesn't reserve a place.</span>
        </div>
      </div>
    </div>
  );
};
