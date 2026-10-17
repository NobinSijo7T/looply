import React from 'react';
import { Button } from './common/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ACTIVITIES } from '../data/activities';

interface FinalCTAProps {
  onExploreClick: () => void;
  onHowItWorksClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onExploreClick,
  onHowItWorksClick,
}) => {
  const walkActivity = ACTIVITIES[0];
  const foodActivity = ACTIVITIES[1];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner container with pale lavender/blue background */}
        <div className="bg-[#EEF1FF] rounded-[36px] border border-[#D5D8E8] p-8 sm:p-12 lg:p-16 overflow-hidden relative shadow-sm">
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#6F86F8]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#BDF4DE]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Headline and CTAs */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#6F86F8] text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready whenever you are</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17183F] font-heading tracking-tight leading-[1.15]">
                Find your next favourite thing.
              </h2>

              <p className="text-base sm:text-lg text-[#73758A] max-w-xl leading-relaxed">
                Discover local activities, save the ones you love, and make room for something new.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onExploreClick}
                  className="w-full sm:w-auto"
                >
                  Explore activities
                </Button>

                <button
                  onClick={onHowItWorksClick}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#17183F] hover:text-[#6F86F8] px-2 py-1 transition-colors cursor-pointer"
                >
                  <span>See how it works</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-2 text-xs text-[#73758A] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#17865D]" />
                <span>Free to explore · No credit card or booking required</span>
              </div>
            </div>

            {/* Right Column: Cropped Mobile App Preview */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[320px] bg-[#17183F] p-3 rounded-[36px] shadow-2xl border-4 border-[#17183F] transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-[26px] overflow-hidden p-4 space-y-3 text-left">
                  {/* Phone Header */}
                  <div className="flex justify-between items-center pb-2 border-b border-[#F0F1F6]">
                    <span className="font-heading font-extrabold text-xs text-[#17183F]">
                      looply
                    </span>
                    <span className="text-[10px] bg-[#EEF1FF] text-[#6F86F8] font-bold px-2 py-0.5 rounded-full">
                      Feed
                    </span>
                  </div>

                  {/* Filter chips preview */}
                  <div className="flex gap-1.5">
                    <span className="text-[10px] font-bold bg-[#6F86F8] text-white px-2 py-0.5 rounded-full">
                      All
                    </span>
                    <span className="text-[10px] bg-[#FAFAFC] text-[#73758A] px-2 py-0.5 rounded-full border border-[#E6E7EF]">
                      Walk
                    </span>
                    <span className="text-[10px] bg-[#FAFAFC] text-[#73758A] px-2 py-0.5 rounded-full border border-[#E6E7EF]">
                      Food
                    </span>
                    <span className="text-[10px] bg-[#FAFAFC] text-[#73758A] px-2 py-0.5 rounded-full border border-[#E6E7EF]">
                      Art
                    </span>
                  </div>

                  {/* Activity preview snippet 1 */}
                  <div className="bg-[#FAFAFC] p-2 rounded-xl border border-[#E6E7EF] flex gap-2.5 items-center">
                    <img
                      src={walkActivity.image}
                      alt={walkActivity.title}
                      className="w-11 h-11 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-[9px] text-[#6F86F8] font-bold uppercase block">
                        Walk
                      </span>
                      <h5 className="font-bold text-xs text-[#17183F] truncate">
                        {walkActivity.title}
                      </h5>
                      <span className="text-[10px] text-[#73758A]">{walkActivity.duration}</span>
                    </div>
                  </div>

                  {/* Activity preview snippet 2 */}
                  <div className="bg-[#FAFAFC] p-2 rounded-xl border border-[#E6E7EF] flex gap-2.5 items-center">
                    <img
                      src={foodActivity.image}
                      alt={foodActivity.title}
                      className="w-11 h-11 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-[9px] text-[#D97706] font-bold uppercase block">
                        Food
                      </span>
                      <h5 className="font-bold text-xs text-[#17183F] truncate">
                        {foodActivity.title}
                      </h5>
                      <span className="text-[10px] text-[#73758A]">{foodActivity.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
