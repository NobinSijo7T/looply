import React from 'react';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { APP_SCREENSHOTS, type AppScreenshotItem } from '../data/appScreenshots';

interface HowItWorksProps {
  onPreviewMockup?: (screenshot: AppScreenshotItem) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onPreviewMockup }) => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12">
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

        {/* Discovery Journey Feature Banner (Features Discover Your Local Adventures Illustration) */}
        <div
          onClick={() => onPreviewMockup?.(APP_SCREENSHOTS.discoverJourney)}
          className="bg-gradient-to-r from-[#EEF1FF] via-[#FAFAFC] to-[#EEF1FF] rounded-3xl p-6 sm:p-8 border border-[#E6E7EF] mb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-left cursor-pointer hover:border-[#6F86F8]/40 transition-all group shadow-xs"
          title="Click to view full illustration"
        >
          <div className="space-y-3 max-w-lg">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#6F86F8] text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A Winding Path of Discovery</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17183F] font-heading leading-snug">
              Follow the loop of local life.
            </h3>
            <p className="text-sm text-[#73758A] leading-relaxed">
              Step out of routine and follow gentle pins toward coastal trails, fragrant specialty coffee, and neighborhood ceramics studios.
            </p>
          </div>

          <div className="w-full md:w-auto md:max-w-md shrink-0 overflow-hidden rounded-2xl">
            <img
              src={APP_SCREENSHOTS.discoverJourney.src}
              alt={APP_SCREENSHOTS.discoverJourney.alt}
              className="w-full h-auto max-h-56 object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* 3 Step Cards Grid with Real App Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative">
          
          {/* STEP 1: Discover (Features Homescreen Mockup) */}
          <div className="bg-[#FAFAFC] rounded-3xl p-6 sm:p-7 border border-[#E6E7EF] flex flex-col justify-between hover:border-[#6F86F8]/30 hover:shadow-lg transition-all duration-200 group">
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
                Browse local activities freely and explore Walk, Food, and Art without being forced to sign up first.
              </p>
            </div>

            {/* Real App Mockup Preview */}
            <div
              onClick={() => onPreviewMockup?.(APP_SCREENSHOTS.homescreen)}
              className="bg-white rounded-2xl p-4 border border-[#E6E7EF] shadow-xs cursor-pointer hover:border-[#6F86F8]/40 transition-all flex flex-col items-center"
              title="Click to view Homescreen"
            >
              <div className="w-40 overflow-hidden rounded-2xl max-h-52 shadow-inner">
                <img
                  src={APP_SCREENSHOTS.homescreen.src}
                  alt={APP_SCREENSHOTS.homescreen.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-[11px] font-semibold text-[#6F86F8] mt-3 inline-flex items-center gap-1">
                <span>Discovery Feed Screen</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>

          {/* STEP 2: Save an activity (Features 3.png Mockup) */}
          <div className="bg-[#FAFAFC] rounded-3xl p-6 sm:p-7 border border-[#E6E7EF] flex flex-col justify-between hover:border-[#6F86F8]/30 hover:shadow-lg transition-all duration-200 group">
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
                Found something you like? Tap Save. We’ll explain why a quick free account is needed to preserve your list.
              </p>
            </div>

            {/* Real App Mockup Preview */}
            <div
              onClick={() => onPreviewMockup?.(APP_SCREENSHOTS.stepSave)}
              className="bg-white rounded-2xl p-4 border border-[#E6E7EF] shadow-xs cursor-pointer hover:border-[#6F86F8]/40 transition-all flex flex-col items-center"
              title="Click to view Onboarding Step 3"
            >
              <div className="w-40 overflow-hidden rounded-2xl max-h-52 shadow-inner">
                <img
                  src={APP_SCREENSHOTS.stepSave.src}
                  alt={APP_SCREENSHOTS.stepSave.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-[11px] font-semibold text-[#6F86F8] mt-3 inline-flex items-center gap-1">
                <span>"Found Something You Love?"</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>

          {/* STEP 3: Come back to it (Features Event Saved Mockup) */}
          <div className="bg-[#FAFAFC] rounded-3xl p-6 sm:p-7 border border-[#E6E7EF] flex flex-col justify-between hover:border-[#6F86F8]/30 hover:shadow-lg transition-all duration-200 group">
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
                Receive instant confirmation and find your saved activities waiting in your personal list whenever you plan your day.
              </p>
            </div>

            {/* Real App Mockup Preview */}
            <div
              onClick={() => onPreviewMockup?.(APP_SCREENSHOTS.eventSaved)}
              className="bg-white rounded-2xl p-4 border border-[#BDF4DE] shadow-xs cursor-pointer hover:border-[#17865D]/50 transition-all flex flex-col items-center"
              title="Click to view Saved confirmation"
            >
              <div className="w-40 overflow-hidden rounded-2xl max-h-52 shadow-inner">
                <img
                  src={APP_SCREENSHOTS.eventSaved.src}
                  alt={APP_SCREENSHOTS.eventSaved.alt}
                  className="w-full object-cover -translate-y-8 group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-[11px] font-semibold text-[#17865D] mt-3 inline-flex items-center gap-1">
                <span>Saved Confirmation Modal</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
