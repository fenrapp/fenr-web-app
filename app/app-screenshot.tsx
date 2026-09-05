'use client';

import type { ImgHTMLAttributes } from 'react';
import media from './optimized-media.json';
import { useColorScheme } from './use-color-scheme';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  src: string;
  alt: string;
  sizes: string;
};

export function AppScreenshot({
  src,
  alt,
  sizes,
  loading = 'lazy',
  ...props
}: Props) {
  const theme = useColorScheme();
  const name =
    src
      .split('/')
      .pop()
      ?.replace(/\.[^.]+$/, '') ?? '';
  const images: Record<string, { src: string; srcSet: string }> = media.images;
  const dark = images[`${name}-dark`] ?? images[name];
  const light = images[`${name}-light`] ?? dark;

  const renderPicture = (appearance: 'light' | 'dark' | 'system' | null) => (
    <picture
      className="app-screenshot"
      data-theme-pending={appearance === null ? '' : undefined}
    >
      <source
        media={
          appearance === 'system'
            ? '(prefers-color-scheme: dark)'
            : appearance === 'dark'
              ? 'all'
              : 'not all'
        }
        srcSet={appearance === null ? undefined : dark?.srcSet}
        sizes={sizes}
      />
      {/* One image surface. The browser requests only the selected appearance. */}
      {/* oxlint-disable-next-line next/no-img-element */}
      <img
        {...props}
        src={appearance === null ? undefined : (light?.src ?? src)}
        srcSet={appearance === null ? undefined : light?.srcSet}
        sizes={sizes}
        alt={alt}
        loading={loading}
        decoding="async"
      />
    </picture>
  );

  return (
    <>
      {renderPicture(theme)}
      {theme === null && (
        <noscript>
          <style>{'.app-screenshot[data-theme-pending]{display:none}'}</style>
          {renderPicture('system')}
        </noscript>
      )}
    </>
  );
}
