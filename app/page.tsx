import Image from 'next/image';
import { MotionController } from './motion-controller';
import { ProductStory } from './product-story';
import { siteConfig } from './site-config';
import './companions.css';

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.46.08.63-.2.63-.45v-1.78c-2.56.56-3.1-1.09-3.1-1.09-.42-1.06-1.03-1.34-1.03-1.34-.84-.58.07-.57.07-.57.93.07 1.42.96 1.42.96.83 1.42 2.17 1.01 2.7.77.08-.6.32-1.01.59-1.24-2.05-.23-4.2-1.02-4.2-4.55 0-1 .36-1.82.95-2.46-.1-.23-.41-1.17.09-2.43 0 0 .78-.25 2.53.94a8.8 8.8 0 0 1 4.6 0c1.76-1.19 2.53-.94 2.53-.94.5 1.26.19 2.2.1 2.43.59.64.95 1.46.95 2.46 0 3.54-2.16 4.31-4.21 4.54.33.29.62.85.62 1.72v2.59c0 .25.17.54.63.45A9.2 9.2 0 0 0 12 2.8Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <MotionController />
      <div className="premium-header-shell">
        <header className="premium-header">
          <a className="premium-brand" href="#top" aria-label="FENR home">
            <Image
              unoptimized
              src="/assets/fenr-icon-light.webp"
              alt=""
              width="38"
              height="38"
              priority
            />
            <span>FENR</span>
          </a>
          <nav className="premium-nav" aria-label="Primary navigation">
            <a href="#product">Product</a>
            <a href="#watch">Beyond iPhone</a>
            <a href="#open-source">Open source</a>
          </nav>
          <a
            className="premium-header-cta"
            href={siteConfig.testFlightUrl}
            aria-label="Join TestFlight"
          >
            <span className="premium-header-label-full">Join TestFlight</span>
            <span className="premium-header-label-compact" aria-hidden="true">
              Join
            </span>
            <ArrowIcon />
          </a>
        </header>
      </div>

      <main>
        <span
          className="header-sentinel"
          data-header-sentinel
          aria-hidden="true"
        />
        <section className="premium-hero" id="top">
          <div className="premium-hero-copy" data-reveal>
            <p className="premium-eyebrow">FENR FOR IPHONE + APPLE WATCH</p>
            <h1>
              Your bike.
              <br />
              Clearly connected.
            </h1>
            <p className="premium-hero-intro">
              Live telemetry, complete navigation and guarded controls for
              compatible Stark electric motorcycles. Open source, by design.
            </p>
            <div className="premium-hero-actions">
              <a
                className="premium-primary-cta"
                href={siteConfig.testFlightUrl}
              >
                Join TestFlight
                <ArrowIcon />
              </a>
              <a className="premium-text-link" href="#product">
                See how it works
              </a>
            </div>
          </div>

          <div className="premium-hero-stage" id="ride-preview" data-reveal>
            <div className="hero-trail" aria-hidden="true" />
            <div
              className="hero-device"
              aria-label="FENR live riding dashboard"
            >
              <div className="hero-device-camera" aria-hidden="true" />
              <Image
                unoptimized
                priority
                className="hero-video-fallback"
                src="/assets/dashboard-riding.webp"
                alt="FENR dashboard showing speed, battery, power mode and energy use"
                width="2622"
                height="1206"
              />
              <div className="hero-video-layer" aria-hidden="true">
                <video
                  className="hero-dashboard-video"
                  data-autoplay-video
                  loop
                  muted
                  playsInline
                  poster="/assets/fenr-ride-loop-poster-landscape.png"
                  preload="metadata"
                >
                  <source
                    src="/assets/fenr-ride-loop-landscape.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="hero-live-pill">
              <span /> Live simulator data
            </div>
            <div className="hero-stage-note">
              <span>60 km/h</span>
              <span>Map 5</span>
              <span>12 kW</span>
            </div>
          </div>

          <div
            className="premium-signal-line"
            aria-label="FENR core capabilities"
            data-reveal
          >
            <span>Live telemetry</span>
            <span>Road + trail navigation</span>
            <span>Guarded controls</span>
            <span>Open source</span>
          </div>
        </section>

        <ProductStory />

        <section className="story-facts" aria-label="FENR product facts">
          <div data-reveal>
            <strong>8</strong>
            <span>configurable riding cards</span>
          </div>
          <div data-reveal>
            <strong>2</strong>
            <span>navigation modes</span>
          </div>
          <div data-reveal>
            <strong>5</strong>
            <span>editable base maps</span>
          </div>
        </section>

        <section
          className="companion-section"
          id="watch"
          aria-labelledby="companion-title"
        >
          <div className="companion-heading" data-reveal>
            <p className="premium-eyebrow">BEYOND THE APP</p>
            <h2 id="companion-title">A glance is all it takes.</h2>
            <p>On your wrist. On your Lock Screen. Always close.</p>
          </div>

          <div className="companion-list">
            <article className="companion-row" data-reveal>
              <div className="companion-copy">
                <p className="companion-label">01 / APPLE WATCH</p>
                <h3>
                  Your bike.
                  <br />
                  On your wrist.
                </h3>
                <p>
                  Ride and charging telemetry, connected directly to your bike
                  over Bluetooth. A quick look at what matters, without an
                  iPhone relay.
                </p>
                <ul>
                  <li>Direct Bluetooth connection</li>
                  <li>Ride and charge dashboards</li>
                  <li>Compact, read-only telemetry</li>
                </ul>
              </div>
              <figure className="companion-stage companion-stage-watch">
                <div className="companion-watch">
                  <Image
                    unoptimized
                    src="/assets/watch-charging.png"
                    alt="FENR Watch app showing charge percentage, ETA, power and current"
                    width="416"
                    height="496"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <span /> Connected directly to the bike
                </figcaption>
              </figure>
            </article>

            <article className="companion-row" data-reveal id="live-activities">
              <div className="companion-copy">
                <p className="companion-label">02 / LIVE ACTIVITIES</p>
                <h3>
                  Still connected.
                  <br />
                  Even when locked.
                </h3>
                <p>
                  Keep battery, mode and bike state in view on the Lock Screen
                  and Dynamic Island. Plug in, and charging progress stays close
                  too.
                </p>
                <ul>
                  <li>Battery, speed and ride state</li>
                  <li>Charge target and time remaining</li>
                  <li>Power, current and temperature</li>
                </ul>
              </div>
              <figure className="companion-stage companion-stage-live">
                <div className="companion-phone">
                  <Image
                    unoptimized
                    src="/assets/live-activity.webp"
                    alt="FENR Live Activity showing battery, power mode and bike state on the iPhone Lock Screen"
                    width="720"
                    height="1565"
                    loading="lazy"
                  />
                </div>
                <figcaption>The essentials, without opening the app</figcaption>
              </figure>
            </article>
          </div>
        </section>

        <section className="trust-section" id="open-source">
          <div className="trust-intro" data-reveal>
            <div className="trust-mark" aria-hidden="true">
              {'{ }'}
            </div>
            <div className="trust-copy">
              <p className="premium-eyebrow">OPEN BY DESIGN</p>
              <h2>
                Built in the open.
                <br />
                Controlled by design.
              </h2>
              <p>
                Trust should be inspectable. FENR exposes how telemetry becomes
                a dashboard, how clean-room interoperability is documented and
                where every control stops.
              </p>
              <div className="trust-actions">
                <a className="trust-primary" href={siteConfig.githubUrl}>
                  <GitHubIcon /> Explore FENR on GitHub <ArrowIcon />
                </a>
                <a
                  className="trust-secondary"
                  href={siteConfig.protocolResearchUrl}
                >
                  Protocol research <ArrowIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="trust-principles">
            <article data-reveal>
              <span>01</span>
              <h3>Firmware-aware</h3>
              <p>
                Controls appear only when firmware, capability and live
                telemetry support them.
              </p>
            </article>
            <article data-reveal>
              <span>02</span>
              <h3>Serialized by design</h3>
              <p>
                Writes stay ordered, begin with safe no-op checks and preserve
                every related value.
              </p>
            </article>
            <article data-reveal>
              <span>03</span>
              <h3>Confirmed fresh</h3>
              <p>
                Success requires matching telemetry or a fresh read-back from
                the bike.
              </p>
            </article>
            <article data-reveal>
              <span>04</span>
              <h3>Inspectable</h3>
              <p>
                Implementation and protocol research are public, so boundaries
                can be reviewed.
              </p>
            </article>
          </div>
        </section>

        <section className="premium-final-cta" id="testflight">
          <div className="premium-final-background" aria-hidden="true" />
          <div className="premium-final-copy" data-reveal>
            <Image
              unoptimized
              src="/assets/fenr-icon-dark.webp"
              alt=""
              width="76"
              height="76"
              loading="lazy"
            />
            <p className="premium-eyebrow">COMING TO TESTFLIGHT</p>
            <h2>Take the whole ride with you.</h2>
            <p>
              Dashboard, navigation, diagnostics and bike care. One focused app,
              built in the open.
            </p>
            <a className="premium-final-button" href={siteConfig.testFlightUrl}>
              Join TestFlight
              <ArrowIcon />
            </a>
            <small>For compatible Stark electric motorcycles</small>
          </div>
        </section>
      </main>

      <footer>
        <a className="footer-brand" href="#top">
          FENR
        </a>
        <p>
          FENR is an independent, unofficial app and is not affiliated with,
          endorsed by, sponsored by or otherwise connected to Stark Future.
          Stark and related trademarks belong to their respective owners.
        </p>
        <span>© 2026 FENR · MIT</span>
      </footer>
    </>
  );
}
