'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const system = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () =>
      setDark(
        document.documentElement.dataset.theme
          ? document.documentElement.dataset.theme === 'dark'
          : system.matches,
      );
    update();
    system.addEventListener('change', update);
    return () => system.removeEventListener('change', update);
  }, []);

  function toggle() {
    const theme = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    setDark(!dark);
    try {
      localStorage.setItem('fenr-theme', theme);
    } catch {
      /* Private storage may be unavailable. */
    }
  }

  const label = `Switch to ${dark ? 'light' : 'dark'} mode`;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {dark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
          </>
        ) : (
          <path d="M20.5 14a8.5 8.5 0 0 1-10.5-10.5A8.5 8.5 0 1 0 20.5 14Z" />
        )}
      </svg>
    </button>
  );
}
