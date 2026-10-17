import React, { useState } from 'react';
import { APP_SCREENSHOTS, type AppScreenshotItem } from '../data/appScreenshots';
import { Compass, MapPin, Bookmark, Calendar, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { PhoneFrame } from './common/PhoneFrame';

interface DeviceMockupsProps {
  savedCount?: number;
  onPreviewMockup?: (screenshot: AppScreenshotItem) => void;
}

export const DeviceMockups: React.FC<DeviceMockupsProps> = ({
  savedCount = 1,
  onPreviewMockup,
}) => {
  // Screen switcher for the center hero phone
  const [activeCenterScreen, setActiveCenterScreen] = useState<
    'homescreen' | 'eventMap' | 'savedList' | 'eventCalendar' | 'eventSaved' | 'onboarding'
  >('homescreen');

  const screenOptions = [
    { key: 'homescreen' as const, label: 'Discovery Feed', icon: Compass, item: APP_SCREENSHOTS.homescreen },
    { key: 'eventMap' as const, label: 'Event Map', icon: MapPin, item: APP_SCREENSHOTS.eventMap },
    { key: 'savedList' as const, label: 'Saved List', icon: Bookmark, item: APP_SCREENSHOTS.savedList },
    { key: 'eventCalendar' as const, label: 'Calendar', icon: Calendar, item: APP_SCREENSHOTS.eventCalendar },
    { key: 'eventSaved' as const, label: 'Saved Modal', icon: CheckCircle2, item: APP_SCREENSHOTS.eventSaved },
  ];

  const currentCenterScreenshot = APP_SCREENSHOTS[activeCenterScreen];

  return (
    <div className="relative w-full max-w-6xl mx-auto pt-6 pb-12 px-4 select-none">
      {/* Decorative ambient radial backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl h-72 bg-radial from-[#6F86F8]/15 via-[#EEF1FF]/60 to-transparent rounded-full -z-10 blur-3xl opacity-80" />

      {/* Screen Selector Pills for Interactive Preview */}
      <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-8 flex-wrap">
        <span className="text-xs font-bold text-[#73758A] flex items-center gap-1.5 mr-1 hidden sm:inline-flex">
          <Sparkles className="w-3.5 h-3.5 text-[#6F86F8]" />
          <span>Interactive Preview:</span>
        </span>
        {screenOptions.map((opt) => {
          const Icon = opt.icon;
          const isActive = activeCenterScreen === opt.key;
          return (
            <button
              key={opt.key}
              onClick={() => setActiveCenterScreen(opt.key)}
              className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#17183F] text-white shadow-md shadow-[#17183F]/20 scale-105'
                  : 'bg-white text-[#73758A] hover:text-[#17183F] hover:bg-[#EEF1FF] border border-[#E6E7EF]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#6F86F8]' : 'text-[#73758A]'}`} />
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3-Device Hero Stage */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 relative">
        
        {/* LEFT PHONE: Event Map View (Tilted/Angled in background) */}
        <div
          onClick={() => {
            if (onPreviewMockup) onPreviewMockup(APP_SCREENSHOTS.eventMap);
            else setActiveCenterScreen('eventMap');
          }}
          className="w-full max-w-[270px] lg:w-[275px] lg:-mr-10 lg:scale-[0.92] lg:-rotate-3 lg:hover:rotate-0 lg:hover:scale-100 transition-all duration-300 z-10 hidden sm:block cursor-pointer group"
          title="Click to inspect Event Map"
        >
          <PhoneFrame
            src={APP_SCREENSHOTS.eventMap.src}
            alt={APP_SCREENSHOTS.eventMap.alt}
            badge="Event Map"
            showGlow={false}
            className="w-full"
          />
          <div className="text-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[11px] font-semibold text-[#6F86F8] bg-white px-2.5 py-1 rounded-full border border-[#E6E7EF] shadow-xs inline-flex items-center gap-1">
              <span>View Map</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* CENTER PHONE: Active Selected Screen (Prominent centerpiece) */}
        <div
          onClick={() => {
            if (onPreviewMockup) onPreviewMockup(currentCenterScreenshot);
          }}
          className="w-full max-w-[315px] lg:w-[325px] z-20 transition-transform duration-300 hover:scale-[1.02] cursor-pointer group"
          title="Click to view full screen details"
        >
          <PhoneFrame
            src={currentCenterScreenshot.src}
            alt={currentCenterScreenshot.alt}
            badge={currentCenterScreenshot.badge}
            showGlow={true}
            glowColor="rgba(111, 134, 248, 0.3)"
            className="w-full"
          />

          <div className="text-center mt-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-[#E6E7EF] text-[11px] font-medium text-[#17183F] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#17865D] animate-pulse" />
              <span>{currentCenterScreenshot.title}</span>
              <span className="text-[#73758A]">· Tap to enlarge</span>
            </div>
          </div>
        </div>

        {/* RIGHT PHONE: Personal Saved List (Tilted/Angled in background) */}
        <div
          onClick={() => {
            if (onPreviewMockup) onPreviewMockup(APP_SCREENSHOTS.savedList);
            else setActiveCenterScreen('savedList');
          }}
          className="w-full max-w-[270px] lg:w-[275px] lg:-ml-10 lg:scale-[0.92] lg:rotate-3 lg:hover:rotate-0 lg:hover:scale-100 transition-all duration-300 z-10 hidden sm:block cursor-pointer group"
          title="Click to inspect Saved List"
        >
          <PhoneFrame
            src={APP_SCREENSHOTS.savedList.src}
            alt={APP_SCREENSHOTS.savedList.alt}
            badge={`Saved List (${savedCount})`}
            showGlow={false}
            className="w-full"
          />
          <div className="text-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[11px] font-semibold text-[#6F86F8] bg-white px-2.5 py-1 rounded-full border border-[#E6E7EF] shadow-xs inline-flex items-center gap-1">
              <span>View Saved List</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>

      </div>

      {/* Trust reassurance banner under devices */}
      <div className="mt-8 text-center">
        <p className="text-xs text-[#73758A] max-w-md mx-auto">
          Screenshots taken directly from the live Looply iOS and Android experience.
        </p>
      </div>
    </div>
  );
};
