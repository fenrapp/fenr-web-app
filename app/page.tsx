import Image from 'next/image';
import { siteConfig } from './site-config';

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

const capabilityGroups = [
  {
    number: '01',
    title: 'Dynamic Cards',
    copy: 'Swipe through a dashboard that changes with the ride. Speed stays first, charging appears automatically, and every other card can be shown, hidden or reordered.',
    detail: 'Trip · Efficiency · Range · Health · Dynamics',
  },
  {
    number: '02',
    title: 'Complete navigation',
    copy: 'Plan road routes, record as you go, import or export GPX, follow a trail in either direction and get clear off-trail, fork and road-exit guidance.',
    detail: 'Road · Enduro · GPX · Saved routes',
  },
  {
    number: '03',
    title: 'Charge and battery',
    copy: 'Control supported charge power and target state of charge, then inspect pack health, cell balance, voltage delta and thermal data in one place.',
    detail: 'Power · Target · Cells · Thermal',
  },
  {
    number: '04',
    title: 'Bike controls',
    copy: 'Tune power, regenerative braking, traction and regen traction for five base maps when supported. Bike Lock adds optional PIN and Face ID protection.',
    detail: '5 maps · Capability-gated controls',
  },
  {
    number: '05',
    title: 'Ride history',
    copy: 'Keep distance, time, speed, efficiency and energy use for every ride, with lean, pitch, peak use, peak regen and recent-ride comparisons.',
    detail: 'Energy charts · Dynamics · Comparisons',
  },
  {
    number: '06',
    title: 'Maintenance log',
    copy: 'Record service, repairs, workshop notes and cost. Turn published Stark guidance into editable reminders by date, riding hours or odometer.',
    detail: 'Service history · Official guidance',
  },
  {
    number: '07',
    title: 'Advanced telemetry',
    copy: 'Go deeper with decoded and raw vehicle, battery and power signals, connection events, signal strength and exportable Bluetooth capture logs.',
    detail: 'Live values · Raw flags · BLE logs',
  },
  {
    number: '08',
    title: 'Live Activities',
    copy: 'Keep the ride visible beyond the app. The Lock Screen and Dynamic Island show battery, mode, speed and run state while riding, then charge target, ETA, power, current and temperature while plugged in.',
    detail: 'Lock Screen · Dynamic Island · Ride + charge',
  },
] as const;

const dynamicCards = [
  ['Speedometer', 'Always first while riding'],
  ['Bike Lock', 'Lock and unlock from the dashboard'],
  ['Ride Navigation', 'Launch or return to active guidance'],
  ['Current Trip', 'Time, distance, speed and trip battery'],
  ['Efficiency', 'Live consumption and 10-ride trend'],
  ['Range', 'Adaptive estimate and battery use'],
  ['System Health', 'Health, cells and thermal pages'],
  ['Ride Dynamics', 'Lean, pitch and course instruments'],
] as const;

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="FENR home">
          <Image unoptimized src="/assets/fenr-icon-light.png" alt="" width="44" height="44" loading="eager" />
          <span>FENR</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#product">Product</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#open-source">Open source</a>
          <a href="#safety">Safety</a>
        </nav>
        <a className="header-cta" href={siteConfig.testFlightUrl}>
          Join TestFlight
          <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">FENR · IPHONE + APPLE WATCH</p>
            <h1>Your bike.<br />Clearly connected.</h1>
            <p className="hero-intro">
              The complete open-source riding companion for compatible Stark electric motorcycles.
              Live telemetry, full navigation, battery insight and guarded controls, without the noise.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href={siteConfig.testFlightUrl}>
                Join the TestFlight
                <ArrowIcon />
              </a>
              <a className="text-link" href="#product">Explore FENR</a>
            </div>
            <p className="hero-note">Independent. Open source. Rider-built.</p>
          </div>

          <div className="hero-visual" aria-label="FENR live riding dashboard">
            <div className="trail-panel" />
            <div className="dashboard-frame">
              <div className="dashboard-camera" aria-hidden="true" />
              <Image
                unoptimized
                priority
                src="/assets/dashboard-riding.png"
                alt="FENR dashboard showing speed, battery, power mode and energy use"
                width="2622"
                height="1206"
              />
            </div>
            <div className="live-chip"><span /> LIVE BIKE DATA</div>
            <p className="visual-caption">RIDE · NAVIGATE · UNDERSTAND</p>
          </div>
        </section>

        <div className="signal-strip" aria-label="FENR core capabilities">
          <span>Live telemetry</span>
          <span>Road + trail navigation</span>
          <span>Guarded controls</span>
          <span>Live Activities</span>
        </div>

        <section className="product-section" id="product">
          <div className="section-heading light-heading">
            <p className="eyebrow">THE WHOLE RIDE, IN ONE PLACE</p>
            <h2>Everything important.<br />One glance away.</h2>
            <p>
              FENR starts as a focused speedometer and unfolds into the tool you need next.
              Scroll through the real app, from riding and navigation to charging, setup and diagnostics.
            </p>
          </div>

          <div className="showcase-nav" aria-label="Product showcase shortcuts">
            <span>Scroll to explore</span>
            <div>
              <a href="#showcase-ride">Ride</a>
              <a href="#showcase-navigation">Navigate</a>
              <a href="#showcase-cards">Cards</a>
              <a href="#showcase-charge">Charge</a>
              <a href="#showcase-battery">Battery</a>
              <a href="#showcase-controls">Control</a>
              <a href="#showcase-history">Bike log</a>
              <a href="#showcase-telemetry">Telemetry</a>
              <a href="#showcase-live">Live</a>
            </div>
          </div>

          <div className="showcase-rail" aria-label="Scrollable FENR product tour">
            <article className="showcase-card showcase-landscape" id="showcase-ride">
              <div className="showcase-copy">
                <p>01 · LIVE DASHBOARD</p>
                <h3>Ride with the signal, not the noise.</h3>
                <span>Speed, battery, map, power and regeneration stay legible in a landscape-first display.</span>
              </div>
              <div className="showcase-screen landscape-screen">
                <Image unoptimized src="/assets/dashboard-riding.png" alt="FENR live ride dashboard" width="2622" height="1206" loading="eager" />
              </div>
            </article>

            <article className="showcase-card showcase-landscape nav-showcase" id="showcase-navigation">
              <div className="showcase-copy">
                <p>02 · COMPLETE NAVIGATION</p>
                <h3>Road when you need it. Trail when you want it.</h3>
                <span>Search, route, record, import GPX and follow enduro guidance with an always-available mini map.</span>
              </div>
              <div className="showcase-screen landscape-screen">
                <Image unoptimized src="/assets/navigation.png" alt="FENR ride planning map with GPX import and ride recording" width="1800" height="828" loading="eager" />
              </div>
            </article>

            <article className="showcase-card showcase-portrait" id="showcase-cards">
              <div className="showcase-copy">
                <p>03 · DYNAMIC CARDS</p>
                <h3>A dashboard that adapts to the moment.</h3>
                <span>Keep the cards you use, order their pages, and swipe vertically without leaving the riding display.</span>
              </div>
              <div className="phone-screen">
                <Image unoptimized src="/assets/dashboard-cards.png" alt="FENR Dashboard Cards settings" width="720" height="1565" loading="eager" />
              </div>
            </article>

            <article className="showcase-card showcase-landscape charge-showcase" id="showcase-charge">
              <div className="showcase-copy">
                <p>04 · CHARGE + BATTERY</p>
                <h3>Charging, without guesswork.</h3>
                <span>See power, target, ETA and temperature, keep charging visible through Live Activities, and inspect every validated cell when you need the deeper picture.</span>
              </div>
              <div className="showcase-screen landscape-screen">
                <Image unoptimized src="/assets/dashboard-charging.png" alt="FENR charging dashboard with power and charge-target controls" width="2622" height="1206" loading="eager" />
              </div>
            </article>

            <article className="showcase-card battery-showcase light-showcase" id="showcase-battery">
              <div className="showcase-copy">
                <p>05 · BATTERY HEALTH</p>
                <h3>See the pack, not just a percentage.</h3>
                <span>Inspect state of health, cell spread, voltage deviation, balancing and every temperature sensor from live validated data.</span>
              </div>
              <div className="phone-pair">
                <div className="phone-screen">
                  <Image unoptimized src="/assets/battery-health.png" alt="FENR Battery Health overview with state of health, voltage and cell delta" width="720" height="1565" loading="eager" />
                </div>
                <div className="phone-screen phone-screen-raised">
                  <Image unoptimized src="/assets/battery-cells.png" alt="FENR battery cell detail with pack range and health distribution" width="720" height="1565" loading="eager" />
                </div>
              </div>
            </article>

            <article className="showcase-card showcase-portrait controls-showcase" id="showcase-controls">
              <div className="showcase-copy">
                <p>06 · GUARDED CONTROLS</p>
                <h3>Five maps. Your preferred response.</h3>
                <span>Adjust supported base-map power and regenerative braking, with traction controls available only when compatibility is verified.</span>
              </div>
              <div className="phone-screen">
                <Image unoptimized src="/assets/power-modes.png" alt="FENR Power Modes screen showing five maps and performance controls" width="720" height="1565" loading="eager" />
              </div>
            </article>

            <article className="showcase-card history-showcase light-showcase" id="showcase-history">
              <div className="showcase-copy">
                <p>07 · BIKE LOG</p>
                <h3>Every ride. Every service. One record.</h3>
                <span>Compare ride energy and dynamics, then log maintenance, costs and reminders against published Stark service guidance.</span>
              </div>
              <div className="phone-pair">
                <div className="phone-screen">
                  <Image unoptimized src="/assets/ride-history.png" alt="FENR ride history with distance, time and efficiency" width="720" height="1565" loading="eager" />
                </div>
                <div className="phone-screen phone-screen-raised">
                  <Image unoptimized src="/assets/maintenance.png" alt="FENR maintenance log with service details and reminders" width="720" height="1565" loading="eager" />
                </div>
              </div>
            </article>

            <article className="showcase-card showcase-portrait telemetry-showcase light-showcase" id="showcase-telemetry">
              <div className="showcase-copy">
                <p>08 · ADVANCED TELEMETRY</p>
                <h3>When you want the whole signal.</h3>
                <span>Open decoded vehicle, battery and power values, inspect connection quality and export Bluetooth capture logs for deeper analysis.</span>
              </div>
              <div className="phone-screen">
                <Image unoptimized src="/assets/diagnostics.png" alt="FENR live diagnostics with power, battery and connection telemetry" width="720" height="1565" loading="eager" />
              </div>
            </article>

            <article className="showcase-card showcase-portrait live-showcase" id="showcase-live">
              <div className="showcase-copy">
                <p>09 · LIVE ACTIVITIES</p>
                <h3>The essentials stay visible.</h3>
                <span>Follow battery, mode, speed and bike state from the Lock Screen and Dynamic Island. Charging adds target, ETA, power, current and temperature.</span>
              </div>
              <div className="phone-screen lock-screen">
                <Image unoptimized src="/assets/live-activity.png" alt="FENR Live Activity on the iPhone Lock Screen" width="720" height="1565" loading="eager" />
              </div>
            </article>
          </div>

          <div className="product-facts">
            <div><strong>8</strong><span>riding card types</span></div>
            <div><strong>2</strong><span>navigation modes</span></div>
            <div><strong>5</strong><span>editable base maps</span></div>
          </div>
        </section>

        <section className="cards-section" id="dynamic-cards">
          <div className="cards-intro">
            <p className="eyebrow">DYNAMIC CARDS</p>
            <h2>One dashboard.<br />Your order.</h2>
            <p>
              Speedometer always opens first. Charging takes over only when the bike is plugged in.
              Everything else is a configurable vertical deck. Depth is one swipe away, never all over the screen.
            </p>
          </div>
          <ol className="card-index">
            {dynamicCards.map(([title, copy], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><strong>{title}</strong><small>{copy}</small></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="capabilities-section" id="capabilities">
          <div className="section-heading compact-heading">
            <p className="eyebrow">MORE THAN A DASHBOARD</p>
            <h2>From trailhead<br />to workshop.</h2>
            <p>Useful depth for every part of owning and riding an electric motorcycle.</p>
          </div>

          <div className="capability-grid">
            {capabilityGroups.map((feature) => (
              <article className="capability-card" key={feature.number}>
                <div className="capability-card-top">
                  <span>{feature.number}</span>
                  <span className="feature-cross" aria-hidden="true">+</span>
                </div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </div>
                <p className="capability-detail">{feature.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="maintenance-section" id="maintenance">
          <div className="maintenance-copy">
            <p className="eyebrow">THE BIKE LOG</p>
            <h2>Look after the ride, not a spreadsheet.</h2>
            <p>
              Log inspections, oil, suspension, brakes, chain, tires, coolant and electrical work.
              FENR includes published Stark interval guidance and turns it into reminders you can edit
              around how and where you actually ride.
            </p>
            <div className="maintenance-tags" aria-label="Maintenance reminder types">
              <span>By date</span><span>By riding hours</span><span>By odometer</span>
            </div>
          </div>
          <div className="maintenance-visual">
            <div className="maintenance-orbit" aria-hidden="true" />
            <div className="phone-screen maintenance-phone">
              <Image unoptimized src="/assets/maintenance.png" alt="FENR maintenance entry with service details and reminders" width="720" height="1565" loading="eager" />
            </div>
          </div>
        </section>

        <section className="watch-section" id="watch">
          <div className="watch-copy">
            <p className="eyebrow">FENR ON APPLE WATCH</p>
            <h2>On your wrist.<br />Direct from the bike.</h2>
            <p>
              The Watch app connects directly over Bluetooth for compact ride and charging telemetry. No iPhone relay required.
            </p>
            <div className="watch-points">
              <span>Direct Bluetooth</span>
              <span>Ride + charge views</span>
              <span>Telemetry-only</span>
            </div>
          </div>

          <div className="watch-visual" aria-label="FENR charging dashboard on Apple Watch">
            <div className="watch-halo" />
            <div className="watch-case">
              <Image unoptimized src="/assets/watch-charging.png" alt="FENR Watch app showing charge percentage, ETA, power and current" width="416" height="496" loading="eager" />
            </div>
            <span className="watch-label watch-label-top">79% CHARGED</span>
            <span className="watch-label watch-label-bottom">DIRECT CONNECTION</span>
          </div>
        </section>

        <section className="open-source-section" id="open-source">
          <div className="open-source-mark" aria-hidden="true">{'{ }'}</div>
          <div className="open-source-copy">
            <p className="eyebrow">OPEN BY DESIGN</p>
            <h2>Read the code.<br />Check the boundaries.</h2>
            <p>
              FENR is open source because trust should be inspectable. See how telemetry becomes a dashboard,
              how controls are gated, and how clean-room interoperability is documented. Fork it, question it,
              or help make it better.
            </p>
            <div className="source-actions">
              <a className="source-primary" href={siteConfig.githubUrl}>
                <GitHubIcon /> Explore FENR on GitHub <ArrowIcon />
              </a>
              <a className="source-secondary" href={siteConfig.protocolResearchUrl}>Protocol research <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="safety-section" id="safety">
          <div className="section-heading safety-heading">
            <p className="eyebrow">BUILT WITH RESTRAINT</p>
            <h2>Control without shortcuts.</h2>
            <p>
              Most of FENR is read-only. Supported writes are deliberately narrow, capability-aware and designed to stop when the bike cannot confirm the expected state.
            </p>
          </div>

          <div className="safety-principles">
            <article>
              <span>01</span>
              <h3>Firmware-aware</h3>
              <p>Controls become available only when reported firmware, capability and live telemetry support them.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Serialized by design</h3>
              <p>Writes stay ordered, start with safe no-op checks and preserve every related value.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Confirmed fresh</h3>
              <p>A request is not treated as success until telemetry or a fresh read-back matches it.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Inspectable</h3>
              <p>The implementation and protocol research are public, so safety boundaries can be reviewed rather than merely promised.</p>
            </article>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="final-cta-image" aria-hidden="true" />
          <div className="final-cta-copy">
            <Image unoptimized src="/assets/fenr-icon-dark.png" alt="" width="88" height="88" loading="eager" />
            <p className="eyebrow">COMING TO TESTFLIGHT</p>
            <h2>Take the whole ride with you.</h2>
            <p>Dashboard, navigation, diagnostics and bike care. One focused app, built in the open.</p>
            <a className="primary-cta primary-cta-light" href={siteConfig.testFlightUrl}>
              Join the TestFlight
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="footer-brand" href="#top">FENR</a>
        <p>
          FENR is an independent, unofficial app and is not affiliated with, endorsed by,
          sponsored by or otherwise connected to Stark Future. Stark and related trademarks
          belong to their respective owners.
        </p>
        <span>© 2026 FENR · MIT</span>
      </footer>
    </>
  );
}
