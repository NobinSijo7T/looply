import React from 'react';
import { Compass, BookmarkCheck, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const WhyLooply: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAFAFC] border-y border-[#E6E7EF]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: 2 Benefit Statement Cards (replacing fake metrics) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <span className="text-xs font-bold text-[#6F86F8] uppercase tracking-wider block mb-1">
              Respectful Product Design
            </span>

            {/* Statement Card 1 */}
            <div className="bg-white rounded-3xl p-7 border border-[#E6E7EF] shadow-sm hover:border-[#6F86F8]/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF1FF] flex items-center justify-center text-[#6F86F8] mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#17183F] font-heading mb-2">
                Browse first
              </h3>
              <p className="text-base text-[#73758A] leading-relaxed">
                Explore activities without creating an account.
              </p>
            </div>

            {/* Statement Card 2 */}
            <div className="bg-white rounded-3xl p-7 border border-[#E6E7EF] shadow-sm hover:border-[#6F86F8]/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#BDF4DE] flex items-center justify-center text-[#17865D] mb-4">
                <BookmarkCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#17183F] font-heading mb-2">
                Save when it matters
              </h3>
              <p className="text-base text-[#73758A] leading-relaxed">
                Create an account only when you're ready to keep an activity.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Heading, narrative, and 3 Benefit Cards */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17183F] font-heading tracking-tight mb-4">
                Discovery that respects your time.
              </h2>
              <p className="text-base sm:text-lg text-[#73758A] leading-relaxed">
                Looply helps you find something interesting before asking you to fill out a form. Browse freely, save activities with a clear reason to sign up, and return whenever you're ready.
              </p>
            </div>

            {/* 3 Benefit Cards */}
            <div className="space-y-4 pt-2">
              
              {/* Benefit 1 */}
              <div className="bg-white rounded-2xl p-5 border border-[#E6E7EF] flex gap-4 items-start shadow-xs hover:border-[#6F86F8]/30 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#EEF1FF] flex items-center justify-center text-[#6F86F8] shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#17183F] font-heading mb-1">
                    Discovery without friction.
                  </h4>
                  <p className="text-sm text-[#73758A] leading-relaxed">
                    See activities and explore categories before registering.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-2xl p-5 border border-[#E6E7EF] flex gap-4 items-start shadow-xs hover:border-[#6F86F8]/30 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#BDF4DE] flex items-center justify-center text-[#17865D] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#17183F] font-heading mb-1">
                    Simple by design.
                  </h4>
                  <p className="text-sm text-[#73758A] leading-relaxed">
                    A short registration form with helpful guidance when something goes wrong.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-2xl p-5 border border-[#E6E7EF] flex gap-4 items-start shadow-xs hover:border-[#6F86F8]/30 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#EEF1FF] flex items-center justify-center text-[#6F86F8] shrink-0 mt-0.5">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#17183F] font-heading mb-1">
                    A clearer next step.
                  </h4>
                  <p className="text-sm text-[#73758A] leading-relaxed">
                    Know when an activity has been saved and where to find it again.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
