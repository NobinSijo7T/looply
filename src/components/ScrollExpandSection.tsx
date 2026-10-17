import React from 'react';
import { ScrollExpand } from './ScrollExpand';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';
import { Button } from './common/Button';

interface ScrollExpandSectionProps {
  onExploreClick: () => void;
}

export const ScrollExpandSection: React.FC<ScrollExpandSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative w-full bg-[#12132D] text-white">
      <ScrollExpand
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
        alt="Scenic local mountain lake at sunset"
        title="Step outside. There is a whole world around the corner."
        scrollHint="Scroll to expand ↓"
        startWidth={56}
        startHeight={66}
        startRadius={32}
        endRadius={0}
        mediaZoom={1.35}
        scrollDistance={1.6}
        holdDistance={1.2}
        smoothing={0}
        overlayScrim={0.65}
        useWindowScroll={true}
        className="w-full"
      >
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6F86F8]/20 border border-[#6F86F8]/40 backdrop-blur-md text-[#6F86F8] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVERY STARTS HERE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-tight">
            Find your scene. Save your favorites. Make memories.
          </h2>

          <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">
            No endless scrolling. No account required to browse. Just handpicked local activities that make life feel richer.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onExploreClick}
              className="w-full sm:w-auto shadow-xl flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Explore nearby activities</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </ScrollExpand>
    </section>
  );
};
