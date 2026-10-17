import React, { useEffect } from 'react';
import type { Activity } from '../../types';
import { Button } from '../common/Button';
import {
  X,
  Bookmark,
  Clock,
  MapPin,
  Share2,
  Sparkles,
  Info,
} from 'lucide-react';

interface ActivityDetailModalProps {
  activity: Activity | null;
  isSaved: boolean;
  isOpen: boolean;
  onClose: () => void;
  onSaveToggle: (activity: Activity) => void;
  onShare: (activity: Activity) => void;
}

export const ActivityDetailModal: React.FC<ActivityDetailModalProps> = ({
  activity,
  isSaved,
  isOpen,
  onClose,
  onSaveToggle,
  onShare,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !activity) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17183F]/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="activity-detail-title"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#E6E7EF] relative animate-in zoom-in-95 duration-200 my-8 text-left"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#202139] hover:bg-white flex items-center justify-center shadow-md transition-all cursor-pointer"
          aria-label="Close activity details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badges on image */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md inline-block mb-2">
              {activity.category}
            </span>
            <h3
              id="activity-detail-title"
              className="text-2xl sm:text-3xl font-extrabold font-heading leading-tight"
            >
              {activity.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6">
          {/* Metadata pill row */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#73758A]">
            <div className="flex items-center gap-1.5 bg-[#FAFAFC] px-3 py-1.5 rounded-full border border-[#E6E7EF]">
              <Clock className="w-3.5 h-3.5 text-[#6F86F8]" />
              <span className="font-medium text-[#202139]">{activity.duration}</span>
            </div>

            <div className="flex items-center gap-1.5 bg-[#FAFAFC] px-3 py-1.5 rounded-full border border-[#E6E7EF]">
              <MapPin className="w-3.5 h-3.5 text-[#6F86F8]" />
              <span className="font-medium text-[#202139]">{activity.locationHint}</span>
            </div>

            <div className="flex items-center gap-1.5 bg-[#EEF1FF] px-3 py-1.5 rounded-full text-[#6F86F8] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activity.vibe}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-[#17183F] uppercase tracking-wider mb-2">
              About this discovery
            </h4>
            <p className="text-sm text-[#73758A] leading-relaxed">
              {activity.longDescription}
            </p>
          </div>

          {/* Notice box */}
          <div className="bg-[#FAFAFC] p-4 rounded-2xl border border-[#E6E7EF] flex gap-3 text-xs text-[#73758A]">
            <Info className="w-4 h-4 text-[#6F86F8] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#17183F] mb-0.5">
                Saving is for personal discovery
              </p>
              <p>
                Looply helps you keep track of things you find. Saving an activity adds it to your list and does not reserve a place or constitute a booking.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Button
              variant={isSaved ? 'secondary' : 'primary'}
              size="lg"
              className="flex-1"
              icon={
                <Bookmark
                  className={`w-5 h-5 ${isSaved ? 'fill-[#6F86F8] text-[#6F86F8]' : ''}`}
                />
              }
              onClick={() => onSaveToggle(activity)}
            >
              {isSaved ? 'Saved to Your List' : 'Save to My List'}
            </Button>

            <Button
              variant="outline"
              size="lg"
              icon={<Share2 className="w-4 h-4" />}
              onClick={() => onShare(activity)}
            >
              Share link
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
