'use client';

import { ResponsiveImage } from './responsive-image';
import { useEffect, useRef, useState } from 'react';
import './product-tour.css';

interface TourCard {
  alt: string;
  copy: string;
  id: string;
  images: readonly { height: number; src: string; width: number }[];
  kind: 'landscape' | 'phone' | 'pair';
  label: string;
  shortcut: string;
  detail: string;
  number: string;
  title: string;
}

const tourCards: readonly TourCard[] = [
  {
    number: '01',
    id: 'showcase-ride',
    label: 'LIVE DASHBOARD',
    title: 'Just you. And the ride.',
    shortcut: 'Dashboard',
    detail: 'Speed / Battery / Power / Regen',
    copy: 'Speed, battery, map, power and regeneration stay legible in a landscape-first display.',
    kind: 'landscape',
    alt: 'FENR live riding dashboard',
    images: [
      { src: '/assets/dashboard-riding.webp', width: 2622, height: 1206 },
    ],
  },
  {
    number: '02',
    id: 'showcase-navigation',
    label: 'COMPLETE NAVIGATION',
    title: 'Road planned. Trail remembered.',
    shortcut: 'Navigation',
    detail: 'Road / Enduro / GPX / Recording',
    copy: 'Search, route, record, import GPX and follow enduro guidance in either direction with an always-available mini map.',
    kind: 'landscape',
    alt: 'FENR route planning map with GPX import and ride recording',
    images: [{ src: '/assets/navigation.webp', width: 1800, height: 828 }],
  },
  {
    number: '03',
    id: 'showcase-cards',
    label: 'DYNAMIC CARDS',
    title: 'Your dashboard. Your order.',
    shortcut: 'Cards',
    detail: '8 riding cards / One vertical swipe',
    copy: 'Speed stays first. Charging appears when you plug in. Show, hide and reorder the other cards, from trip and range to efficiency and ride dynamics.',
    kind: 'phone',
    alt: 'FENR Dashboard Cards settings with configurable riding cards',
    images: [{ src: '/assets/dashboard-cards.webp', width: 720, height: 1565 }],
  },
  {
    number: '04',
    id: 'showcase-charge',
    label: 'CHARGING',
    title: 'Charging, without guesswork.',
    shortcut: 'Charging',
    detail: 'Charge target / Power / ETA / Temperature',
    copy: 'Set supported power and target state of charge, then follow ETA, current and temperature in real time.',
    kind: 'landscape',
    alt: 'FENR charging dashboard with power and charge target controls',
    images: [
      { src: '/assets/dashboard-charging.webp', width: 2622, height: 1206 },
    ],
  },
  {
    number: '05',
    id: 'showcase-battery',
    label: 'BATTERY HEALTH',
    title: 'Know your battery. Cell by cell.',
    shortcut: 'Battery',
    detail: 'Health / Cell balance / Thermal',
    copy: 'Inspect state of health, cell spread, voltage deviation, balancing and thermal data from validated live readings.',
    kind: 'pair',
    alt: 'FENR Battery Health overview',
    images: [
      { src: '/assets/battery-health.webp', width: 720, height: 1565 },
      { src: '/assets/battery-cells.webp', width: 720, height: 1565 },
    ],
  },
  {
    number: '06',
    id: 'showcase-controls',
    label: 'GUARDED CONTROLS',
    title: 'Five maps. Your response.',
    shortcut: 'Controls',
    detail: 'Power / Regen / Traction / Bike Lock',
    copy: 'Adjust supported power, regeneration and traction values, with Bike Lock protected by optional PIN and Face ID.',
    kind: 'phone',
    alt: 'FENR Power Modes showing five configurable base maps',
    images: [{ src: '/assets/power-modes.webp', width: 720, height: 1565 }],
  },
  {
    number: '07',
    id: 'showcase-history',
    label: 'RIDE HISTORY',
    title: 'A little more from every ride.',
    shortcut: 'History',
    detail: 'Energy / Dynamics / Ride comparisons',
    copy: 'Keep distance, time, speed, efficiency, energy use and ride dynamics, then compare recent sessions.',
    kind: 'phone',
    alt: 'FENR ride history with distance, time and efficiency',
    images: [{ src: '/assets/ride-history.webp', width: 720, height: 1565 }],
  },
  {
    number: '08',
    id: 'showcase-maintenance',
    label: 'MAINTENANCE LOG',
    title: 'Look after the next ride.',
    shortcut: 'Maintenance',
    detail: 'Date / Riding hours / Odometer',
    copy: 'Service, repairs, workshop notes and costs in one record. Editable reminders follow the published Stark maintenance guidance.',
    kind: 'phone',
    alt: 'FENR maintenance entry with service details and reminders',
    images: [{ src: '/assets/maintenance.webp', width: 720, height: 1565 }],
  },
  {
    number: '09',
    id: 'showcase-telemetry',
    label: 'ADVANCED TELEMETRY',
    title: 'For the curious. And the precise.',
    shortcut: 'Telemetry',
    detail: 'Live values / Raw flags / BLE logs',
    copy: 'Open decoded and raw vehicle values, inspect connection quality and export Bluetooth capture logs for deeper analysis.',
    kind: 'phone',
    alt: 'FENR live diagnostics with vehicle and connection telemetry',
    images: [{ src: '/assets/diagnostics.webp', width: 720, height: 1565 }],
  },
] as const;

function TourVisual({ card }: { card: TourCard }) {
  if (card.kind === 'landscape') {
    const image = card.images[0];
    return (
      <div className="tour-landscape-screen">
        <ResponsiveImage
          sizes="(max-width: 700px) 85vw, 738px"
          src={image.src}
          alt={card.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`tour-phone-stage${card.kind === 'pair' ? ' is-pair' : ''}`}
    >
      {card.images.map((image, index) => (
        <div className="tour-phone" key={image.src}>
          <ResponsiveImage
            sizes="(max-width: 700px) 180px, 226px"
            src={image.src}
            alt={
              index === 0
                ? card.alt
                : 'FENR individual battery cell voltages and health distribution'
            }
            width={image.width}
            height={image.height}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export function ProductStory() {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const inset = parseFloat(getComputedStyle(rail).paddingLeft);
        const origin = rail.getBoundingClientRect().left + inset;
        const distances = Array.from(rail.children, (card) =>
          Math.abs(card.getBoundingClientRect().left - origin),
        );
        setActiveIndex(distances.indexOf(Math.min(...distances)));
      });
    };
    const resize = new ResizeObserver(update);
    resize.observe(rail);
    rail.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      rail.removeEventListener('scroll', update);
    };
  }, []);

  const goTo = (index: number) => {
    const rail = railRef.current;
    const card = rail?.children[index];
    if (!rail || !card) return;
    const inset = parseFloat(getComputedStyle(rail).paddingLeft);
    rail.scrollTo({
      left:
        rail.scrollLeft +
        card.getBoundingClientRect().left -
        rail.getBoundingClientRect().left -
        inset,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  };

  return (
    <section className="product-tour" id="product" aria-labelledby="tour-title">
      <div className="tour-intro" data-reveal>
        <p className="premium-eyebrow">THE WHOLE RIDE, IN ONE PLACE</p>
        <div className="tour-intro-row">
          <h2 id="tour-title">
            Everything important.
            <br />
            <span>One glance away.</span>
          </h2>
          <p>
            Start with the ride. Go deeper into navigation, energy and bike care
            whenever you need to.
          </p>
        </div>
      </div>

      <div className="tour-nav" aria-label="Product tour shortcuts">
        {tourCards.map((card, index) => (
          <a
            href={`#${card.id}`}
            key={card.id}
            aria-current={activeIndex === index ? 'true' : undefined}
            onClick={(event) => {
              event.preventDefault();
              goTo(index);
            }}
          >
            {card.shortcut}
          </a>
        ))}
      </div>

      <div
        className="tour-rail"
        id="product-tour-rail"
        aria-label="Scrollable FENR product tour"
        ref={railRef}
      >
        {tourCards.map((card) => (
          <article
            className={`tour-card tour-card-${card.kind}`}
            id={card.id}
            key={card.id}
            aria-labelledby={`${card.id}-title`}
          >
            <div className="tour-copy">
              <p>
                {card.number} <span>{card.label}</span>
              </p>
              <h3 id={`${card.id}-title`}>{card.title}</h3>
              <div>{card.copy}</div>
            </div>
            <TourVisual card={card} />
            <p className="tour-detail">{card.detail}</p>
          </article>
        ))}
      </div>
      <div className="tour-footer">
        <p>
          <span>{tourCards[activeIndex].number}</span> / 09 <i /> Explore the
          app
        </p>
        <div className="tour-controls">
          <button
            type="button"
            aria-label="Previous feature"
            aria-controls="product-tour-rail"
            disabled={activeIndex === 0}
            onClick={() => goTo(activeIndex - 1)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M19 12H5m6-6-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next feature"
            aria-controls="product-tour-rail"
            disabled={activeIndex === tourCards.length - 1}
            onClick={() => goTo(activeIndex + 1)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
