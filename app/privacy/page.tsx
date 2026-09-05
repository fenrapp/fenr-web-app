import type { Metadata } from 'next';
import { LegalDocument, type LegalSection } from '../legal-document';
import { legalConfig } from '../legal-config';

export const metadata: Metadata = {
  title: 'Privacy Policy | FENR',
  description:
    'How FENR handles motorcycle data, location, diagnostics, support and website visits.',
  alternates: { canonical: 'https://fenr.to/privacy' },
};

const sections: readonly LegalSection[] = [
  {
    id: 'scope',
    title: 'Who we are',
    content: (
      <>
        <p>
          This policy covers the FENR iPhone and Apple Watch apps and the
          website at fenr.to. FENR is provided by {legalConfig.provider}, based
          in {legalConfig.location}. For personal data we process as a
          controller, you can contact us at{' '}
          <a href={`mailto:${legalConfig.email}`}>{legalConfig.email}</a>.
        </p>
        <p>
          FENR is a local-first companion for compatible Stark electric
          motorcycles. The current app has no FENR account, developer-operated
          telemetry backend or FENR cloud-sync service. This does not mean that
          no information leaves your device: maps, TestFlight, website hosting
          and anything you choose to share involve the services described below.
        </p>
      </>
    ),
  },
  {
    id: 'device-data',
    title: 'Information used on your device',
    content: (
      <>
        <ul>
          <li>
            <strong>Bike profile and connection:</strong> the motorcycle
            identification number (VIN), declared power tier, detected
            capabilities, Bluetooth connection information and preferences used
            to pair with your motorcycle and restore your setup.
          </li>
          <li>
            <strong>Telemetry and bike controls:</strong> speed, odometer,
            battery and charging readings, temperatures, power modes, energy
            use, motion readings, diagnostic signals and the results of
            supported configuration requests. These are processed to display the
            dashboard, calculate insights and operate the controls you request.
          </li>
          <li>
            <strong>Ride History:</strong> ride dates and durations, distance,
            speed statistics, energy consumption and recovery, altitude and
            riding-dynamics summaries associated with your bike.
          </li>
          <li>
            <strong>Navigation and routes:</strong> location, heading, GPS
            speed, destinations, route names and coordinates, recorded route
            points, route drafts and imported GPX files. These support search,
            guidance, recording and your route library.
          </li>
          <li>
            <strong>Maintenance Log:</strong> service dates, mileage or riding
            hours, task names, notes, workshop details, costs, currencies and
            reminder settings you enter.
          </li>
          <li>
            <strong>App preferences:</strong> dashboard card order and
            visibility, units, navigation settings, calibration and other
            settings needed to remember your choices.
          </li>
        </ul>
        <p>
          Live readings are not all retained permanently. Saved rides, routes,
          service entries and diagnostic logs have the separate storage and
          deletion rules below. A VIN, route or workshop note may identify you
          or another person; avoid entering information you do not need.
        </p>
      </>
    ),
  },
  {
    id: 'permissions',
    title: 'Permissions and visible information',
    content: (
      <>
        <p>
          <strong>Bluetooth</strong> connects the iPhone or Watch directly to
          the motorcycle. Supported Bluetooth work may continue in the
          background. Denying or revoking access prevents connected bike
          features from working.
        </p>
        <p>
          <strong>Location</strong> is requested with the system&apos;s When In
          Use permission for GPS speed, heading, ride recording and navigation.
          You can change location access and precise-location availability in
          system settings. Restricting access reduces the features that depend
          on it.
        </p>
        <p>
          <strong>Local authentication</strong> may use Face ID or another
          supported device authentication method to authorize a bike-lock
          action. FENR receives an authentication result, not your biometric
          template. A bike-lock PIN saved by FENR is kept in the device Keychain
          with a device-only, when-unlocked access setting; it is not uploaded
          to us.
        </p>
        <p>
          <strong>Notifications</strong> are optional local maintenance
          reminders. <strong>Live Activities</strong> show selected bike and
          charging information on the Lock Screen and Dynamic Island. These
          activities are updated locally, without a FENR push-notification
          server. Information visible on your Lock Screen or Watch may be seen
          by someone nearby. Manage notification previews and Live Activities
          through system settings.
        </p>
        <p>
          The Watch has its own direct Bluetooth connection and local profile
          and settings. It does not depend on an iPhone relay for its live
          telemetry.
        </p>
      </>
    ),
  },
  {
    id: 'maps',
    title: 'Maps, shared links and files',
    content: (
      <>
        <p>
          FENR uses Apple&apos;s MapKit services for map display, place searches
          and road directions. Search text, relevant coordinates, route
          endpoints and technical connection information may be processed by
          Apple to provide those features. See{' '}
          <a href="https://www.apple.com/legal/privacy/data/en/apple-maps/">
            Apple Maps &amp; Privacy
          </a>
          .
        </p>
        <p>
          When you choose to import a supported shared map link, FENR may
          contact Google Maps short-link services to resolve its destination.
          The service receives the requested link and normal connection
          information, such as your IP address. The resolved destination may
          then be used with Apple Maps. See{' '}
          <a href="https://policies.google.com/privacy">
            Google&apos;s Privacy Policy
          </a>
          .
        </p>
        <p>
          The share extension uses an on-device shared app container to pass the
          map link you selected to FENR. GPX files you select are read to import
          routes. These actions do not give us access to your entire file
          library.
        </p>
        <p>
          Exporting a route or diagnostic log and choosing a recipient or app in
          the system share sheet sends that copy to your chosen destination. We
          do not automatically publish routes or logs. Review exports before
          sharing: route points and timestamps can reveal home, work or travel
          patterns. Exported copies are controlled by you and the recipient, not
          by deletion inside FENR.
        </p>
      </>
    ),
  },
  {
    id: 'diagnostics',
    title: 'Bluetooth diagnostic logs',
    content: (
      <>
        <p>
          The iPhone app records local Bluetooth diagnostic sessions to help
          inspect connections and troubleshoot faults. Logs include session
          times, app and operating-system versions, device model, Bluetooth
          operations, technical service identifiers, errors and telemetry
          payloads.
        </p>
        <p>
          The logging implementation redacts VIN and authentication-related
          information and avoids storing peripheral identity in the session
          header. Logs can still contain detailed vehicle and technical
          information. Do not treat an export as guaranteed anonymous.
        </p>
        <p>
          These logs are not automatically sent to the developer. The current
          store retains up to five sessions within an approximately 1 GiB
          storage limit, pruning older sessions as needed and stopping capture
          at the limit. Log storage is marked as excluded from device backups.
          You can delete individual sessions or all stored sessions from the
          diagnostics log screen; a connected session may continue to create new
          records.
        </p>
      </>
    ),
  },
  {
    id: 'storage',
    title: 'Storage, retention and deletion',
    content: (
      <>
        <p>
          FENR uses local system preferences, databases and files for profiles,
          settings, rides, routes, calibration and maintenance records. There is
          no FENR server copy of this local history for us to retrieve or erase
          remotely.
        </p>
        <ul>
          <li>
            Saved rides, routes and maintenance entries remain until you delete
            them using their in-app controls or remove the relevant app data. An
            active route may have a locally saved draft for recovery.
          </li>
          <li>
            Other app preferences remain until changed or removed. There is no
            single account-deletion process because FENR has no user accounts.
          </li>
          <li>
            Deleting the app normally removes its app-container data. Offloading
            is different and may retain data. System backups, shared containers,
            Watch data, exported files and Keychain items can have separate
            lifecycles; uninstalling is not a guarantee that every copy or saved
            credential is erased.
          </li>
          <li>
            Except for diagnostic logs marked as excluded, local data may be
            included in operating-system backups according to your settings.
            Backup copies are managed through Apple or your chosen backup
            provider, not a FENR sync service.
          </li>
        </ul>
        <p>
          Deleting FENR data or uninstalling the app does not undo settings
          already written to your motorcycle. Check the motorcycle itself before
          a sale, handover or reset, and manage data on both iPhone and Watch.
        </p>
        <p>
          If you contact us, we retain your message and any attachments only as
          long as needed to handle the request, resolve related issues or meet
          applicable legal obligations. A longer retention may be necessary for
          an unresolved dispute or legal requirement. You can ask us about or
          request deletion of information you have sent to us.
        </p>
      </>
    ),
  },
  {
    id: 'apple-support',
    title: 'TestFlight, Apple diagnostics and support',
    content: (
      <>
        <p>
          If you test FENR through TestFlight, Apple automatically collects beta
          crash and usage information and shares it with the developer. Feedback
          you submit can also include screenshots, comments and contact
          information. This is separate from FENR&apos;s local Bluetooth logs
          and is not disabled by the absence of an analytics SDK. We use beta
          information to investigate issues and improve FENR, subject to
          Apple&apos;s restrictions. See{' '}
          <a href="https://www.apple.com/legal/privacy/data/en/test-flight/">
            TestFlight &amp; Privacy
          </a>
          .
        </p>
        <p>
          Apple may also process App Store and system diagnostic information
          under its own settings and policies. FENR itself has no advertising
          SDK, cross-app tracking, third-party analytics SDK or sale of personal
          data.
        </p>
        <p>
          When you email support, we receive your email address, message and
          whatever you attach through our email service. You do not need to send
          a full VIN, PIN, private route or unredacted log to ask a question.
          Public GitHub issues are public: do not post sensitive information
          there.
        </p>
      </>
    ),
  },
  {
    id: 'website',
    title: 'When you visit fenr.to',
    content: (
      <>
        <p>
          The website is hosted on Netlify&apos;s content delivery network.
          Requests necessarily transmit technical information such as IP
          address, requested URL, browser information and request time for
          delivery, security and hosting operations. This is distinct from bike
          telemetry. See{' '}
          <a href="https://www.netlify.com/privacy/">
            Netlify&apos;s Privacy Policy
          </a>
          .
        </p>
        <p>
          The website has no forms, advertising pixels or client-side analytics
          scripts. It stores your chosen light or dark appearance in browser
          local storage under <code>fenr-theme</code>. This is a preference, not
          a tracking identifier. Clear the website&apos;s stored data to remove
          it and return to your system appearance. Images and video may remain
          in the browser cache until it expires or you clear it.
        </p>
        <p>
          Links to TestFlight, GitHub and other sites take you to services with
          their own privacy practices. They are not embedded trackers on this
          page.
        </p>
      </>
    ),
  },
  {
    id: 'legal-bases',
    title: 'Purposes, legal bases and recipients',
    content: (
      <>
        <p>
          Where data-protection law applies, we process information necessary to
          provide the features and support you request on the basis of
          performing our agreement with you. Optional permission-dependent
          features use your choices and, where legally required, consent. Device
          permission alone is not treated as consent to unrelated uses.
        </p>
        <p>
          We rely on legitimate interests for proportionate security, fault
          diagnosis and service reliability, taking your rights into account,
          and on legal obligations where retention or disclosure is required. We
          do not make decisions with legal or similarly significant effects
          about you through automated profiling.
        </p>
        <p>
          Recipients are limited to the services described here, recipients you
          choose for exports and, where necessary, service providers handling
          support or hosting on our behalf. We may disclose information when
          legally required or necessary to establish or defend a legal claim.
          Apple and Google also process information under their own service
          policies.
        </p>
        <p>
          External service providers may process information outside your
          country, including outside the European Economic Area. Their policies
          explain their locations and safeguards. Where we arrange a restricted
          international transfer, applicable transfer safeguards are required;
          contact us for information about safeguards relevant to your data.
        </p>
      </>
    ),
  },
  {
    id: 'rights',
    title: 'Your choices and rights',
    content: (
      <>
        <p>
          You can revoke optional permissions in system settings, stop route
          recording, delete saved content, control Lock Screen visibility and
          choose not to export information. Revoking a permission may make the
          corresponding feature unavailable.
        </p>
        <p>
          Subject to applicable law, you may request access, correction,
          erasure, restriction or portability of personal data we hold, object
          to processing based on legitimate interests, and withdraw consent
          without affecting earlier lawful processing. We may need proportionate
          identity verification. Local-only data remains under your device
          controls; contacting us does not give us remote access to it.
        </p>
        <p>
          Contact{' '}
          <a href={`mailto:${legalConfig.email}`}>{legalConfig.email}</a> to
          exercise your rights. You may also complain to your local supervisory
          authority or the{' '}
          <a href="https://www.aepd.es/">
            Spanish Data Protection Agency (AEPD)
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'security-children',
    title: 'Security and younger users',
    content: (
      <>
        <p>
          We minimize developer access by keeping bike records on your device
          and using system storage and authentication protections. No app,
          device or network can guarantee absolute security. Keep your device
          protected, update its software and review what you share.
        </p>
        <p>
          FENR is not directed to children and does not knowingly solicit
          children&apos;s personal information. Use of a motorcycle remains
          subject to the applicable age, licensing and supervision rules.
          Contact us if you believe a child has sent us personal information
          that should be removed.
        </p>
      </>
    ),
  },
  {
    id: 'changes-contact',
    title: 'Updates and contact',
    content: (
      <>
        <p>
          We will update this policy when the app&apos;s data practices or
          applicable requirements change. The current version will be available
          at <a href="https://fenr.to/privacy">fenr.to/privacy</a>, with its
          update date. Where required, we will provide additional notice or
          request consent before a new use.
        </p>
        <p>
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

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      introduction="Your bike data is primarily kept on your devices. Here is what FENR processes, when other services are involved and how you stay in control."
      sections={sections}
    />
  );
}
