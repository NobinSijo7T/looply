import React from 'react';
import { Button } from './common/Button';
import { DeviceMockups } from './DeviceMockups';
import { MaskedHeading } from './MaskedHeading';
import { Sparkles } from 'lucide-react';

import type { AppScreenshotItem } from '../data/appScreenshots';

interface HeroSectionProps {
  onExploreClick: () => void;
  onHowItWorksClick: () => void;
  savedCount: number;
  onPreviewMockup?: (screenshot: AppScreenshotItem) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onHowItWorksClick,
  savedCount,
  onPreviewMockup,
}) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden text-center bg-gradient-to-b from-white via-[#FAFAFC] to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8EBFF] text-[#17183F] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-xs border border-[#D5D8E8]/50">
          <Sparkles className="w-3.5 h-3.5 text-[#6F86F8]" />
          <span>A LITTLE MORE LIFE, NEARBY</span>
        </div>

        {/* Main Headline with MaskedHeading component */}
        <div className="max-w-4xl mx-auto mb-6">
          <MaskedHeading
            tag="h1"
            text="Find something worth going out for."
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
            fillScale={1.35}
            parallax={22}
            drift={14}
            hoverZoom={0.05}
            reveal="rise"
            duration={1.1}
            stagger={0.08}
            align="center"
            weight={900}
            tracking={-0.035}
            textScale={0.082}
            tint="rgba(23, 24, 63, 0.2)"
            spotlight={true}
            className="font-heading text-[#17183F]"
          />
        </div>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#73758A] max-w-2xl mx-auto leading-relaxed mb-8">
          Discover local walks, food experiences, and creative activities. Explore freely, find something you love, and save it for later.
        </p>

        {/* Hero Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
          <Button
            variant="primary"
            size="lg"
            onClick={onExploreClick}
            className="w-full sm:w-auto min-w-[200px]"
          >
            Explore activities
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={onHowItWorksClick}
            className="w-full sm:w-auto min-w-[200px] border-[#D5D8E8] hover:bg-[#EEF1FF]/50"
          >
            How Looply works
          </Button>
        </div>

        {/* Reassurance pill */}
        <div className="text-xs text-[#73758A] flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#17865D] inline-block" />
          <span>No account required to browse. Save whenever you find something great.</span>
        </div>
      </div>

      {/* Device Mockups Preview */}
      <DeviceMockups savedCount={savedCount} onPreviewMockup={onPreviewMockup} />
    </section>
  );
};
