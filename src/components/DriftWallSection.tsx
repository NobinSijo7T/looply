import React from 'react';
import { DriftWall, type DriftWallItem } from './DriftWall';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './common/Button';

interface DriftWallSectionProps {
  onExploreClick: () => void;
}

const DRIFT_ITEMS: DriftWallItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    title: 'Sunset Nature Ridge',
  },
  {
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    title: 'Old Town Food Trail',
  },
  {
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80',
    title: 'Ceramics & Art Studio',
  },
  {
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
    title: 'Pine Forest Trail',
  },
  {
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
    title: 'Artisan Coffee Roastery',
  },
  {
    image: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=600&q=80',
    title: 'Canal Boardwalk Walk',
  },
  {
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
    title: 'Night Street Market',
  },
  {
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    title: 'Golden Hour Viewpoint',
  },
  {
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=600&q=80',
    title: 'Live Acoustic Garden',
  },
  {
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80',
    title: 'Vinyl Listening Lounge',
  },
  {
    image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=600&q=80',
    title: 'Botanical Greenhouse',
  },
  {
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=600&q=80',
    title: 'Fresh Sourdough Tasting',
  },
  {
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80',
    title: 'Coastal Harbor Walk',
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    title: 'Flower Market Morning',
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    title: 'Mountain Lake Vista',
  },
];

export const DriftWallSection: React.FC<DriftWallSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0F1026] text-white overflow-hidden selection:bg-[#6F86F8] selection:text-white">
      {/* Ambient Atmospheric Glows */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#6F86F8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-[#5B74EC]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-10 sm:mb-12">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6F86F8]/15 text-[#6F86F8] text-xs font-semibold tracking-wider uppercase mb-5 border border-[#6F86F8]/30 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#6F86F8]" />
          <span>VIBES IN MOTION · LIVE DRIFT</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white mb-4 max-w-3xl mx-auto leading-tight">
          A tapestry of local moments, drifting in real time.
        </h2>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base md:text-lg text-[#9EA3C7] max-w-2xl mx-auto leading-relaxed mb-6">
          Hover over the drifting wall to lift and preview local escapes — from golden hour ridge walks to hidden espresso bars and weekend pottery studios.
        </p>

        {/* Action Button */}
        <div className="inline-flex items-center justify-center">
          <Button
            variant="primary"
            size="md"
            onClick={onExploreClick}
            className="group flex items-center gap-2"
          >
            <span>Explore All Activities</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* The 3D Interactive DriftWall Component */}
      <div className="w-full h-[460px] sm:h-[540px] md:h-[620px] relative">
        <DriftWall
          items={DRIFT_ITEMS.map((item) => ({
            ...item,
            onClick: onExploreClick,
          }))}
          columns={5}
          tileWidth={220}
          tileHeight={148}
          gap={20}
          radius={16}
          tilt={14}
          turn={-12}
          roll={0}
          perspective={1100}
          depth={130}
          speed={36}
          direction="up"
          variance={0.4}
          parallax={0.5}
          pauseOnHover={false}
          lift={72}
          fade={0.65}
          dim={0.6}
          overlayColor="#0F1026"
          className="w-full h-full"
        />

        {/* Subtle top & bottom soft gradient fade blending seamlessly */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0F1026] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0F1026] to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
