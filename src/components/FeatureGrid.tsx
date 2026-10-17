import React, { useState } from 'react';
import { Compass, Bookmark, Share2, Sparkles } from 'lucide-react';
import { ACTIVITIES } from '../data/activities';

interface FeatureGridProps {
  onExploreClick?: () => void;
  onOpenSavedList: () => void;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  onOpenSavedList,
}) => {
  const [activeChip, setActiveChip] = useState<'Walk' | 'Food' | 'Art'>('Walk');
  const [mockShareCopied, setMockShareCopied] = useState(false);

  const handleMockShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMockShareCopied(true);
    setTimeout(() => setMockShareCopied(false), 2000);
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-[#FAFAFC] scroll-mt-20 border-y border-[#E6E7EF]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#6F86F8] uppercase tracking-wider block mb-2">
            Built for discovery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17183F] font-heading tracking-tight mb-4">
            Discover more with a little less effort.
          </h2>
          <p className="text-base sm:text-lg text-[#73758A] leading-relaxed">
            Everything you need to find something interesting, save it for later, and decide what comes next.
          </p>
        </div>

        {/* TOP ROW: Two Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 text-left mb-6 lg:mb-8">
          
          {/* Large Card 1: Browse before you sign up */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E6E7EF] shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EEF1FF] flex items-center justify-center text-[#6F86F8] mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#17183F] font-heading mb-3">
                Browse before you sign up
              </h3>
              <p className="text-sm sm:text-base text-[#73758A] leading-relaxed mb-6">
                Explore local activities, discover new interests, and see what catches your attention before creating an account.
              </p>
            </div>

            {/* Interactive Visual: Mini category chips + mini feed */}
            <div className="bg-[#FAFAFC] rounded-2xl p-4 border border-[#E6E7EF] space-y-3">
              <div className="flex gap-2">
                {(['Walk', 'Food', 'Art'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveChip(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                      activeChip === cat
                        ? 'bg-[#6F86F8] text-white'
                        : 'bg-white text-[#73758A] border border-[#E6E7EF]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Dynamic activity snippet based on active chip */}
              {(() => {
                const act = ACTIVITIES.find((a) => a.category === activeChip) || ACTIVITIES[0];
                return (
                  <div className="bg-white rounded-xl p-3 border border-[#E6E7EF] flex gap-3 items-center">
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold text-[#6F86F8] uppercase">
                        {act.category}
                      </span>
                      <h4 className="font-bold text-xs text-[#17183F] truncate">
                        {act.title}
                      </h4>
                      <p className="text-[11px] text-[#73758A] truncate">{act.description}</p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Large Card 2: Save what you love */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E6E7EF] shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EEF1FF] flex items-center justify-center text-[#6F86F8] mb-6">
                <Bookmark className="w-6 h-6 fill-[#6F86F8]" />
              </div>
              <h3 className="text-2xl font-bold text-[#17183F] font-heading mb-3">
                Save what you love
              </h3>
              <p className="text-sm sm:text-base text-[#73758A] leading-relaxed mb-6">
                Found something worth trying? Create a free account to keep that activity in your personal list.
              </p>
            </div>

            {/* Visual: Activity card with save action & account explanation callout */}
            <div className="bg-[#FAFAFC] rounded-2xl p-4 border border-[#E6E7EF] space-y-2.5">
              <div className="bg-white rounded-xl p-3 border border-[#E6E7EF] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF1FF] flex items-center justify-center text-[#6F86F8]">
                    <Bookmark className="w-4 h-4 fill-[#6F86F8]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#17183F] block">
                      Keep this activity handy
                    </span>
                    <span className="text-[10px] text-[#73758A]">
                      Create a free account to keep your discoveries
                    </span>
                  </div>
                </div>
                <span className="text-[10px] bg-[#6F86F8] text-white font-semibold px-2.5 py-1 rounded-full">
                  Free
                </span>
              </div>
              <div className="text-[10px] text-[#73758A] flex items-center gap-1.5 pl-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#17865D]" />
                <span>No phone numbers, payment details, or paywalls required.</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: Three Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
          
          {/* Small Card 1: Explore your way */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E6E7EF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EEF1FF] flex items-center justify-center text-[#6F86F8] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#17183F] font-heading mb-2">
                Explore your way
              </h4>
              <p className="text-sm text-[#73758A] leading-relaxed mb-4">
                Choose from walks, food experiences, and creative activities.
              </p>
            </div>
            {/* Visual: Chips */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#EEF1FF] text-[#6F86F8]">
                🌿 Walk
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FFF3E8] text-[#D97706]">
                ☕ Food
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#F3E8FF] text-[#9333EA]">
                🎨 Art
              </span>
            </div>
          </div>

          {/* Small Card 2: Keep a personal list */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E6E7EF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EEF1FF] flex items-center justify-center text-[#6F86F8] mb-4">
                <Bookmark className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#17183F] font-heading mb-2">
                Keep a personal list
              </h4>
              <p className="text-sm text-[#73758A] leading-relaxed mb-4">
                Bring your favourite discoveries together in one place.
              </p>
            </div>
            {/* Visual: Mini saved preview */}
            <div
              onClick={onOpenSavedList}
              className="bg-[#FAFAFC] p-2.5 rounded-xl border border-[#E6E7EF] flex items-center justify-between cursor-pointer hover:bg-[#EEF1FF]/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#17865D]" />
                <span className="text-xs font-medium text-[#17183F]">Personal saved queue</span>
              </div>
              <span className="text-xs font-bold text-[#6F86F8]">View →</span>
            </div>
          </div>

          {/* Small Card 3: Share a discovery */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E6E7EF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EEF1FF] flex items-center justify-center text-[#6F86F8] mb-4">
                <Share2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#17183F] font-heading mb-2">
                Share a discovery
              </h4>
              <p className="text-sm text-[#73758A] leading-relaxed mb-4">
                Share an activity link with a friend when you find something worth doing together.
              </p>
            </div>
            {/* Visual: Copyable share element */}
            <div className="bg-[#FAFAFC] p-2.5 rounded-xl border border-[#E6E7EF] flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#73758A] truncate">
                looply.local/activity/...
              </span>
              <button
                onClick={handleMockShare}
                className="text-xs font-bold text-[#6F86F8] hover:text-[#5B74EC] ml-2 shrink-0 cursor-pointer"
              >
                {mockShareCopied ? 'Copied!' : 'Copy link'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
