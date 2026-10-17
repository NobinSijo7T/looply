import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ActivityDiscovery } from './components/ActivityDiscovery';
import { FeatureGrid } from './components/FeatureGrid';
import { HowItWorks } from './components/HowItWorks';
import { WhyLooply } from './components/WhyLooply';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

// Modals
import { SaveExplanationModal } from './components/modals/SaveExplanationModal';
import { RegistrationModal } from './components/modals/RegistrationModal';
import { SaveSuccessModal } from './components/modals/SaveSuccessModal';
import { SavedActivitiesDrawer } from './components/modals/SavedActivitiesDrawer';
import { ActivityDetailModal } from './components/modals/ActivityDetailModal';
import { SignInModal } from './components/modals/SignInModal';
import { ShareModal } from './components/modals/ShareModal';
import { InfoModal } from './components/modals/InfoModal';

// Reviewer demo controller
import { DemoController } from './components/common/DemoController';

import type { Activity, ModalType, InfoModalContent } from './types';
import { ACTIVITIES } from './data/activities';

export function App() {
  // Session & Prototype state
  const [savedActivityIds, setSavedActivityIds] = useState<string[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  
  // Reviewer test configuration
  const [forceNetworkError, setForceNetworkError] = useState<boolean>(false);
  const [infoModalContent, setInfoModalContent] = useState<InfoModalContent | null>(null);

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Trigger Save on an activity
  const handleSaveToggle = (activity: Activity) => {
    const isCurrentlySaved = savedActivityIds.includes(activity.id);

    if (isCurrentlySaved) {
      // Remove from saved list
      setSavedActivityIds((prev) => prev.filter((id) => id !== activity.id));
      return;
    }

    setSelectedActivity(activity);

    if (isAuthenticated) {
      // User is already signed in: directly save and show confirmation
      setSavedActivityIds((prev) => [...prev, activity.id]);
      setActiveModal('save_success');
    } else {
      // Prompt with account explanation before asking for registration
      setActiveModal('save_explanation');
    }
  };

  // Continue from Save Explanation to Registration
  const handleContinueToRegister = () => {
    setActiveModal('registration');
  };

  // Registration completes successfully
  const handleRegistrationSuccess = () => {
    setIsAuthenticated(true);
    if (selectedActivity && !savedActivityIds.includes(selectedActivity.id)) {
      setSavedActivityIds((prev) => [...prev, selectedActivity.id]);
    }
    setActiveModal('save_success');
  };

  // Remove item from saved drawer
  const handleRemoveSaved = (id: string) => {
    setSavedActivityIds((prev) => prev.filter((item) => item !== id));
  };

  // Open activity detail modal
  const handleSelectActivity = (activity: Activity) => {
    setSelectedActivity(activity);
    setActiveModal('activity_detail');
  };

  // Open share modal
  const handleShare = (activity: Activity) => {
    setSelectedActivity(activity);
    setActiveModal('share');
  };

  // Open info modal (Contact, Privacy, Terms)
  const handleOpenInfoModal = (content: InfoModalContent) => {
    setInfoModalContent(content);
    setActiveModal('info');
  };

  // Reset prototype session for reviewer
  const handleResetSession = () => {
    setSavedActivityIds([]);
    setIsAuthenticated(false);
    setSelectedActivity(null);
    setActiveModal(null);
    setForceNetworkError(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#E8EBFF] selection:text-[#17183F] overflow-x-hidden">
      {/* 1. Navigation Bar */}
      <Navbar
        savedCount={savedActivityIds.length}
        onOpenSavedList={() => setActiveModal('saved_list')}
        onOpenSignIn={() => setActiveModal('sign_in')}
      />

      <main className="flex-1">
        {/* 2. Hero Section + 3. Overlapping Mobile App Preview */}
        <HeroSection
          onExploreClick={() => scrollTo('discovery')}
          onHowItWorksClick={() => scrollTo('how-it-works')}
          savedCount={savedActivityIds.length}
        />

        {/* 4. Activity Discovery Section */}
        <ActivityDiscovery
          savedActivityIds={savedActivityIds}
          onSaveToggle={handleSaveToggle}
          onSelectActivity={handleSelectActivity}
        />

        {/* 5. Feature Grid */}
        <FeatureGrid
          onExploreClick={() => scrollTo('discovery')}
          onOpenSavedList={() => setActiveModal('saved_list')}
        />

        {/* 6. How Looply Works */}
        <HowItWorks />

        {/* 7. Why Looply Section */}
        <WhyLooply />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />

        {/* 9. Final CTA Banner */}
        <FinalCTA
          onExploreClick={() => scrollTo('discovery')}
          onHowItWorksClick={() => scrollTo('how-it-works')}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        onOpenSavedList={() => setActiveModal('saved_list')}
        onOpenSignIn={() => setActiveModal('sign_in')}
        onOpenInfoModal={handleOpenInfoModal}
        onSelectCategoryFilter={() => scrollTo('discovery')}
      />

      {/* MODAL 1: Save Explanation Modal */}
      <SaveExplanationModal
        activity={selectedActivity}
        isOpen={activeModal === 'save_explanation'}
        onClose={() => setActiveModal(null)}
        onContinueToRegister={handleContinueToRegister}
      />

      {/* MODAL 2: Minimal Registration Modal (with error & recovery states) */}
      <RegistrationModal
        activity={selectedActivity}
        isOpen={activeModal === 'registration'}
        forceNetworkError={forceNetworkError}
        onClose={() => setActiveModal(null)}
        onBack={() => setActiveModal('save_explanation')}
        onSuccess={handleRegistrationSuccess}
        onOpenSignIn={() => setActiveModal('sign_in')}
      />

      {/* MODAL 3: Successful First Save Modal */}
      <SaveSuccessModal
        activity={selectedActivity}
        isOpen={activeModal === 'save_success'}
        onClose={() => setActiveModal(null)}
        onViewSavedList={() => setActiveModal('saved_list')}
      />

      {/* MODAL 4: Saved Activities Drawer */}
      <SavedActivitiesDrawer
        isOpen={activeModal === 'saved_list'}
        savedActivityIds={savedActivityIds}
        onClose={() => setActiveModal(null)}
        onRemove={handleRemoveSaved}
        onSelectActivity={handleSelectActivity}
        onExploreMore={() => scrollTo('discovery')}
      />

      {/* MODAL 5: Activity Detail View Modal */}
      <ActivityDetailModal
        activity={selectedActivity}
        isSaved={selectedActivity ? savedActivityIds.includes(selectedActivity.id) : false}
        isOpen={activeModal === 'activity_detail'}
        onClose={() => setActiveModal(null)}
        onSaveToggle={handleSaveToggle}
        onShare={handleShare}
      />

      {/* MODAL 6: Existing User Sign In Prototype Modal */}
      <SignInModal
        isOpen={activeModal === 'sign_in'}
        onClose={() => setActiveModal(null)}
        onSuccess={() => {
          setIsAuthenticated(true);
        }}
      />

      {/* MODAL 7: Share Discovery Modal */}
      <ShareModal
        activity={selectedActivity}
        isOpen={activeModal === 'share'}
        onClose={() => setActiveModal(null)}
      />

      {/* MODAL 8: Info Modal (Contact, Privacy, Terms) */}
      <InfoModal
        content={infoModalContent}
        isOpen={activeModal === 'info'}
        onClose={() => {
          setActiveModal(null);
          setInfoModalContent(null);
        }}
      />

      {/* Discretely placed reviewer prototype demo controller */}
      <DemoController
        forceNetworkError={forceNetworkError}
        onToggleForceNetworkError={() => setForceNetworkError((prev) => !prev)}
        onTriggerSaveFlow={() => {
          const act = ACTIVITIES[0];
          setSelectedActivity(act);
          setActiveModal('save_explanation');
        }}
        onOpenSavedList={() => setActiveModal('saved_list')}
        onResetSession={handleResetSession}
        savedCount={savedActivityIds.length}
      />
    </div>
  );
}

export default App;
