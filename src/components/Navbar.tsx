import React, { useState, useEffect } from 'react';
import { Logo } from './common/Logo';
import { Button } from './common/Button';
import { Bookmark, Menu, X } from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  onOpenSavedList: () => void;
  onOpenSignIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  onOpenSavedList,
  onOpenSignIn,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E6E7EF]'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <a
          href="#top"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F86F8] rounded-lg p-1"
          aria-label="Looply Home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Logo size="md" />
        </a>

        {/* Centre: Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#73758A]"
          aria-label="Main Navigation"
        >
          <button
            onClick={() => scrollToSection('discovery')}
            className="hover:text-[#17183F] transition-colors cursor-pointer py-1"
          >
            Discover
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="hover:text-[#17183F] transition-colors cursor-pointer py-1"
          >
            How it works
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="hover:text-[#17183F] transition-colors cursor-pointer py-1"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="hover:text-[#17183F] transition-colors cursor-pointer py-1"
          >
            FAQ
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Saved Activities Quick Access */}
          <button
            onClick={onOpenSavedList}
            className="relative p-2 text-[#73758A] hover:text-[#17183F] hover:bg-[#FAFAFC] rounded-full transition-colors cursor-pointer"
            title="View saved activities"
            aria-label={`View saved activities, ${savedCount} saved`}
          >
            <Bookmark className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#6F86F8] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs animate-in zoom-in-50">
                {savedCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenSignIn}
            className="text-sm font-medium text-[#73758A] hover:text-[#17183F] px-3 py-2 cursor-pointer transition-colors"
          >
            Sign in
          </button>

          <Button
            variant="primary"
            size="md"
            onClick={() => scrollToSection('discovery')}
          >
            Explore activities
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenSavedList}
            className="relative p-2 text-[#73758A] hover:text-[#17183F] rounded-full"
            aria-label="Saved activities"
          >
            <Bookmark className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#6F86F8] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#17183F] hover:bg-[#FAFAFC] rounded-lg focus-visible:ring-2 focus-visible:ring-[#6F86F8]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E6E7EF] bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            <button
              onClick={() => scrollToSection('discovery')}
              className="text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#202139] hover:bg-[#FAFAFC]"
            >
              Discover
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#202139] hover:bg-[#FAFAFC]"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#202139] hover:bg-[#FAFAFC]"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#202139] hover:bg-[#FAFAFC]"
            >
              FAQ
            </button>
          </nav>

          <div className="pt-3 border-t border-[#E6E7EF] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignIn();
              }}
              className="w-full text-center py-2.5 text-sm font-medium text-[#73758A] hover:text-[#17183F]"
            >
              Sign in to your account
            </button>
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => scrollToSection('discovery')}
            >
              Explore activities
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
