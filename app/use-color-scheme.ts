'use client';

import { useSyncExternalStore } from 'react';

function subscribe(update: () => void) {
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const observer = new MutationObserver(update);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  system.addEventListener('change', update);
  return () => {
    observer.disconnect();
    system.removeEventListener('change', update);
  };
}

function getSnapshot(): 'light' | 'dark' {
  const saved = document.documentElement.dataset.theme;
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

// Wait for the restored preference before requesting theme-specific media.
// Static no-script pictures follow the OS when JavaScript is unavailable.
export function useColorScheme() {
  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}
