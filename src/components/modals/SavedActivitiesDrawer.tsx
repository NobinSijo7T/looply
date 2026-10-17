import React, { useEffect } from 'react';
import type { Activity } from '../../types';
import { Button } from '../common/Button';
import { ACTIVITIES } from '../../data/activities';
import { Bookmark, X, Trash2, ShieldCheck, Clock } from 'lucide-react';

interface SavedActivitiesDrawerProps {
  isOpen: boolean;
  savedActivityIds: string[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onSelectActivity: (activity: Activity) => void;
  onExploreMore: () => void;
}

export const SavedActivitiesDrawer: React.FC<SavedActivitiesDrawerProps> = ({
  isOpen,
  savedActivityIds,
  onClose,
  onRemove,
  onSelectActivity,
  onExploreMore,
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

  if (!isOpen) return null;

  const savedActivities = ACTIVITIES.filter((a) =>
    savedActivityIds.includes(a.id)
  );

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#17183F]/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="saved-drawer-title"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#E6E7EF] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#EEF1FF] flex items-center justify-center text-[#6F86F8]">
              <Bookmark className="w-5 h-5 fill-[#6F86F8]" />
            </div>
            <div>
              <h3
                id="saved-drawer-title"
                className="font-bold text-lg text-[#17183F] font-heading leading-tight"
              >
                Saved Activities
              </h3>
              <p className="text-xs text-[#73758A]">
                {savedActivities.length} {savedActivities.length === 1 ? 'activity' : 'activities'} saved in this session
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#73758A] hover:text-[#17183F] rounded-lg hover:bg-[#FAFAFC] transition-colors cursor-pointer"
            aria-label="Close saved drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list or Empty state */}
        <div className="p-5 sm:p-6 flex-1 overflow-y-auto space-y-4">
          {savedActivities.length === 0 ? (
            <div className="text-center py-16 px-4 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#FAFAFC] border border-[#E6E7EF] flex items-center justify-center mx-auto text-[#73758A]">
                <Bookmark className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#17183F] mb-1">
                  Your saved list is empty
                </h4>
                <p className="text-xs text-[#73758A] max-w-xs mx-auto leading-relaxed">
                  Browse local walks, food experiences, and workshops. Save anything that catches your eye.
                </p>
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  onClose();
                  onExploreMore();
                }}
              >
                Discover activities
              </Button>
            </div>
          ) : (
            <div className="space-y-3.5">
              {savedActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="group bg-[#FAFAFC] rounded-2xl p-3.5 border border-[#E6E7EF] hover:border-[#6F86F8]/40 transition-all flex gap-3.5 items-center relative"
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 cursor-pointer"
                    onClick={() => {
                      onClose();
                      onSelectActivity(activity);
                    }}
                  />
                  <div
                    className="min-w-0 flex-1 cursor-pointer text-left"
                    onClick={() => {
                      onClose();
                      onSelectActivity(activity);
                    }}
                  >
                    <span className="text-[10px] font-bold text-[#6F86F8] uppercase tracking-wider block">
                      {activity.category}
                    </span>
                    <h5 className="font-bold text-sm text-[#17183F] truncate group-hover:text-[#6F86F8] transition-colors">
                      {activity.title}
                    </h5>
                    <div className="flex items-center gap-2 text-xs text-[#73758A] mt-0.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#6F86F8]" />
                        {activity.duration}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemove(activity.id)}
                    className="p-2 text-[#73758A] hover:text-[#D94A58] hover:bg-white rounded-lg transition-colors cursor-pointer"
                    title="Remove from saved list"
                    aria-label={`Remove ${activity.title} from saved`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info & action */}
        <div className="p-5 sm:p-6 border-t border-[#E6E7EF] bg-[#FAFAFC] space-y-3">
          <div className="flex items-start gap-2 text-[11px] text-[#73758A] text-left">
            <ShieldCheck className="w-4 h-4 text-[#17865D] shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> Saved items are kept in this prototype session. Saving an activity does not reserve a spot or booking.
            </span>
          </div>

          <Button
            variant="outline"
            size="md"
            className="w-full bg-white"
            onClick={() => {
              onClose();
              onExploreMore();
            }}
          >
            Explore more activities
          </Button>
        </div>
      </div>
    </div>
  );
};
