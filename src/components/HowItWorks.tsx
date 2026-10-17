import React from 'react';
import { Bookmark, CheckCircle2 } from 'lucide-react';
import { ACTIVITIES } from '../data/activities';

export const HowItWorks: React.FC = () => {
  const sampleActivity = ACTIVITIES[0];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#6F86F8] uppercase tracking-wider block mb-2">
            The Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17183F] font-heading tracking-tight mb-4">
            From curious to saved in a few simple steps.
          </h2>
          <p className="text-base sm:text-lg text-[#73758A] leading-relaxed">
            No account required to explore. Just save something when it feels right.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative">
          
          {/* STEP 1: Discover */}
          <div className="bg-[#FAFAFC] rounded-3xl p-6 sm:p-7 border border-[#E6E7EF] flex flex-col justify-between hover:border-[#6F86F8]/30 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-8 h-8 rounded-full bg-[#17183F] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <span className="text-xs font-bold text-[#6F86F8] bg-[#EEF1FF] px-2.5 py-1 rounded-full">
                  Step 01
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#17183F] font-heading mb-2">
                Discover
              </h3>
              <p className="text-sm text-[#73758A] leading-relaxed mb-6">
                Browse local activities and explore Walk, Food, and Art.
              </p>
            </div>

            {/* Illustration: Miniature discovery feed */}
            <div className="bg-white rounded-2xl p-3 border border-[#E6E7EF] shadow-xs space-y-2.5">
              <div className="flex gap-1.5 pb-2 border-b border-[#F0F1F6]">
                <span className="text-[10px] bg-[#6F86F8] text-white px-2 py-0.5 rounded-full font-bold">
                  All
                </span>
                <span className="text-[10px] bg-[#FAFAFC] text-[#73758A] px-2 py-0.5 rounded-full">
                  Walk
                </span>
                <span className="text-[10px] bg-[#FAFAFC] text-[#73758A] px-2 py-0.5 rounded-full">
                  Food
                </span>
                <span className="text-[10px] bg-[#FAFAFC] text-[#73758A] px-2 py-0.5 rounded-full">
                  Art
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src={sampleActivity.image}
                  alt={sampleActivity.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <h5 className="font-bold text-xs text-[#17183F] truncate">
                    {sampleActivity.title}
                  </h5>
                  <span className="text-[10px] text-[#73758A]">{sampleActivity.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2: Save an activity */}
          <div className="bg-[#FAFAFC] rounded-3xl p-6 sm:p-7 border border-[#E6E7EF] flex flex-col justify-between hover:border-[#6F86F8]/30 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-8 h-8 rounded-full bg-[#6F86F8] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <span className="text-xs font-bold text-[#6F86F8] bg-[#EEF1FF] px-2.5 py-1 rounded-full">
                  Step 02
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#17183F] font-heading mb-2">
                Save an activity
              </h3>
              <p className="text-sm text-[#73758A] leading-relaxed mb-6">
                Find something you like and tap Save. We'll explain why a free account is needed.
              </p>
            </div>

            {/* Illustration: Save action + explanation callout */}
            <div className="bg-white rounded-2xl p-3 border border-[#E6E7EF] shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#17183F]">
                  Keep this activity handy
                </span>
                <div className="w-6 h-6 rounded-full bg-[#EEF1FF] text-[#6F86F8] flex items-center justify-center">
                  <Bookmark className="w-3.5 h-3.5 fill-[#6F86F8]" />
                </div>
              </div>
              <p className="text-[10px] text-[#73758A] leading-tight">
                Create a free account to save this to your personal list.
              </p>
              <div className="text-[9px] bg-[#EEF1FF] text-[#6F86F8] py-1 px-2 rounded-lg font-semibold text-center">
                Short email & password only
              </div>
            </div>
          </div>

          {/* STEP 3: Come back to it */}
          <div className="bg-[#FAFAFC] rounded-3xl p-6 sm:p-7 border border-[#E6E7EF] flex flex-col justify-between hover:border-[#6F86F8]/30 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-8 h-8 rounded-full bg-[#17865D] text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <span className="text-xs font-bold text-[#17865D] bg-[#BDF4DE] px-2.5 py-1 rounded-full">
                  Step 03
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#17183F] font-heading mb-2">
                Come back to it
              </h3>
              <p className="text-sm text-[#73758A] leading-relaxed mb-6">
                Create your account and find your saved activity in your personal list.
              </p>
            </div>

            {/* Illustration: Success state + saved item */}
            <div className="bg-white rounded-2xl p-3 border border-[#BDF4DE] shadow-xs space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#17865D]">
                <CheckCircle2 className="w-4 h-4 text-[#17865D]" />
                <span>Saved to your personal list</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-[#FAFAFC] rounded-lg">
                <span className="w-2 h-2 rounded-full bg-[#17865D]" />
                <span className="text-[10px] text-[#202139] truncate font-medium">
                  {sampleActivity.title}
                </span>
              </div>
              <span className="text-[9px] text-[#73758A] block">
                Ready whenever you're planning your day
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
