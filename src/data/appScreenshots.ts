/**
 * Looply Real App Mockup Assets & Context Metadata
 * Located in public/app_screenshots
 */

export interface AppScreenshotItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  badge: string;
  context: string;
  category?: 'core' | 'flow' | 'artwork';
}

export const APP_SCREENSHOTS = {
  // Core App Views
  homescreen: {
    id: 'homescreen',
    src: '/app_screenshots/Homescreen.png',
    alt: 'Looply App Homescreen - Event Discovery Feed',
    title: 'Discovery Homescreen',
    subtitle: 'Browse local events & trails without signing up',
    badge: 'Home Feed',
    context: 'The main discovery experience with category filters, search, and curated activity cards.',
    category: 'core',
  },
  eventMap: {
    id: 'event-map',
    src: '/app_screenshots/Event%20Map.png',
    alt: 'Looply App Event Map View',
    title: 'Interactive Event Map',
    subtitle: 'Pinpoint nearby outdoor walks & urban spots',
    badge: 'Map View',
    context: 'Real-time geographic discovery with direct directions and neighborhood route pins.',
    category: 'core',
  },
  savedList: {
    id: 'saved-list',
    src: '/app_screenshots/Saved%20List.png',
    alt: 'Looply App Saved Activities List',
    title: 'Personal Saved List',
    subtitle: 'All your favorited moments in one place',
    badge: 'Saved List',
    context: 'Categorized saved repository for Walk, Food, and Art with instant access.',
    category: 'core',
  },
  eventCalendar: {
    id: 'event-calendar',
    src: '/app_screenshots/Event%20Calendar.png',
    alt: 'Looply App Event Calendar',
    title: 'Events Calendar',
    subtitle: 'Organize your outings by date and weekend',
    badge: 'Calendar',
    context: 'Monthly calendar view highlighting popular local gatherings and art showcases.',
    category: 'core',
  },
  eventSaved: {
    id: 'event-saved',
    src: '/app_screenshots/Event%20Saved.png',
    alt: 'Looply App Event Saved Confirmation',
    title: 'Saved Confirmation Modal',
    subtitle: 'Clear, transparent reassurance upon saving',
    badge: 'Saved Modal',
    context: 'Instant confirmation drawer with options to view list or share with friends.',
    category: 'flow',
  },
  onboarding: {
    id: 'onboarding',
    src: '/app_screenshots/Onboarding.png',
    alt: 'Looply App Launch and Onboarding Screen',
    title: 'Welcome Splash Screen',
    subtitle: 'Minimalist, friction-free brand launch',
    badge: 'Onboarding',
    context: 'Clean brand welcome leading straight into browsing without forced logins.',
    category: 'flow',
  },
  stepSave: {
    id: 'step-save',
    src: '/app_screenshots/3.png',
    alt: 'Looply App Found Something You Love Screen',
    title: 'Found Something You Love?',
    subtitle: 'Step 3: Save and organize your favorites',
    badge: 'Step 03 Flow',
    context: 'Onboarding screen explaining the personal list curation with Walk, Food, and Art cards.',
    category: 'flow',
  },

  // Illustrations & Brand Artwork
  favoritesArtwork: {
    id: 'favorites-artwork',
    src: '/app_screenshots/Saved%20Favorites_%20Travel,%20Food%20&%20Art.png',
    alt: 'Saved Favorites Artwork - Travel, Food and Art Cards',
    title: 'Saved Favorites Trinity',
    subtitle: 'Scenic trails, cozy cafe roasts, and artisan studio canvases',
    badge: 'Artwork',
    context: 'High-res stylized cards representing Looply’s three core discovery pillars.',
    category: 'artwork',
  },
  discoverJourney: {
    id: 'discover-journey',
    src: '/app_screenshots/Discover%20Your%20Local%20Adventures.png',
    alt: 'Discover Your Local Adventures Illustration',
    title: 'Discover Your Local Adventures',
    subtitle: 'A traveler’s path connecting scenic trails, cafes, and creative spaces',
    badge: 'Journey Illustration',
    context: 'Panoramic landscape showing a curious explorer following the loop of discovery.',
    category: 'artwork',
  },
  curvedPath: {
    id: 'curved-path',
    src: '/app_screenshots/Woman%E2%80%99s%20Curved%20Path%20of%20Discovery.png',
    alt: 'Woman’s Curved Path of Discovery Illustration',
    title: 'Curved Path of Discovery',
    subtitle: 'Unhurried local exploration that respects your time',
    badge: 'Brand Story',
    context: 'Warm illustration of mindful discovery through local neighborhoods.',
    category: 'artwork',
  },
} as const;

export type AppScreenshotKey = keyof typeof APP_SCREENSHOTS;
