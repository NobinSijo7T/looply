import React from 'react';
import { Compass, Bookmark, MapPin } from 'lucide-react';
import { ACTIVITIES } from '../data/activities';

interface DeviceMockupsProps {
  onSelectActivity?: (id: string) => void;
  savedCount?: number;
}

export const DeviceMockups: React.FC<DeviceMockupsProps> = ({
  savedCount = 1,
}) => {
  const walkActivity = ACTIVITIES[0];
  const foodActivity = ACTIVITIES[1];
  const artActivity = ACTIVITIES[2];

  return (
    <div className="relative w-full max-w-5xl mx-auto pt-6 pb-12 px-4 select-none">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-3xl h-64 bg-radial from-[#EEF1FF] via-[#F5F7FF] to-transparent rounded-full -z-10 blur-2xl opacity-80" />

      {/* Grid / flex container for the 3 device screens */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 relative">
        
        {/* LEFT PHONE: Local Activity Detail Screen */}
        <div className="w-full max-w-[280px] lg:w-[270px] lg:-mr-12 lg:scale-95 lg:hover:scale-100 transition-all duration-300 z-10 hidden sm:block">
          <div className="bg-[#17183F] p-3 rounded-[36px] shadow-xl shadow-[#17183F]/10 border-4 border-[#E6E7EF]">
            {/* Screen Content */}
            <div className="bg-white rounded-[26px] overflow-hidden text-left text-xs text-[#202139] flex flex-col h-[490px]">
              {/* Phone Header / Status Bar */}
              <div className="px-5 pt-3 pb-2 flex justify-between items-center text-[10px] text-[#73758A] border-b border-[#F0F1F6]">
                <span className="font-semibold text-[#17183F]">9:41</span>
                <span className="text-[10px] bg-[#EEF1FF] text-[#6F86F8] font-semibold px-2 py-0.5 rounded-full">
                  Walk
                </span>
              </div>

              {/* Activity Image */}
              <div className="relative h-44 overflow-hidden group">
                <img
                  src={walkActivity.image}
                  alt={walkActivity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-white">
                  <span className="text-[10px] bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full font-medium">
                    {walkActivity.duration}
                  </span>
                  <h4 className="text-sm font-bold leading-tight mt-1">
                    {walkActivity.title}
                  </h4>
                </div>
              </div>

              {/* Detail Content */}
              <div className="p-3.5 space-y-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#73758A] mb-1.5">
                    <MapPin className="w-3 h-3 text-[#6F86F8]" />
                    <span>{walkActivity.locationHint}</span>
                  </div>
                  <p className="text-[11px] text-[#73758A] leading-relaxed">
                    {walkActivity.description}
                  </p>
                </div>

                <div className="bg-[#FAFAFC] p-2 rounded-xl border border-[#E6E7EF] space-y-1">
                  <span className="text-[10px] font-semibold text-[#17183F] block">
                    Highlights
                  </span>
                  <p className="text-[10px] text-[#73758A]">{walkActivity.vibe}</p>
                </div>

                {/* Save CTA in Mockup */}
                <div className="pt-1">
                  <div className="w-full bg-[#6F86F8] text-white py-2 rounded-full font-semibold text-center text-xs flex items-center justify-center gap-1.5 shadow-xs">
                    <Bookmark className="w-3.5 h-3.5 fill-white" />
                    <span>Save to My List</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CENTRE PHONE: Discover Activity Feed (Prominent, in front) */}
        <div className="w-full max-w-[310px] lg:w-[320px] z-20 transition-transform duration-300 hover:scale-[1.02]">
          <div className="bg-[#17183F] p-3.5 rounded-[42px] shadow-2xl shadow-[#6F86F8]/15 border-4 border-[#17183F]">
            {/* Screen Content */}
            <div className="bg-[#FAFAFC] rounded-[30px] overflow-hidden text-left flex flex-col h-[560px]">
              {/* Dynamic Island / Notch + Time */}
              <div className="px-6 pt-3 pb-2 flex justify-between items-center text-[11px] text-[#73758A] bg-white">
                <span className="font-semibold text-[#17183F]">9:41</span>
                <div className="w-16 h-3.5 bg-[#17183F] rounded-full" />
                <span className="text-[10px] font-mono">5G</span>
              </div>

              {/* App Brand Header */}
              <div className="px-4 py-2.5 bg-white border-b border-[#E6E7EF] flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-[#6F86F8] flex items-center justify-center text-white text-[10px] font-bold">
                    ∞
                  </div>
                  <span className="font-heading font-extrabold text-xs text-[#17183F]">
                    looply
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-[#EEF1FF] text-[#6F86F8] px-2 py-0.5 rounded-full text-[10px] font-medium">
                  <Compass className="w-3 h-3" />
                  <span>Discover</span>
                </div>
              </div>

              {/* Filter Row in Mockup */}
              <div className="px-3 py-2 flex gap-1.5 overflow-x-hidden bg-white border-b border-[#E6E7EF]">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#6F86F8] text-white">
                  All
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#FAFAFC] text-[#73758A] border border-[#E6E7EF]">
                  Walk
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#FAFAFC] text-[#73758A] border border-[#E6E7EF]">
                  Food
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#FAFAFC] text-[#73758A] border border-[#E6E7EF]">
                  Art
                </span>
              </div>

              {/* Feed Items */}
              <div className="p-3 space-y-3 overflow-hidden flex-1">
                {/* Food Card in feed */}
                <div className="bg-white rounded-2xl p-2.5 border border-[#E6E7EF] shadow-xs">
                  <div className="relative h-28 rounded-xl overflow-hidden mb-2">
                    <img
                      src={foodActivity.image}
                      alt={foodActivity.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs text-[#17183F] font-semibold text-[9px] px-2 py-0.5 rounded-full">
                      Food
                    </span>
                    <button className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#6F86F8]">
                      <Bookmark className="w-3.5 h-3.5 fill-[#6F86F8]" />
                    </button>
                  </div>
                  <h5 className="font-bold text-xs text-[#202139] leading-snug">
                    {foodActivity.title}
                  </h5>
                  <p className="text-[10px] text-[#73758A] line-clamp-1 mt-0.5">
                    {foodActivity.description}
                  </p>
                </div>

                {/* Art Card snippet in feed */}
                <div className="bg-white rounded-2xl p-2.5 border border-[#E6E7EF] shadow-xs">
                  <div className="flex gap-2.5 items-center">
                    <img
                      src={artActivity.image}
                      alt={artActivity.title}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] text-[#6F86F8] font-bold uppercase">
                        Art
                      </span>
                      <h5 className="font-bold text-xs text-[#202139] truncate">
                        {artActivity.title}
                      </h5>
                      <span className="text-[10px] text-[#73758A] block">
                        {artActivity.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Bar in Mockup */}
              <div className="bg-white border-t border-[#E6E7EF] px-6 py-2.5 flex justify-around items-center text-[10px] text-[#73758A]">
                <div className="flex flex-col items-center text-[#6F86F8]">
                  <Compass className="w-4 h-4" />
                  <span className="text-[9px] font-semibold mt-0.5">Discover</span>
                </div>
                <div className="flex flex-col items-center hover:text-[#17183F]">
                  <Bookmark className="w-4 h-4" />
                  <span className="text-[9px] mt-0.5">Saved</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PHONE: Saved Activities Screen */}
        <div className="w-full max-w-[280px] lg:w-[270px] lg:-ml-12 lg:scale-95 lg:hover:scale-100 transition-all duration-300 z-10 hidden sm:block">
          <div className="bg-[#17183F] p-3 rounded-[36px] shadow-xl shadow-[#17183F]/10 border-4 border-[#E6E7EF]">
            {/* Screen Content */}
            <div className="bg-white rounded-[26px] overflow-hidden text-left text-xs text-[#202139] flex flex-col h-[490px]">
              {/* Status Bar */}
              <div className="px-5 pt-3 pb-2 flex justify-between items-center text-[10px] text-[#73758A] border-b border-[#F0F1F6]">
                <span className="font-semibold text-[#17183F]">9:41</span>
                <span className="text-[#6F86F8] font-semibold flex items-center gap-1">
                  <Bookmark className="w-2.5 h-2.5 fill-[#6F86F8]" />
                  Saved ({savedCount})
                </span>
              </div>

              {/* Header */}
              <div className="p-4 border-b border-[#F0F1F6]">
                <span className="text-[10px] font-bold text-[#6F86F8] uppercase tracking-wider">
                  Personal List
                </span>
                <h4 className="text-base font-bold text-[#17183F]">Saved Activities</h4>
                <p className="text-[10px] text-[#73758A] mt-0.5">
                  Ready when you want to explore
                </p>
              </div>

              {/* List */}
              <div className="p-3 space-y-2.5 flex-1 overflow-hidden">
                <div className="p-2.5 rounded-xl border border-[#BDF4DE] bg-[#BDF4DE]/10 flex gap-2.5 items-center">
                  <img
                    src={foodActivity.image}
                    alt={foodActivity.title}
                    className="w-12 h-12 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] bg-[#BDF4DE] text-[#17865D] font-bold px-1.5 py-0.5 rounded">
                      Saved
                    </span>
                    <h5 className="font-bold text-xs text-[#17183F] truncate mt-0.5">
                      {foodActivity.title}
                    </h5>
                    <span className="text-[10px] text-[#73758A]">
                      {foodActivity.duration}
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl border border-[#E6E7EF] bg-white flex gap-2.5 items-center">
                  <img
                    src={artActivity.image}
                    alt={artActivity.title}
                    className="w-12 h-12 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] bg-[#EEF1FF] text-[#6F86F8] font-semibold px-1.5 py-0.5 rounded">
                      Art
                    </span>
                    <h5 className="font-bold text-xs text-[#17183F] truncate mt-0.5">
                      {artActivity.title}
                    </h5>
                    <span className="text-[10px] text-[#73758A]">
                      {artActivity.duration}
                    </span>
                  </div>
                </div>

                {/* Reassurance note */}
                <div className="mt-4 p-2 bg-[#FAFAFC] rounded-lg text-[9px] text-[#73758A] border border-[#E6E7EF]">
                  💡 <strong>Note:</strong> Saving an activity adds it to your personal list. It does not reserve a spot or ticket.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
