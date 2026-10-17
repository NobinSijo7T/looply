import React, { useState } from 'react';
import { Compass, Bookmark, Share2, Sparkles } from 'lucide-react';
import { ACTIVITIES } from '../data/activities';
import { APP_SCREENSHOTS, type AppScreenshotItem } from '../data/appScreenshots';
import { PhoneFrame } from './common/PhoneFrame';

interface FeatureGridProps {
  onExploreClick?: () => void;
  onOpenSavedList: () => void;
  onPreviewMockup?: (screenshot: AppScreenshotItem) => void;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  onOpenSavedList,
  onPreviewMockup,
}) => {
  const [activeChip, setActiveChip] = useState<'Walk' | 'Food' | 'Art'>('Walk');
  const [mockShareCopied, setMockShareCopied] = useState(false);
  const [browseScreen, setBrowseScreen] = useState<'homescreen' | 'eventMap'>('homescreen');

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

        {/* TOP ROW: Two Large Cards with Real App Mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 text-left mb-6 lg:mb-8">
          
          {/* Large Card 1: Browse before you sign up (Features Homescreen & Map View Mockups) */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E6E7EF] shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-200 overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF1FF] flex items-center justify-center text-[#6F86F8]">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 bg-[#FAFAFC] border border-[#E6E7EF] p-1 rounded-full text-xs font-semibold">
                  <button
                    onClick={() => setBrowseScreen('homescreen')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      browseScreen === 'homescreen'
                        ? 'bg-[#17183F] text-white shadow-xs'
                        : 'text-[#73758A] hover:text-[#17183F]'
                    }`}
                  >
                    Feed
                  </button>
                  <button
                    onClick={() => setBrowseScreen('eventMap')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      browseScreen === 'eventMap'
                        ? 'bg-[#17183F] text-white shadow-xs'
                        : 'text-[#73758A] hover:text-[#17183F]'
                    }`}
                  >
                    Map
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#17183F] font-heading mb-3">
                Browse before you sign up
              </h3>
              <p className="text-sm sm:text-base text-[#73758A] leading-relaxed mb-6">
                Explore local activities, discover new interests, and see what catches your attention before creating an account.
              </p>
            </div>

            {/* Interactive Visual with Phone Mockup */}
            <div className="bg-gradient-to-b from-[#FAFAFC] to-[#EEF1FF]/30 rounded-2xl p-5 border border-[#E6E7EF] flex flex-col sm:flex-row items-center gap-5">
              {/* Cropped Mockup Preview */}
              <div
                onClick={() => onPreviewMockup?.(APP_SCREENSHOTS[browseScreen])}
                className="w-36 sm:w-40 shrink-0 cursor-pointer hover:scale-105 transition-transform"
                title="Click to view full screen"
              >
                <PhoneFrame
                  src={APP_SCREENSHOTS[browseScreen].src}
                  alt={APP_SCREENSHOTS[browseScreen].alt}
                  badge={browseScreen === 'homescreen' ? 'Feed' : 'Map'}
                  innerClassName="max-h-[220px]"
                />
              </div>

              {/* Dynamic activity categories preview */}
              <div className="flex-1 min-w-0 space-y-3 w-full">
                <span className="text-[11px] font-bold text-[#6F86F8] uppercase tracking-wider block">
                  Quick Category Filters
                </span>
                <div className="flex flex-wrap gap-1.5">
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
                    <div className="bg-white rounded-xl p-3 border border-[#E6E7EF] flex gap-3 items-center shadow-xs">
                      <img
                        src={act.image}
                        alt={act.title}
                        className="w-12 h-12 rounded-lg object-cover shrink-0"
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

                <div className="text-[10px] text-[#73758A] flex items-center gap-1.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#17865D]" />
                  <span>No login needed to explore any listing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Large Card 2: Save what you love (Features 3.png Mockup) */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E6E7EF] shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-200 overflow-hidden group">
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

            {/* Visual: Real Step 3 App Screen Mockup ("Found Something You Love?") */}
            <div className="bg-gradient-to-b from-[#FAFAFC] to-[#BDF4DE]/20 rounded-2xl p-5 border border-[#E6E7EF] flex flex-col sm:flex-row items-center gap-5">
              {/* Phone Mockup of 3.png */}
              <div
                onClick={() => onPreviewMockup?.(APP_SCREENSHOTS.stepSave)}
                className="w-36 sm:w-40 shrink-0 cursor-pointer hover:scale-105 transition-transform"
                title="Click to view full screen"
              >
                <PhoneFrame
                  src={APP_SCREENSHOTS.stepSave.src}
                  alt={APP_SCREENSHOTS.stepSave.alt}
                  badge="Save Flow"
                  innerClassName="max-h-[220px]"
                />
              </div>

              {/* Explanatory callout */}
              <div className="flex-1 min-w-0 space-y-3 w-full">
                <div className="bg-white rounded-xl p-3.5 border border-[#E6E7EF] shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-[#BDF4DE] flex items-center justify-center text-[#17865D] text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-xs font-bold text-[#17183F]">
                      Curate into your pocket list
                    </span>
                  </div>
                  <p className="text-xs text-[#73758A] leading-relaxed">
                    Tap the bookmark on any walk, dish, or exhibition to save it instantly into your personal collection.
                  </p>
                </div>

                <div className="text-[10px] text-[#73758A] flex items-center gap-1.5 pl-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#17865D]" />
                  <span>Free account · No credit cards or spam required</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: Three Cards Featuring Focused Real Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
          
          {/* Small Card 1: Explore your way (Features Saved Favorites Artwork) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E6E7EF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
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

            {/* Visual: High-res Curated Trinity Artwork */}
            <div
              onClick={() => onPreviewMockup?.(APP_SCREENSHOTS.favoritesArtwork)}
              className="bg-[#FAFAFC] p-3 rounded-2xl border border-[#E6E7EF] cursor-pointer hover:border-[#6F86F8]/40 transition-all flex items-center justify-center overflow-hidden"
              title="Click to view artwork"
            >
              <img
                src={APP_SCREENSHOTS.favoritesArtwork.src}
                alt={APP_SCREENSHOTS.favoritesArtwork.alt}
                className="w-full max-h-36 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3">
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

          {/* Small Card 2: Keep a personal list (Features Saved List Screenshot) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E6E7EF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
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

            {/* Visual: Real Saved List Mockup Snippet */}
            <div
              onClick={onOpenSavedList}
              className="bg-[#FAFAFC] p-3 rounded-2xl border border-[#E6E7EF] cursor-pointer hover:bg-[#EEF1FF]/30 transition-all space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#17865D]" />
                  <span className="text-xs font-bold text-[#17183F]">Personal saved queue</span>
                </div>
                <span className="text-xs font-bold text-[#6F86F8] group-hover:translate-x-1 transition-transform">
                  View →
                </span>
              </div>

              {/* Mini crop of real Saved List screenshot */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onPreviewMockup?.(APP_SCREENSHOTS.savedList);
                }}
                className="rounded-xl overflow-hidden border border-[#E6E7EF] max-h-28 shadow-inner"
              >
                <img
                  src={APP_SCREENSHOTS.savedList.src}
                  alt={APP_SCREENSHOTS.savedList.alt}
                  className="w-full object-cover -translate-y-12"
                />
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#73758A]">
              Tap to open your live saved drawer
            </div>
          </div>

          {/* Small Card 3: Share a discovery (Features Event Saved confirmation) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E6E7EF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
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

            {/* Visual: Event Saved Screen Crop showcasing the Share action */}
            <div
              onClick={() => onPreviewMockup?.(APP_SCREENSHOTS.eventSaved)}
              className="bg-[#FAFAFC] p-3 rounded-2xl border border-[#E6E7EF] cursor-pointer hover:border-[#6F86F8]/40 transition-all space-y-2 overflow-hidden"
              title="Click to view confirmation modal mockup"
            >
              <div className="rounded-xl overflow-hidden border border-[#E6E7EF] max-h-28 shadow-inner">
                <img
                  src={APP_SCREENSHOTS.eventSaved.src}
                  alt={APP_SCREENSHOTS.eventSaved.alt}
                  className="w-full object-cover -translate-y-20"
                />
              </div>

              {/* Copyable share link element */}
              <div className="bg-white p-2 rounded-xl border border-[#E6E7EF] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#73758A] truncate">
                  looply.local/sunset-walk
                </span>
                <button
                  onClick={handleMockShare}
                  className="text-xs font-bold text-[#6F86F8] hover:text-[#5B74EC] ml-2 shrink-0 cursor-pointer"
                >
                  {mockShareCopied ? 'Copied!' : 'Copy link'}
                </button>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#73758A]">
              Send direct invites with no app install needed
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
