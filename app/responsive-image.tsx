import type { ImgHTMLAttributes } from 'react';
import media from './optimized-media.json';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  src: string;
  alt: string;
  sizes: string;
};

export function ResponsiveImage({
  src,
  alt,
  loading = 'lazy',
  ...props
}: Props) {
  const name = src
    .split('/')
    .pop()
    ?.replace(/\.[^.]+$/, '');
  const asset = media.images[name as keyof typeof media.images];
  return (
    // Static export: srcSet points to pre-optimized files, with no runtime image endpoint.
    // oxlint-disable-next-line next/no-img-element
    <img
      {...props}
      alt={alt}
      src={asset?.src ?? src}
      srcSet={asset?.srcSet}
      loading={loading}
      decoding="async"
    />
  );
}
