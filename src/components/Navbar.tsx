import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import {
  ChevronUp,
  Compass,
  Layers,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Camera,
  Smartphone,
  PenTool,
  Video,
} from 'lucide-react';
import { smoothScrollTo } from '../utils/lenis';

export interface NavItem {
  id: string;
  label: string;
  hasCaret?: boolean;
  targetId: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'discover', label: 'Discover', hasCaret: true, targetId: 'discovery' },
  { id: 'how-it-works', label: 'How It Works', hasCaret: false, targetId: 'how-it-works' },
  { id: 'features', label: 'Features', hasCaret: false, targetId: 'features' },
  { id: 'moments', label: 'Moments', hasCaret: false, targetId: 'moments' },
  { id: 'faq', label: 'FAQ', hasCaret: false, targetId: 'faq' },
];

const RESOURCE_LINKS = [
  {
    label: 'Mobile Prototype',
    shortLabel: 'Prototype',
    href: '/mobile-prototype',
    icon: Smartphone,
  },
  {
    label: 'Editable Figma Design',
    shortLabel: 'Figma',
    href: '/figma-design',
    icon: PenTool,
  },
  {
    label: 'Product Video',
    shortLabel: 'Video',
    href: '/product-video',
    icon: Video,
  },
] as const;

export const Navbar: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('discover');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // References for GSAP animations
  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const logoIconRef = useRef<HTMLImageElement>(null);
  const chevronRef = useRef<SVGSVGElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const isManualScrollRef = useRef<boolean>(false);

  // Move indicator to a specific element using GSAP
  const moveIndicator = useCallback(
    (targetEl: HTMLElement, immediate: boolean = false) => {
      if (!indicatorRef.current || !itemsContainerRef.current) return;

      const containerRect = itemsContainerRef.current.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();

      const x = targetRect.left - containerRect.left;
      const width = targetRect.width;
      const height = targetRect.height;
      const y = targetRect.top - containerRect.top;

      if (immediate) {
        gsap.set(indicatorRef.current, {
          x,
          y,
          width,
          height,
          opacity: 1,
        });
      } else {
        gsap.to(indicatorRef.current, {
          x,
          y,
          width,
          height,
          opacity: 1,
          duration: 0.36,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
    },
    []
  );

  // Position indicator on active or hovered item
  const updateIndicatorPosition = useCallback(
    (immediate: boolean = false) => {
      const targetId = hoveredId || activeId;
      const targetBtn = buttonRefs.current[targetId];
      if (targetBtn) {
        moveIndicator(targetBtn, immediate);
      }
    },
    [hoveredId, activeId, moveIndicator]
  );

  // Initial indicator placement on mount & on window resize
  useEffect(() => {
    const timer = setTimeout(() => {
      updateIndicatorPosition(true);
    }, 60);

    const handleResize = () => updateIndicatorPosition(true);
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [updateIndicatorPosition]);

  // Animate indicator when hoveredId or activeId changes
  useEffect(() => {
    updateIndicatorPosition(false);
  }, [hoveredId, activeId, updateIndicatorPosition]);

  // Scroll spy: Update activeId dynamically as sections scroll into view
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.targetId);

    const handleScroll = () => {
      if (isManualScrollRef.current) return;

      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const targetId = sectionIds[i];
        const el = document.getElementById(targetId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            const matchedItem = NAV_ITEMS.find((item) => item.targetId === targetId);
            if (matchedItem) {
              setActiveId(matchedItem.id);
              return;
            }
          }
        }
      }

      if (window.scrollY < 260) {
        setActiveId('discover');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown animation with GSAP
  useEffect(() => {
    if (!dropdownRef.current) return;

    if (dropdownOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -8, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.24, ease: 'power2.out', display: 'block' }
      );
      if (chevronRef.current) {
        gsap.to(chevronRef.current, { rotation: 180, duration: 0.25, ease: 'power2.out' });
      }
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -6,
        scale: 0.96,
        duration: 0.18,
        ease: 'power2.in',
        onComplete: () => {
          if (dropdownRef.current) {
            dropdownRef.current.style.display = 'none';
          }
        },
      });
      if (chevronRef.current) {
        gsap.to(chevronRef.current, { rotation: 0, duration: 0.25, ease: 'power2.out' });
      }
    }
  }, [dropdownOpen]);

  // Interactive GSAP animation on the circular brand logo
  const handleLogoHover = () => {
    if (logoIconRef.current) {
      gsap.to(logoIconRef.current, {
        rotation: '+=360',
        scale: 1.1,
        duration: 0.65,
        ease: 'back.out(2)',
      });
    }
  };

  const handleLogoLeave = () => {
    if (logoIconRef.current) {
      gsap.to(logoIconRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    isManualScrollRef.current = true;
    setActiveId('discover');
    smoothScrollTo(0);
    if (logoIconRef.current) {
      gsap.fromTo(
        logoIconRef.current,
        { scale: 0.8 },
        { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.4)' }
      );
    }
    setTimeout(() => {
      isManualScrollRef.current = false;
    }, 900);
  };

  // Nav item click handler with Lenis smooth scrolling
  const handleItemClick = (item: NavItem) => {
    isManualScrollRef.current = true;
    setActiveId(item.id);

    if (item.id === 'discover') {
      setDropdownOpen((prev) => !prev);
    } else {
      setDropdownOpen(false);
    }

    smoothScrollTo(item.targetId, -80);

    setTimeout(() => {
      isManualScrollRef.current = false;
    }, 900);
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex items-center justify-center px-3 sm:px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
        {/* Main Floating Capsule Navbar in Looply Navy & Blue branding colours */}
        <div
          ref={navContainerRef}
          className="relative flex items-center bg-[#12132D]/95 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-[0_16px_40px_rgba(23,24,63,0.4)] select-none"
          onMouseLeave={() => {
            setHoveredId(null);
            setDropdownOpen(false);
          }}
        >
          {/* Looply Brand Blue Circular Button */}
          <button
            onClick={handleLogoClick}
            onMouseEnter={handleLogoHover}
            onMouseLeave={handleLogoLeave}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#6F86F8] to-[#5B74EC] hover:from-[#5B74EC] hover:to-[#4A63DB] flex items-center justify-center shrink-0 cursor-pointer shadow-[0_0_18px_rgba(111,134,248,0.4)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F86F8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12132D]"
            aria-label="Looply Home"
            title="Looply Home"
          >
            {/* Looply Brand Mark Image */}
            <img
              ref={logoIconRef}
              src="/logo.png"
              alt="Looply Logo"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain pointer-events-none select-none"
              style={{ transformOrigin: 'center' }}
            />
          </button>

          {/* Desktop Nav Items Container with sliding GSAP indicator */}
          <div
            ref={itemsContainerRef}
            className="relative hidden md:flex items-center ml-1 sm:ml-1.5"
          >
            {/* Sliding Highlight Indicator with double border & Looply Blue fill */}
            <div
              ref={indicatorRef}
              className="absolute top-0 left-0 pointer-events-none z-0 opacity-0"
              style={{ transition: 'none' }}
            >
              {/* Outer 1.5px Looply Blue border, 2px gap, and solid Looply Blue pill */}
              <div className="w-full h-full rounded-full border-[1.5px] border-[#6F86F8] p-[2px] shadow-[0_0_20px_rgba(111,134,248,0.4)]">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-[#6F86F8] to-[#5B74EC]" />
              </div>
            </div>

            {/* Navigation Buttons */}
            {NAV_ITEMS.map((item) => {
              const isCurrent = (hoveredId || activeId) === item.id;

              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    buttonRefs.current[item.id] = el;
                  }}
                  onMouseEnter={() => {
                    setHoveredId(item.id);
                    if (item.id === 'discover') {
                      setDropdownOpen(true);
                    } else {
                      setDropdownOpen(false);
                    }
                  }}
                  onClick={() => handleItemClick(item)}
                  className={`relative z-10 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-medium tracking-tight flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6F86F8] select-none ${
                    isCurrent
                      ? 'text-white font-semibold'
                      : 'text-[#9EA3C7] hover:text-white'
                  }`}
                  style={{
                    transition: 'color 160ms ease',
                  }}
                >
                  <span>{item.label}</span>
                  {item.hasCaret && (
                    <ChevronUp
                      ref={chevronRef}
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${
                        isCurrent ? 'text-white' : 'text-[#9EA3C7]'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive "Discover" Dropdown Card */}
          <div
            ref={dropdownRef}
            className="absolute top-full left-14 sm:left-16 mt-2.5 w-76 bg-[#12132D]/98 backdrop-blur-2xl border border-white/10 rounded-2xl p-2.5 shadow-2xl z-50 hidden"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="px-3 py-2 border-b border-white/10 mb-1 flex items-center gap-2">
              <img
                src="/logo_violet.png"
                alt="Looply Logo"
                className="w-4 h-4 object-contain"
              />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6F86F8]">
                Discover What's Nearby
              </span>
            </div>

            <div className="space-y-1">
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  smoothScrollTo('discovery', -80);
                }}
                className="w-full flex items-start gap-3 p-2.5 rounded-xl text-left hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#6F86F8]/15 border border-[#6F86F8]/30 flex items-center justify-center shrink-0 group-hover:bg-[#6F86F8] transition-colors">
                  <Compass className="w-4 h-4 text-[#6F86F8] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#6F86F8] transition-colors flex items-center gap-1">
                    Activity Explorer
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  </div>
                  <div className="text-[11px] text-gray-400">
                    Filter by walks, coffee, food & culture
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  setDropdownOpen(false);
                  smoothScrollTo('how-it-works', -80);
                }}
                className="w-full flex items-start gap-3 p-2.5 rounded-xl text-left hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#6F86F8] transition-colors">
                  <Sparkles className="w-4 h-4 text-[#6F86F8] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#6F86F8] transition-colors flex items-center gap-1">
                    How Looply Works
                  </div>
                  <div className="text-[11px] text-gray-400">
                    Curate your day in 3 effortless steps
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  setDropdownOpen(false);
                  smoothScrollTo('moments', -80);
                }}
                className="w-full flex items-start gap-3 p-2.5 rounded-xl text-left hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#6F86F8] transition-colors">
                  <Camera className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#6F86F8] transition-colors flex items-center gap-1">
                    Community Drift Wall
                  </div>
                  <div className="text-[11px] text-gray-400">
                    Explore real photos & genuine moments
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  setDropdownOpen(false);
                  smoothScrollTo('why-looply', -80);
                }}
                className="w-full flex items-start gap-3 p-2.5 rounded-xl text-left hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#6F86F8] transition-colors">
                  <Layers className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#6F86F8] transition-colors flex items-center gap-1">
                    Why Looply?
                  </div>
                  <div className="text-[11px] text-gray-400">
                    Zero sponsored clutter, verified spots
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Project resource links */}
        <nav
          aria-label="Project resources"
          className="hidden lg:flex items-center gap-1.5 bg-[#12132D]/95 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-[0_16px_40px_rgba(23,24,63,0.3)]"
        >
          {RESOURCE_LINKS.map(({ label, shortLabel, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              title={label}
              className="group flex items-center gap-1.5 rounded-full px-2.5 py-2 text-[12px] font-semibold text-[#B7B9D1] transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F86F8]"
            >
              <Icon className="h-4 w-4 text-[#6F86F8] transition-transform group-hover:-translate-y-0.5" strokeWidth={1.8} />
              <span className="hidden xl:inline">{shortLabel}</span>
            </a>
          ))}
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center bg-[#12132D]/95 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-xl">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-full focus-visible:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-full left-4 right-4 mt-3 bg-[#12132D]/98 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2 lg:hidden">
          <div className="flex items-center justify-between px-3 py-1.5 mb-1 border-b border-white/10">
            <div className="flex items-center gap-2">
              <img
                src="/logo_violet.png"
                alt="Looply Logo"
                className="w-5 h-5 object-contain"
              />
              <span className="font-heading font-extrabold text-sm text-white">looply</span>
            </div>
          </div>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setMobileMenuOpen(false);
                handleItemClick(item);
              }}
              className="text-left px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-200 hover:text-white hover:bg-[#6F86F8] transition-colors flex items-center justify-between"
            >
              <span>{item.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 opacity-60" />
            </button>
          ))}
          <div className="mt-2 border-t border-white/10 pt-3">
            <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#6F86F8]">
              Project links
            </div>
            {RESOURCE_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-[#6F86F8] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F86F8]"
              >
                <Icon className="h-4 w-4 text-[#6F86F8] group-hover:text-white" strokeWidth={1.8} />
                <span>{label}</span>
                <ArrowUpRight className="ml-auto h-3.5 w-3.5 opacity-60" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
