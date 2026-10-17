# Looply — Local Activity Discovery & Save Prototype

> **"Discover local activities freely. Create an account when you find something worth saving."**

Looply is a responsive, accessible product landing page and interactive frontend prototype built to solve the core user drop-off problem: visitors leaving before saving their first discovery due to confusing, high-friction registration walls.

---

## 🌟 Key Product Innovations & Principles

1. **Browse Without Friction**: Visitors explore Walk, Food, and Art activities freely without being forced into an account wall.
2. **Contextual Account Explanation**: The moment a user taps Save, Looply clearly explains *why* a free account is needed (to associate discoveries with their personal list).
3. **Minimalist Registration**: Only email and password are required. No phone numbers, payment information, exact home addresses, or mandatory onboarding questionnaires.
4. **Context Preservation**: The selected activity is visually preserved throughout the explanation and registration screens so the user never loses their place.
5. **No Booking Ambiguity**: Every screen explicitly clarifies that saving an activity is for personal reference and does not reserve a ticket, venue spot, or guaranteed availability.
6. **Robust Error Recovery**: Real-world password validation errors and connection failure states are gracefully presented and fully recoverable.

---

## 🎨 Brand Identity & Design System

- **Brand Wordmark**: Lowercase `looply` accompanied by a custom SVG geometric loop mark signifying continuous discovery and return.
- **Primary Brand Colour**: `#6F86F8` (Blue)
- **Dark Navy**: `#17183F`
- **Primary Text**: `#202139`
- **Secondary Text**: `#73758A`
- **Backgrounds**: Main `#FFFFFF`, Soft `#FAFAFC`, Pale Blue `#EEF1FF`, Soft Lavender `#E8EBFF`
- **Accents**: Mint `#BDF4DE`, Success `#17865D`, Error `#D94A58`, Border `#E6E7EF`
- **Typography**: Inter & Manrope via Google Fonts with modern fallback stack.
- **Corner Radii**: 999px for pill buttons (`rounded-full`), 16–24px for cards (`rounded-2xl` / `rounded-3xl`), 36–42px for realistic device frames.

---

## 📐 Page Structure & Section Architecture

1. **Navigation Bar** (`src/components/Navbar.tsx`):
   - Loop mark + `looply` wordmark.
   - Smooth-scrolling links to Discover, How it works, Features, FAQ.
   - Saved counter badge opening the Saved Activities Drawer.
   - Sign in action opening the simulated authentication modal.
   - Mobile responsive drawer with full keyboard support (Esc to close).

2. **Hero Section** (`src/components/HeroSection.tsx`):
   - Eyebrow badge: `A LITTLE MORE LIFE, NEARBY`.
   - Exact Headline: `Find something worth going out for.`
   - Supporting narrative and dual pill CTAs: *Explore activities* & *How Looply works*.

3. **Overlapping Device Previews** (`src/components/DeviceMockups.tsx`):
   - High-fidelity 3-device composition made entirely with semantic HTML/CSS components (no static reference screenshots).
   - Left phone: Local activity detail view.
   - Centre phone: Discover feed with category filters (prominent, in front).
   - Right phone: Personal saved activities queue.

4. **Activity Discovery Section** (`src/components/ActivityDiscovery.tsx`):
   - Category filter pills: *All activities*, *Walk*, *Food*, *Art*.
   - Three illustrative sample cards:
     - `Sunset Nature Walk` (Walk · ~1.5 hrs)
     - `Local Food Trail` (Food · ~2 hrs)
     - `Weekend Art Workshop` (Art · ~2.5 hrs)
   - Bookmark save toggle, duration badges, and *View details* triggers.

5. **Feature Grid** (`src/components/FeatureGrid.tsx`):
   - Two large cards: *Browse before you sign up* & *Save what you love*.
   - Three smaller cards: *Explore your way*, *Keep a personal list*, *Share a discovery*.

6. **How Looply Works** (`src/components/HowItWorks.tsx`):
   - Step 1: *Discover* (miniature feed preview).
   - Step 2: *Save an activity* (context explanation preview).
   - Step 3: *Come back to it* (personal list confirmation).

7. **Why Looply Section** (`src/components/WhyLooply.tsx`):
   - Asymmetric layout replacing fabricated stats with two core statements: *Browse first* and *Save when it matters*.
   - Three benefit cards: *Discovery without friction*, *Simple by design*, and *A clearer next step*.

8. **Frequently Asked Questions** (`src/components/FAQSection.tsx`):
   - 2-column accessible accordion on desktop, single-column stack on mobile.
   - All 6 required Q&As covering browsing without an account, saving vs booking, and error recovery.

9. **Final CTA Banner** (`src/components/FinalCTA.tsx`):
   - Lavender banner (`#EEF1FF`) with dark navy headline: `Find your next favourite thing.`
   - Cropped mobile feed mockup.

10. **Footer** (`src/components/Footer.tsx`):
    - Multi-column layout: Explore, Product, Help, Legal.
    - Zero dead links: all internal destinations either scroll to sections or open working informative dialogs.

---

## ⚡ Interactive Modals & Flows

- `SaveExplanationModal`: Opens when an unauthenticated user clicks Save.
- `RegistrationModal`: Minimal email + password form with inline error messaging and network failure handling.
- `SaveSuccessModal`: Confirms saved state with a compact card and reassurance note.
- `SavedActivitiesDrawer`: Allows viewing, managing, and removing saved items during the prototype session.
- `ActivityDetailModal`: Deep-dive into an activity with photos, vibes, location hints, and direct save action.
- `SignInModal`: Lightweight simulation for existing users.
- `ShareModal`: Copyable activity link with feedback toast.
- `InfoModal`: Handles Privacy, Terms, and Support with zero broken links.

---

## 🧪 Reviewer Evaluation Tools

A discreet floating panel at the bottom-right corner (**Prototype Tools**) enables evaluators to test all states instantly:
- **Simulate Network Error**: Toggle ON to preview the connection failure screen during registration (`We couldn't confirm your registration.`) and test recovery actions (*Try again*, *Sign in*).
- **Test Password Validation**: Submitting a password with fewer than 8 characters renders the exact inline error: `Your password needs at least 8 characters. Update your password and try again.`
- **Saved Activities List**: Instantly view and remove saved items.
- **Reset Prototype Session**: Restores state to initial unauthenticated visitor mode.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run TypeScript check & production build
npm run build
```

Visit: `http://localhost:5173/`
