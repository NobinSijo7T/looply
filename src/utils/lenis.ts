import Lenis from 'lenis';
import gsap from 'gsap';

let lenisInstance: Lenis | null = null;

export function initLenis(): Lenis | null {
  if (typeof window === 'undefined') return null;
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.25,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
  });

  // Synchronize Lenis with GSAP ticker for unified animation frames
  gsap.ticker.add((time: number) => {
    lenisInstance?.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function smoothScrollTo(target: string | HTMLElement | number, offset = -70): void {
  if (lenisInstance) {
    if (typeof target === 'number') {
      lenisInstance.scrollTo(target, { duration: 1.25 });
    } else {
      lenisInstance.scrollTo(target, { offset, duration: 1.25 });
    }
  } else {
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    } else if (typeof target === 'string') {
      const id = target.startsWith('#') ? target.slice(1) : target;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
