import React, { useState } from 'react';
import type { Activity, Category } from '../types';
import { ActivityCard } from './ActivityCard';
import { ACTIVITIES } from '../data/activities';
import { Info } from 'lucide-react';

interface ActivityDiscoveryProps {
  savedActivityIds: string[];
  onSaveToggle: (activity: Activity) => void;
  onSelectActivity: (activity: Activity) => void;
}

export const ActivityDiscovery: React.FC<ActivityDiscoveryProps> = ({
  savedActivityIds,
  onSaveToggle,
  onSelectActivity,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const categories: { label: string; value: Category; count: number }[] = [
    { label: 'All activities', value: 'All', count: ACTIVITIES.length },
    { label: 'Walk', value: 'Walk', count: ACTIVITIES.filter((a) => a.category === 'Walk').length },
    { label: 'Food', value: 'Food', count: ACTIVITIES.filter((a) => a.category === 'Food').length },
    { label: 'Art', value: 'Art', count: ACTIVITIES.filter((a) => a.category === 'Art').length },
  ];

  const filteredActivities =
    selectedCategory === 'All'
      ? ACTIVITIES
      : ACTIVITIES.filter((a) => a.category === selectedCategory);

  return (
    <section id="discovery" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#6F86F8] uppercase tracking-wider block mb-2">
            Local Discovery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17183F] font-heading tracking-tight mb-4">
            Your next favourite thing is closer than you think.
          </h2>
          <p className="text-base sm:text-lg text-[#73758A] leading-relaxed">
            From a refreshing walk to a new food spot or a creative afternoon, discover activities that fit your mood.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-150 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#6F86F8] text-white shadow-sm shadow-[#6F86F8]/20 scale-105'
                    : 'bg-[#FAFAFC] text-[#73758A] hover:text-[#17183F] hover:bg-[#EEF1FF] border border-[#E6E7EF]'
                }`}
                aria-pressed={isActive}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white font-bold'
                      : 'bg-[#E6E7EF] text-[#73758A]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left mb-8">
          {filteredActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              isSaved={savedActivityIds.includes(activity.id)}
              onSaveToggle={onSaveToggle}
              onCardClick={onSelectActivity}
            />
          ))}
        </div>

        {/* Reassurance Notice */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFC] border border-[#E6E7EF] text-xs text-[#73758A]">
          <Info className="w-3.5 h-3.5 text-[#6F86F8] shrink-0" />
          <span>
            Illustrative sample activities. Saving an activity keeps it in your list; it does not reserve a spot or ticket.
          </span>
        </div>
      </div>
    </section>
  );
};
