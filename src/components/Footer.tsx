import React from 'react';
import type { InfoModalContent } from '../types';

interface FooterProps {
  onOpenSavedList: () => void;
  onOpenSignIn: () => void;
  onOpenInfoModal: (content: InfoModalContent) => void;
  onSelectCategoryFilter?: (cat: 'Walk' | 'Food' | 'Art') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSavedList,
  onOpenInfoModal,
  onSelectCategoryFilter,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };


  const showPrivacyModal = () => {
    onOpenInfoModal({
      title: 'Privacy Policy',
      subtitle: 'In-Memory Prototype Session Notice',
      body:
        'This prototype application operates entirely on your device in local browser memory.\n\nNo personal credentials, email addresses, passwords, or activity history are sent to external servers, cloud databases, or tracking networks. All mock registration states are discarded when your browser session concludes.',
    });
  };

  const showCookieModal = () => {
    onOpenInfoModal({
      title: 'Cookie Policy',
      subtitle: 'Cookie & Storage Transparency',
      body:
        'Looply does not use tracking cookies, cross-site beacons, or commercial advertising trackers.\n\nOnly transient browser memory and standard session state are used to power the saved activities list and prototype registration flows during your visit.',
    });
  };

  const showTermsModal = () => {
    onOpenInfoModal({
      title: 'Terms of Use',
      subtitle: 'Product Demonstration Guidelines',
      body:
        'All activity information, photos, durations, and venues presented on Looply are synthetic illustrative concepts created solely for demonstrating user discovery workflows.\n\nSaving an activity creates a local reference on your device. It does not constitute a legal booking, ticket, reservation, or guarantee of real-world venue availability.',
    });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#E2ECFF] via-[#E8EDFF] to-[#F1E9FE] text-[#17183F] select-none pt-24 pb-14 px-6 sm:px-10 lg:px-16 border-t border-[#D5DEFF]">
      
      {/* Luminous Ambient Mesh Lighting */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#CAD9FF]/70 via-[#DCE6FF]/50 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#E9DCFF]/70 via-[#F3EAFF]/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#BDF4DE]/30 via-[#DCEBFF]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating Geometric Constellation Elements (Inspired by reference visual) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top-left constellation arc */}
        <div className="absolute top-8 left-16 flex flex-col gap-2.5 opacity-90">
          <div className="w-8 h-8 bg-white rounded-r-full" />
          <div className="w-6 h-6 bg-white rounded-full" />
          <div className="w-6 h-6 bg-white rounded-full" />
          <div className="w-6 h-6 bg-white rounded-full" />
        </div>

        <div className="absolute top-24 left-28 w-5 h-5 bg-white rounded-full opacity-85" />
        <div className="absolute top-36 left-44 w-6 h-6 bg-white rounded-xs rotate-12 opacity-85" />
        <div className="absolute top-48 left-64 w-7 h-7 bg-white rounded-r-full opacity-90" />
        <div className="absolute top-60 left-80 w-6 h-6 bg-white rounded-full opacity-90" />
        <div className="absolute top-72 left-96 w-6 h-6 bg-white rounded-full opacity-90" />

        {/* Center-right curving cluster */}
        <div className="absolute top-10 right-1/3 w-7 h-7 bg-white rounded-xs rotate-45 opacity-80" />
        <div className="absolute top-20 right-1/4 flex gap-3 opacity-90">
          <div className="w-6 h-6 bg-white rounded-full" />
          <div className="w-6 h-6 bg-white rounded-full" />
        </div>
        <div className="absolute top-36 right-1/4 w-7 h-7 bg-white rounded-xs opacity-85" />
        <div className="absolute top-52 right-1/4 flex items-center gap-2 opacity-90">
          <div className="w-8 h-8 bg-white rounded-l-full" />
          <div className="w-7 h-7 bg-white rounded-full" />
        </div>
        <div className="absolute top-64 right-1/3 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-white rotate-45 opacity-85" />
        
        {/* Far-right graphic accent */}
        <div className="absolute top-1/2 right-12 hidden lg:flex items-center gap-2 opacity-90">
          <div className="w-9 h-9 bg-white rounded-l-full" />
          <div className="w-8 h-8 bg-white rounded-full" />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Upper & Middle Section: Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-20 pt-8">
          
          {/* Left Column: Brand & Tagline with logo_violet.png */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="flex items-center gap-3">
              <img
                src="/logo_violet.png"
                alt="Looply Logo"
                className="w-10 h-10 object-contain shrink-0"
              />
              <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-[#17183F]">
                looply
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#73758A] max-w-sm leading-relaxed">
              Discover local walks, food experiences, and creative activities. Explore freely, save what you love, and return whenever you're ready.
            </p>
          </div>

          {/* Middle Column: Activities & Local Mission */}
          <div className="lg:col-span-3 space-y-12 text-left">
            {/* Category Discovery Links */}
            <div>
              <span className="text-[11px] font-bold text-[#6F86F8] uppercase tracking-wider block mb-3">
                Experience
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm font-bold tracking-widest text-[#17183F]">
                <li>
                  <button
                    onClick={() => {
                      scrollTo('discovery');
                      onSelectCategoryFilter?.('Walk');
                    }}
                    className="hover:text-[#6F86F8] transition-colors cursor-pointer uppercase text-left"
                  >
                    Nature & City Walks
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      scrollTo('discovery');
                      onSelectCategoryFilter?.('Food');
                    }}
                    className="hover:text-[#6F86F8] transition-colors cursor-pointer uppercase text-left"
                  >
                    Local Food Trails
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      scrollTo('discovery');
                      onSelectCategoryFilter?.('Art');
                    }}
                    className="hover:text-[#6F86F8] transition-colors cursor-pointer uppercase text-left"
                  >
                    Weekend Workshops
                  </button>
                </li>
              </ul>
            </div>

            {/* Local Context Details (Inspired by London/Milan in reference) */}
            <div className="text-xs text-[#17183F] space-y-1">
              <span className="font-extrabold uppercase tracking-wider block text-[#17183F] mb-1">
                Everyday Discovery
              </span>
              <p className="text-[#73758A] leading-relaxed">
                Walkable neighbourhoods,<br />
                curated community finds,<br />
                and zero sign-up friction.
              </p>
            </div>
          </div>

          {/* Right Column: Navigation, Legal & Credits */}
          <div className="lg:col-span-4 space-y-10 text-left">
            {/* Direct Navigation Links */}
            <div>
              <span className="text-[11px] font-bold text-[#6F86F8] uppercase tracking-wider block mb-3">
                Navigation
              </span>
              <ul className="space-y-2 text-xs sm:text-sm font-extrabold tracking-wider text-[#17183F]">
                <li>
                  <button
                    onClick={() => scrollTo('how-it-works')}
                    className="hover:text-[#6F86F8] transition-colors cursor-pointer uppercase flex items-center gap-1"
                  >
                    <span>How It Works</span>
                    <span className="text-[11px]">↗</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('features')}
                    className="hover:text-[#6F86F8] transition-colors cursor-pointer uppercase flex items-center gap-1"
                  >
                    <span>Features</span>
                    <span className="text-[11px]">↗</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenSavedList}
                    className="hover:text-[#6F86F8] transition-colors cursor-pointer uppercase flex items-center gap-1"
                  >
                    <span>Saved Activities</span>
                    <span className="text-[11px]">↗</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-1.5 text-xs font-semibold text-[#17183F] tracking-wide">
              <div>
                <button
                  onClick={showCookieModal}
                  className="hover:text-[#6F86F8] transition-colors cursor-pointer uppercase"
                >
                  Cookie Policy
                </button>
              </div>
              <div>
                <button
                  onClick={showPrivacyModal}
                  className="hover:text-[#6F86F8] transition-colors cursor-pointer uppercase"
                >
                  Privacy Policy
                </button>
              </div>
              <div>
                <button
                  onClick={showTermsModal}
                  className="hover:text-[#6F86F8] transition-colors cursor-pointer uppercase"
                >
                  Terms of Use
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Hero Anchor (Giant "looply___" typography & contact pill) */}
        <div className="pt-8 border-t border-[#17183F]/10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          
          <div className="text-left space-y-4">
            {/* Giant Typographic Anchor with Violet Accent Logo */}
            <div className="flex items-center gap-4 sm:gap-6">
              <img
                src="/logo_violet.png"
                alt="Looply Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain shrink-0"
              />
              <div className="flex items-baseline gap-2 sm:gap-3">
                <span className="font-heading font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-tighter text-[#17183F] leading-none select-none">
                  looply
                </span>
                <span className="inline-block w-10 sm:w-16 lg:w-24 h-2.5 sm:h-3.5 bg-[#17183F] rounded-full" />
              </div>
            </div>

          </div>

          {/* Prototype Reassurance Tag */}
          <div className="text-left sm:text-right text-[11px] text-[#73758A]">
            <p className="font-medium text-[#17183F]">Local Activity Discovery Prototype</p>
            <p>© 2026 Looply. Explore freely. Save when it matters.</p>
          </div>

        </div>

      </div>
    </footer>
  );
};
