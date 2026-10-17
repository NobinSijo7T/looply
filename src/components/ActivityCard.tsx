import React from 'react';
import type { Activity } from '../types';
import { Bookmark, Clock, MapPin, Sparkles } from 'lucide-react';

interface ActivityCardProps {
  activity: Activity;
  isSaved: boolean;
  onSaveToggle: (activity: Activity) => void;
  onCardClick: (activity: Activity) => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  isSaved,
  onSaveToggle,
  onCardClick,
}) => {
  const categoryColors = {
    Walk: 'bg-[#EEF1FF] text-[#6F86F8] border-[#D5D8E8]',
    Food: 'bg-[#FFF3E8] text-[#D97706] border-[#FED7AA]',
    Art: 'bg-[#F3E8FF] text-[#9333EA] border-[#E9D5FF]',
  };

  return (
    <div
      onClick={() => onCardClick(activity)}
      className="group bg-white rounded-2xl border border-[#E6E7EF] overflow-hidden shadow-xs hover:shadow-xl hover:shadow-[#6F86F8]/10 hover:border-[#6F86F8]/40 transition-all duration-200 flex flex-col text-left cursor-pointer relative"
    >
      {/* Image container */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
        <img
          src={activity.image}
          alt={activity.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: activity.fallbackGradient }}
        />

        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-xs border ${
              categoryColors[activity.category]
            }`}
          >
            {activity.category}
          </span>
        </div>

        {/* Save Bookmark Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSaveToggle(activity);
          }}
          className={`absolute top-3.5 right-3.5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
            isSaved
              ? 'bg-[#6F86F8] text-white scale-105 ring-2 ring-white'
              : 'bg-white/90 backdrop-blur-md text-[#73758A] hover:text-[#6F86F8] hover:bg-white'
          }`}
          aria-label={isSaved ? `Remove ${activity.title} from saved` : `Save ${activity.title}`}
          title={isSaved ? 'Saved to your list' : 'Save this activity'}
        >
          <Bookmark
            className={`w-5 h-5 transition-transform ${isSaved ? 'fill-white stroke-white' : ''}`}
          />
        </button>

        {/* Duration badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md">
          <Clock className="w-3.5 h-3.5" />
          <span>{activity.duration}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#73758A] mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#6F86F8] shrink-0" />
            <span className="truncate">{activity.locationHint}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#17183F] font-heading leading-tight group-hover:text-[#6F86F8] transition-colors mb-2">
            {activity.title}
          </h3>

          <p className="text-sm text-[#73758A] leading-relaxed mb-4">
            {activity.description}
          </p>
        </div>

        <div className="pt-3 border-t border-[#F0F1F6] flex items-center justify-between text-xs text-[#73758A]">
          <span className="font-medium text-[#17183F] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#6F86F8]" />
            {activity.vibe}
          </span>
          <span className="font-semibold text-[#6F86F8] group-hover:underline">
            View details →
          </span>
        </div>
      </div>
    </div>
  );
};
