'use client';

import { useEffect } from 'react';

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion-ready');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );

    if (reducedMotion.matches) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
    }

    const revealObserver = reducedMotion.matches
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver?.unobserve(entry.target);
              }
            });
          },
          { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
        );

    revealElements.forEach((element) => revealObserver?.observe(element));

    const headerSentinel = document.querySelector('[data-header-sentinel]');
    const headerObserver = headerSentinel
      ? new IntersectionObserver(([entry]) => {
          root.classList.toggle('page-has-scrolled', !entry.isIntersecting);
        })
      : null;

    if (headerSentinel) {
      headerObserver?.observe(headerSentinel);
    }

    return () => {
      revealObserver?.disconnect();
      headerObserver?.disconnect();
      root.classList.remove('motion-ready');
      root.classList.remove('page-has-scrolled');
    };
  }, []);

  return null;
}
