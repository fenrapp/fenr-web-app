import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalDocument, type LegalSection } from '../legal-document';
import { legalConfig } from '../legal-config';

export const metadata: Metadata = {
  title: 'Terms & Conditions | FENR',
  description:
    'Terms for using FENR, including motorcycle safety, compatibility, open-source licensing and Apple distribution.',
  alternates: { canonical: 'https://fenr.to/terms' },
};

const sections: readonly LegalSection[] = [
  {
    id: 'provider',
    title: 'Provider and scope',
    content: (
      <>
        <p>
          These Terms &amp; Conditions describe the use of the FENR app and
          fenr.to, provided by {legalConfig.provider}, based in{' '}
          {legalConfig.location}. Contact:{' '}
          <a href={`mailto:${legalConfig.email}`}>{legalConfig.email}</a>.
        </p>
        <p>
          By using FENR, you agree to these terms to the extent permitted by
          applicable law. They describe the product and its safe use; they do
          not replace mandatory consumer rights, the applicable Apple
          distribution agreement or rights granted under an open-source license.
        </p>
        <p>
          FENR is an independent, unofficial application. It is not affiliated
          with, endorsed by, sponsored by or otherwise connected to Stark
          Future. References to Stark motorcycles, firmware or maintenance
          guidance do not imply manufacturer approval.
        </p>
      </>
    ),
  },
  {
    id: 'product',
    title: 'What FENR provides',
    content: (
      <>
        <p>
          FENR offers a dashboard and configurable Dynamic Cards, live
          telemetry, battery and charging information, navigation and GPX import
          or export, ride recording and history, maintenance records,
          diagnostics and supported bike controls. The Apple Watch app provides
          compact telemetry through its own direct Bluetooth connection. Live
          Activities can display selected bike information outside the iPhone
          app.
        </p>
        <p>
          Availability depends on the motorcycle, reported firmware,
          capabilities, device permissions, operating-system version, connection
          state and third-party services. A feature shown on the website may not
          be available on every supported configuration. The current app does
          not include FENR accounts, subscriptions or in-app purchasing. Any
          future paid offer will need separate, clear pricing and purchase
          information before you buy.
        </p>
      </>
    ),
  },
  {
    id: 'safe-use',
    title: 'Safe and authorized use',
    content: (
      <>
        <ul>
          <li>
            Connect to or control only a motorcycle you own or are authorized to
            use. Possession of a VIN or the ability to connect does not
            establish ownership or permission.
          </li>
          <li>
            Follow traffic, licensing, age, insurance, equipment and land-access
            rules. FENR does not make a motorcycle road-legal or authorize
            access to a trail.
          </li>
          <li>
            Set up navigation, read detailed information and make configuration
            changes only when safely stopped. Do not handle your phone or Watch
            while riding or let the interface distract you.
          </li>
          <li>
            Follow the manufacturer&apos;s operating, charging and maintenance
            instructions. The motorcycle&apos;s own warnings, physical condition
            and a qualified technician&apos;s assessment take priority over the
            app.
          </li>
          <li>
            Do not use FENR to gain unauthorized access, track another person
            without permission or interfere with a vehicle, person or service.
          </li>
        </ul>
        <p>
          FENR is a supplementary information and control tool, not an emergency
          service, a certified safety system, a replacement for required vehicle
          instruments or a guarantee of safe riding.
        </p>
      </>
    ),
  },
  {
    id: 'controls',
    title: 'Motorcycle controls and compatibility',
    content: (
      <>
        <p>
          Supported writes may include charging power and charge target,
          horsepower, regenerative braking, traction-related settings and bike
          lock. These actions can change how the motorcycle behaves. Understand
          each setting, the physical environment and the manufacturer&apos;s
          limits before confirming a change.
        </p>
        <p>
          FENR uses firmware and capability checks, ordered operations and
          confirmation from telemetry or a fresh read where implemented. Those
          safeguards reduce risk but do not guarantee that every operation will
          succeed, be immediately reflected or be safe in every circumstance.
          Bluetooth disconnections, stale readings and firmware differences can
          affect results.
        </p>
        <p>
          If a result is unclear, do not assume a change succeeded and do not
          keep issuing commands while riding. Stop safely and verify the actual
          motorcycle state. Removing the app does not restore previous vehicle
          settings.
        </p>
        <p>
          Bike Lock is not a substitute for physical security or an assurance
          against theft. Compatibility can change with firmware or hardware
          updates. FENR does not represent that every supported control has been
          physically tested on every motorcycle or firmware version. It does not
          provide arbitrary firmware updates, ownership transfers or
          manufacturer certification.
        </p>
      </>
    ),
  },
  {
    id: 'navigation',
    title: 'Navigation, telemetry and maintenance',
    content: (
      <>
        <p>
          Speed, range, energy, charging ETA, battery-health indicators and
          other measurements or estimates may be incomplete, delayed or
          inaccurate. Do not rely on a single value to decide whether a bike or
          battery is safe to operate or charge.
        </p>
        <p>
          Maps, directions and imported GPX routes may be outdated, unsuitable
          for motorcycles, inaccessible or unlawful to follow. A displayed route
          is not evidence of permission or safety. Use signs, local restrictions
          and real-world conditions as the deciding factors; do not depend on
          FENR for rescue or emergency navigation.
        </p>
        <p>
          Maintenance schedules and reminders are organizational aids based on
          published guidance and the data you enter. They are not an official
          service history, warranty validation or professional inspection. Check
          the current Stark guidance for your exact model, actual usage and
          operating conditions, and use a qualified service provider when
          necessary.
        </p>
        <p>
          Demo and website simulator data is illustrative and is not a reading
          from your motorcycle.
        </p>
      </>
    ),
  },
  {
    id: 'open-source',
    title: 'Open source and intellectual property',
    content: (
      <>
        <p>
          FENR&apos;s published source code is available under the MIT License.
          You may use, study, modify and redistribute that code as its license
          permits, including commercial use, subject to its notice requirements.
          These terms do not take away those permissions or impose a blanket ban
          on reverse engineering, modification or redistribution of MIT-licensed
          material.
        </p>
        <p>
          The applicable license and notices in the{' '}
          <a href="https://github.com/fenrapp/fenr-ios-app/blob/main/LICENSE">
            FENR source repository
          </a>{' '}
          govern those materials. Third-party components, maps and other content
          retain their own licenses and terms. An open-source copyright license
          does not by itself grant trademark rights or permission to imply
          official endorsement.
        </p>
        <p>
          Stark, Apple and other third-party names and marks belong to their
          respective owners. Modified or independently distributed builds may
          behave differently from the FENR build described here.
        </p>
      </>
    ),
  },
  {
    id: 'apple',
    title: 'Apple distribution and beta versions',
    content: (
      <>
        <p>
          For copies obtained through the App Store,{' '}
          <a href="https://www.apple.com/legal/macapps/dev/stdeula/">
            Apple&apos;s Standard EULA
          </a>{' '}
          applies unless a valid custom EULA is supplied with that distribution.
          These product-use terms are not intended to replace that license.
          Open-source permissions remain governed by the relevant open-source
          license.
        </p>
        <p>
          TestFlight builds are beta software and are also subject to{' '}
          <a href="https://www.apple.com/legal/internet-services/itunes/testflight/">
            Apple&apos;s TestFlight terms
          </a>
          . They may expire, change or become unavailable, and can contain
          defects. Beta access is not a promise of continued access, production
          readiness or a release date.
        </p>
        <p>
          FENR support is provided by the developer at the contact address
          above. Apple is not the developer of FENR. Apple&apos;s own
          responsibilities, and any billing or distribution rules that apply to
          its services, remain governed by its agreements and applicable law.
        </p>
      </>
    ),
  },
  {
    id: 'privacy-content',
    title: 'Your data and shared content',
    content: (
      <>
        <p>
          The{' '}
          <Link href="/privacy" prefetch={false}>
            Privacy Policy
          </Link>{' '}
          explains local storage, permissions, maps, beta diagnostics and
          sharing. You keep your rights in the routes, notes and other content
          you create. Using FENR does not grant us a right to publish your
          private riding history.
        </p>
        <p>
          You are responsible for having permission to import or share files and
          information about other people. Review route and log exports before
          sending them. You control copies shared to other apps and recipients,
          and deleting a local record does not delete those copies.
        </p>
        <p>
          FENR has no developer-operated backup of your local bike records.
          Export data you need to keep before deleting it or changing devices.
          Operating-system backups and third-party storage have their own
          limitations and terms.
        </p>
      </>
    ),
  },
  {
    id: 'availability',
    title: 'Availability and changes',
    content: (
      <>
        <p>
          We may update FENR to fix defects, improve compatibility or respond to
          legal or safety needs. Features may change or be withdrawn, and
          external services may be interrupted. We do not promise continuous
          availability or compatibility with future devices or firmware.
        </p>
        <p>
          You may stop using FENR at any time. Stopping use does not undo
          motorcycle settings or erase external copies of your data. Rights
          already granted under the MIT License are not revoked merely because
          an official build or feature is discontinued.
        </p>
        <p>
          Material changes to these terms will be published at{' '}
          <a href="https://fenr.to/terms">fenr.to/terms</a> with an updated date
          and additional notice where required. Changes do not remove accrued
          rights or override any legal requirement for notice or agreement.
        </p>
      </>
    ),
  },
  {
    id: 'warranty-liability',
    title: 'Warranties and liability',
    content: (
      <>
        <p>
          To the extent permitted by law, FENR is provided as available, without
          a promise that it is error-free, suitable for every purpose or able to
          prevent accidents, theft, battery damage, breakdowns or data loss.
          Open-source materials also carry the warranty provisions stated in
          their licenses.
        </p>
        <p>
          To the extent permitted by applicable law, the provider is not
          responsible for indirect or consequential losses arising from use of,
          or inability to use, FENR. This limitation does not exclude or limit
          responsibility that cannot lawfully be excluded or limited.
        </p>
        <p>
          <strong>
            Nothing in these terms excludes mandatory consumer rights or
            liability for fraud, deliberate misconduct, death or personal injury
            caused by negligence where such exclusion is prohibited, or any
            other non-excludable liability.
          </strong>{' '}
          Statutory rights and remedies take priority over inconsistent wording
          in these terms.
        </p>
      </>
    ),
  },
  {
    id: 'law-contact',
    title: 'Governing law and contact',
    content: (
      <>
        <p>
          These product-use terms are governed by Spanish law, without depriving
          consumers of mandatory protections available under the law of their
          usual residence. Consumers retain the right to bring claims before any
          court competent under applicable consumer law. For disputes not
          subject to those mandatory rules, the courts of Barcelona, Spain will
          have jurisdiction.
        </p>
        <p>
          This choice of law does not replace the separate terms governing
          Apple&apos;s services or change the permissions granted by an
          applicable open-source license. If a provision is unenforceable, the
          remaining provisions continue to apply to the extent allowed by law.
        </p>
        <p>
          Questions about FENR or these terms can be sent to:
          <br />
          {legalConfig.provider}
          <br />
          {legalConfig.location}
          <br />
          <a href={`mailto:${legalConfig.email}`}>{legalConfig.email}</a>
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms & Conditions"
      introduction="The essentials of using FENR: what the app provides, its open-source license and the responsibilities that come with connecting to your motorcycle."
      sections={sections}
    />
  );
}
