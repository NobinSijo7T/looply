import React from 'react';
import { Logo } from './common/Logo';
import type { InfoModalContent } from '../types';

interface FooterProps {
  onOpenSavedList: () => void;
  onOpenSignIn: () => void;
  onOpenInfoModal: (content: InfoModalContent) => void;
  onSelectCategoryFilter?: (cat: 'Walk' | 'Food' | 'Art') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSavedList,
  onOpenSignIn,
  onOpenInfoModal,
  onSelectCategoryFilter,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const showContactModal = () => {
    onOpenInfoModal({
      title: 'Contact Looply Support',
      subtitle: 'Prototype Assistance & Feedback',
      body:
        'Looply is an interactive product discovery prototype designed to evaluate seamless, frictionless local activity saving.\n\nFor design evaluations, technical feedback, or questions about this assessment build, feel free to use the in-app Reviewer Evaluation Tools located at the bottom-right of your screen.',
    });
  };

  const showPrivacyModal = () => {
    onOpenInfoModal({
      title: 'Privacy Policy',
      subtitle: 'In-Memory Prototype Session Notice',
      body:
        'This prototype application operates entirely on your device in local browser memory.\n\nNo personal credentials, email addresses, passwords, or activity history are sent to external servers, cloud databases, or tracking networks. All mock registration states are discarded when your browser session concludes.',
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
    <footer className="bg-white border-t border-[#E6E7EF] pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#E6E7EF]">
          
          {/* Left Column: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-[#73758A] max-w-sm leading-relaxed">
              Discover local activities. Save what you love. Come back when you're ready.
            </p>
            <div className="text-xs text-[#73758A] pt-2">
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#EEF1FF] text-[#6F86F8] font-semibold">
                Web Prototype Release
              </span>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#17183F] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#73758A]">
              <li>
                <button
                  onClick={() => scrollTo('discovery')}
                  className="hover:text-[#17183F] transition-colors cursor-pointer"
                >
                  Discover activities
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollTo('discovery');
                    onSelectCategoryFilter?.('Walk');
                  }}
                  className="hover:text-[#17183F] transition-colors cursor-pointer"
                >
                  Walk
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollTo('discovery');
                    onSelectCategoryFilter?.('Food');
                  }}
                  className="hover:text-[#17183F] transition-colors cursor-pointer"
                >
                  Food
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollTo('discovery');
                    onSelectCategoryFilter?.('Art');
                  }}
                  className="hover:text-[#17183F] transition-colors cursor-pointer"
                >
                  Art
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Product */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#17183F] uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-[#73758A]">
              <li>
                <button
                  onClick={() => scrollTo('how-it-works')}
                  className="hover:text-[#17183F] transition-colors cursor-pointer"
                >
                  How it works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('features')}
                  className="hover:text-[#17183F] transition-colors cursor-pointer"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSavedList}
                  className="hover:text-[#17183F] transition-colors cursor-pointer"
                >
                  Saved activities
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#17183F] uppercase tracking-wider">
              Help
            </h4>
            <ul className="space-y-2 text-sm text-[#73758A]">
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="hover:text-[#17183F] transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSignIn}
                  className="hover:text-[#17183F] transition-colors cursor-pointer"
                >
                  Sign in
                </button>
              </li>
              <li>
                <button
                  onClick={showContactModal}
                  className="hover:text-[#17183F] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#17183F] uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-[#73758A]">
              <li>
                <button
                  onClick={showPrivacyModal}
                  className="hover:text-[#17183F] transition-colors cursor-pointer"
                >
                  Privacy
                </button>
              </li>
              <li>
                <button
                  onClick={showTermsModal}
                  className="hover:text-[#17183F] transition-colors cursor-pointer"
                >
                  Terms
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#73758A]">
          <p>© 2026 Looply. Discover local activities freely.</p>
          <p className="text-[11px] bg-[#FAFAFC] px-3 py-1 rounded-full border border-[#E6E7EF]">
            Interactive prototype for product discovery & frictionless save evaluation.
          </p>
        </div>
      </div>
    </footer>
  );
};
