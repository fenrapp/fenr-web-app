/* oxlint-disable next/no-html-link-for-pages -- Native document navigation is intentional for this static export; the client router fails in production. */
import type { ReactNode } from 'react';
import { ResponsiveImage } from './responsive-image';
import { ThemeToggle } from './theme-toggle';
import { legalConfig } from './legal-config';
import './color-scheme.css';
import './legal.css';

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

export function LegalDocument({
  title,
  introduction,
  sections,
}: {
  title: string;
  introduction: string;
  sections: readonly LegalSection[];
}) {
  return (
    <div className="legal-page">
      <a className="legal-skip" href="#legal-content">
        Skip to document
      </a>
      <header className="legal-header">
        <a className="premium-brand" href="/" aria-label="FENR home">
          <ResponsiveImage
            src="/assets/fenr-icon-light.webp"
            width={38}
            height={38}
            sizes="38px"
            alt=""
            loading="eager"
          />
          <span>FENR</span>
        </a>
        <div className="legal-header-actions">
          <a href="/">Back to FENR</a>
          <ThemeToggle />
        </div>
      </header>
      <main id="legal-content" className="legal-main">
        <div className="legal-intro">
          <p className="premium-eyebrow">FENR / LEGAL</p>
          <h1>{title}</h1>
          <p>{introduction}</p>
          <p className="legal-date">
            Last updated:{' '}
            <time dateTime={legalConfig.updatedISO}>{legalConfig.updated}</time>
          </p>
        </div>
        <div className="legal-layout">
          <nav className="legal-contents" aria-label="Document contents">
            <p>On this page</p>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="legal-body">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-title`}
              >
                <h2 id={`${section.id}-title`}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {section.title}
                </h2>
                {section.content}
              </section>
            ))}
          </div>
        </div>
      </main>
      <footer className="legal-footer">
        <p>
          FENR is independent, unofficial and not affiliated with Stark Future.
        </p>
        <nav aria-label="Legal links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms &amp; Conditions</a>
          <a href={`mailto:${legalConfig.email}`}>Contact</a>
        </nav>
      </footer>
    </div>
  );
}
