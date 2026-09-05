'use client';

import { useEffect, useRef, useState } from 'react';
import media from './optimized-media.json';
import { useColorScheme } from './use-color-scheme';
import { shouldPlayPreview, type PlaybackIntent } from './media-policy';
import { AppScreenshot } from './app-screenshot';

export function HeroFilm() {
  const theme = useColorScheme();
  const [request, setRequest] = useState<{
    intent: PlaybackIntent;
    revision: number;
  }>({ intent: 'auto', revision: 0 });

  if (theme === null) {
    return (
      <div className="hero-device" aria-label="FENR live riding dashboard">
        <AppScreenshot
          src="/assets/fenr-ride-loop-poster.png"
          alt="FENR riding dashboard, recorded with synthetic simulator data"
          width={1280}
          height={588}
          sizes="(max-width: 768px) 100vw, 90vw"
          loading="eager"
        />
      </div>
    );
  }

  return (
    <Film
      key={theme}
      theme={theme}
      intent={request.intent}
      revision={request.revision}
      onIntentChange={(intent) =>
        setRequest((previous) => ({ intent, revision: previous.revision + 1 }))
      }
    />
  );
}

function Film({
  theme,
  intent,
  revision,
  onIntentChange,
}: {
  theme: 'light' | 'dark';
  intent: PlaybackIntent;
  revision: number;
  onIntentChange: (intent: 'play' | 'pause') => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const images: Record<string, { src: string }> = media.images;
  const src = media.videos[theme];
  const poster = images[`fenr-ride-loop-poster-${theme}`].src;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (
      navigator as Navigator & {
        connection?: EventTarget & {
          saveData?: boolean;
          effectiveType?: string;
        };
      }
    ).connection;
    let visible = false;
    let active = true;
    const update = () => {
      if (
        shouldPlayPreview({
          intent,
          visible,
          documentVisible: !document.hidden,
          reducedMotion: reduced.matches,
          saveData: connection?.saveData,
          effectiveType: connection?.effectiveType,
        })
      ) {
        if (video.getAttribute('src') !== src) {
          video.src = src;
          video.load();
        }
        void video
          .play()
          .then(() => {
            if (active && (!visible || document.hidden)) video.pause();
          })
          .catch(() => undefined);
      } else video.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
        update();
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    reduced.addEventListener('change', update);
    connection?.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      active = false;
      observer.disconnect();
      reduced.removeEventListener('change', update);
      connection?.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
      video.pause();
    };
  }, [intent, revision, src]);

  return (
    <>
      <div className="hero-device" aria-label="FENR live riding dashboard">
        <video
          ref={videoRef}
          className="hero-dashboard-video"
          aria-label="FENR riding dashboard, recorded with synthetic simulator data"
          width="1280"
          height="588"
          loop
          muted
          playsInline
          preload="none"
          poster={poster}
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setPlaying(false)}
        />
      </div>
      <button
        type="button"
        className="hero-playback"
        onClick={() => onIntentChange(playing ? 'pause' : 'play')}
        aria-label={playing ? 'Pause app preview' : 'Play app preview'}
      >
        <svg viewBox="0 0 16 16" aria-hidden="true">
          {playing ? <path d="M5 3v10M11 3v10" /> : <path d="m5 3 8 5-8 5Z" />}
        </svg>
        {playing ? 'Pause' : 'Play'} preview
      </button>
    </>
  );
}
